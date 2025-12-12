"use server";

import { z } from "zod";
import { sendGmail } from "@/lib/gmail";
import { appendToSheet } from "@/lib/google-sheets";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "O nome deve ter pelo menos 2 caracteres.",
	}),
	email: z.string().email({
		message: "Por favor, insira um e-mail válido.",
	}),
	message: z
		.string()
		.min(10, {
			message: "A mensagem deve ter pelo menos 10 caracteres.",
		})
		.max(500, {
			message: "A mensagem não pode ter mais de 500 caracteres.",
		}),
});

type FormData = z.infer<typeof formSchema>;

export type ActionResponse = {
	success: boolean;
	error?: string;
	fields?: Record<string, string[] | undefined>;
};

export async function sendEmail(data: FormData): Promise<ActionResponse> {
	try {
		// Validate data on the server
		const validatedData = formSchema.parse(data);

		// Send email using Gmail API
		const { success: emailSent, error } = await sendGmail({
			to: "gmmanutencoes.drive@gmail.com",
			replyTo: validatedData.email,
			subject: `Novo orçamento de ${validatedData.name}`,
			html: `
				<h2>Novo pedido de orçamento</h2>
				<p><strong>Nome:</strong> ${validatedData.name}</p>
				<p><strong>E-mail:</strong> ${validatedData.email}</p>
				<p><strong>Mensagem:</strong></p>
				<p>${validatedData.message.replace(/\n/g, "<br>")}</p>
			`,
		});

		if (!emailSent) {
			console.error("Gmail error:", error);
			return {
				success: false,
				error: "Erro ao enviar e-mail. Tente novamente.",
			};
		}

		// Save to Google Sheets (non-blocking, won't fail the request if it errors)
		const sheetResult = await appendToSheet({
			name: validatedData.name,
			email: validatedData.email,
			message: validatedData.message,
		});

		if (!sheetResult.success) {
			console.error("Failed to save to sheet:", sheetResult.error);
			// Don't fail the entire request, just log the error
		}

		return { success: true };
	} catch (error) {
		console.error("Send email error:", error);

		if (error instanceof z.ZodError) {
			return {
				success: false,
				error: "Dados inválidos. Verifique os campos.",
				fields: error.flatten().fieldErrors,
			};
		}

		return {
			success: false,
			error: "Erro ao enviar e-mail. Tente novamente.",
		};
	}
}
