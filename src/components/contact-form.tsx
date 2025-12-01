"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { sendEmail } from "@/actions/send-email";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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

export function ContactForm() {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);

		const result = await sendEmail(values);

		setIsSubmitting(false);

		if (result.success) {
			form.reset();
			toast({
				title: "Mensagem Enviada!",
				description: "Obrigado por entrar em contato. Retornaremos em breve.",
			});
		} else {
			if (result.fields) {
				// Handle server-side validation errors
				for (const [key, messages] of Object.entries(result.fields)) {
					if (messages && messages.length > 0) {
						form.setError(key as keyof z.infer<typeof formSchema>, {
							type: "server",
							message: messages[0],
						});
					}
				}
			}

			toast({
				title: "Erro ao Enviar",
				description: result.error || "Ocorreu um erro. Tente novamente.",
				variant: "destructive",
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Seu Nome</FormLabel>
							<FormControl>
								<Input placeholder="Seu Nome" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Seu E-mail</FormLabel>
							<FormControl>
								<Input placeholder="seu@email.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Sua Mensagem</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Conte-nos como podemos ajudar..."
									className="min-h-[120px]"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Enviando...
						</>
					) : (
						"Enviar Mensagem"
					)}
				</Button>
			</form>
		</Form>
	);
}
