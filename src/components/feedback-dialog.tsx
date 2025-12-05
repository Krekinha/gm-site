"use client";

import { Loader2, Star } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { submitFeedback } from "@/actions/submit-feedback";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png",
	"image/webp",
];

const formSchema = z.object({
	name: z.string().min(2, {
		message: "O nome deve ter pelo menos 2 caracteres.",
	}),
	roleCompany: z.string().min(2, {
		message: "Por favor, informe seu cargo e empresa.",
	}),
	rating: z.number().min(1, {
		message: "Por favor, selecione uma nota de 1 a 5 estrelas.",
	}),
	testimonial: z.string().min(60, {
		message: "O depoimento deve ter pelo menos 60 caracteres.",
	}),
	email: z.string().email({
		message: "Por favor, insira um e-mail válido.",
	}),
	photo: z
		.any()
		.optional()
		.refine(
			(files) =>
				!files || files.length === 0 || files[0]?.size <= MAX_FILE_SIZE,
			"O tamanho máximo do arquivo é 5MB.",
		)
		.refine(
			(files) =>
				!files ||
				files.length === 0 ||
				ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
			"Formato de arquivo inválido. Aceito apenas .jpg, .jpeg, .png e .webp.",
		),
	authorization: z.boolean().refine((val) => val === true, {
		message: "Você deve autorizar a publicação para enviar o depoimento.",
	}),
});

interface FeedbackDialogProps {
	children: React.ReactNode;
}

export function FeedbackDialog({ children }: FeedbackDialogProps) {
	const { toast } = useToast();
	const [open, setOpen] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		// Manual validation in onSubmit
		defaultValues: {
			name: "",
			roleCompany: "",
			rating: 5,
			testimonial: "",
			email: "",
			authorization: true,
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);

		// Manual Client-side Validation
		const validationResult = formSchema.safeParse(values);

		if (!validationResult.success) {
			console.log("Validation failed:", validationResult.error.flatten());

			// Map Zod errors to React Hook Form errors
			validationResult.error.issues.forEach((issue) => {
				const path = issue.path[0] as keyof z.infer<typeof formSchema>;
				form.setError(path, {
					type: "manual",
					message: issue.message,
				});
			});

			setIsSubmitting(false);
			return; // Stop submission
		}

		// Submit to Google Sheets via server action
		const result = await submitFeedback({
			name: values.name,
			roleCompany: values.roleCompany,
			rating: values.rating,
			testimonial: values.testimonial,
			email: values.email,
			authorization: values.authorization,
			// Note: photo upload would require additional handling (e.g., upload to cloud storage)
		});

		if (!result.success) {
			toast({
				title: "Erro ao enviar",
				description: result.error || "Tente novamente mais tarde.",
				variant: "destructive",
			});
			setIsSubmitting(false);
			return;
		}

		setIsSubmitting(false);
		setOpen(false);
		form.reset();

		toast({
			title: "Avaliação Enviada!",
			description:
				"Obrigado pelo seu feedback. Ele é muito importante para nós.",
		});
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Deixar Avaliação</DialogTitle>
					<DialogDescription>
						Compartilhe sua experiência com a GM Manutenções.
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6 py-4"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nome Completo *</FormLabel>
										<FormControl>
											<Input placeholder="Seu nome" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="roleCompany"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Cargo e Empresa *</FormLabel>
										<FormControl>
											<Input placeholder="Ex: Diretor, Empresa X" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>E-mail (não será publicado) *</FormLabel>
									<FormControl>
										<Input placeholder="seu@email.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="rating"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Sua Nota *</FormLabel>
									<FormControl>
										<div className="flex gap-1">
											{[1, 2, 3, 4, 5].map((star) => (
												<button
													key={star}
													type="button"
													className={cn(
														"p-1 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded-full",
														field.value >= star
															? "text-yellow-400"
															: "text-gray-300",
													)}
													onClick={() => field.onChange(star)}
												>
													<Star
														className={cn(
															"h-8 w-8",
															field.value >= star ? "fill-current" : "",
														)}
													/>
												</button>
											))}
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="testimonial"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Seu Depoimento *</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Conte como foi sua experiência com nossos serviços... (mínimo 60 caracteres)"
											className="min-h-[120px]"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Mínimo de 60 caracteres. Seja detalhado se possível.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="photo"
							render={({ field: { value, onChange, ...field } }) => (
								<FormItem>
									<FormLabel>Sua Foto (Opcional)</FormLabel>
									<FormControl>
										<div className="flex items-center gap-4">
											<Input
												{...field}
												type="file"
												accept="image/*"
												onChange={(event) => {
													onChange(event.target.files);
												}}
												className="cursor-pointer"
											/>
										</div>
									</FormControl>
									<FormDescription>
										JPG, PNG ou WebP. Máximo 5MB.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="authorization"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel>Autorizo a publicação *</FormLabel>
										<FormDescription>
											Autorizo a GM Manutenções a publicar meu depoimento, nome,
											cargo, empresa e foto/logo no site e materiais
											institucionais.
										</FormDescription>
									</div>
								</FormItem>
							)}
						/>

						<div className="flex justify-end pt-4">
							<Button
								type="submit"
								disabled={isSubmitting}
								className="w-full sm:w-auto"
							>
								{isSubmitting ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Enviando...
									</>
								) : (
									"Enviar Avaliação"
								)}
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
