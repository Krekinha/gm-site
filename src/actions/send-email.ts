"use server";

import { Resend } from "resend";
import { z } from "zod";
import { appendToSheet } from "@/lib/google-sheets";

const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function sendEmail(data: FormData) {
	try {
		console.log("Received data:", data);
		// Validate data on the server
		const validatedData = formSchema.parse(data);

		console.log("Validated data:", validatedData);

		// Send email using Resend
		const { error } = await resend.emails.send({
			from: "GM Manutenções <onboarding@resend.dev>", // Use your verified domain
			to: ["gmmanutencoes.drive@gmail.com"], // Testing email
			replyTo: validatedData.email, // User's email for replies
			subject: `Novo orçamento de ${validatedData.name}`,
			html: `
				<h2>Novo pedido de orçamento</h2>
				<p><strong>Nome:</strong> ${validatedData.name}</p>
				<p><strong>E-mail:</strong> ${validatedData.email}</p>
				<p><strong>Mensagem:</strong></p>
				<p>${validatedData.message.replace(/\n/g, "<br>")}</p>
			`,
		});

		if (error) {
			console.error("Resend error:", error);
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
