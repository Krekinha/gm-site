import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const Contact = () => {
	return (
		<section id="contact" className="bg-radial-highlight">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-primary">
						Entre em Contato
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
						Pronto para iniciar seu projeto? Fale conosco e solicite um
						orçamento sem compromisso.
					</p>
				</div>
				<div className="max-w-4xl mx-auto space-y-12">
					<div className="bg-card p-8 rounded-lg shadow-md">
						<h3 className="text-2xl font-semibold mb-6 text-primary">
							Nossos Canais
						</h3>
						<div className="space-y-4 text-foreground/90">
							<div className="flex items-center gap-4">
								<Mail className="h-6 w-6 text-primary" />
								<a
									href="mailto:contato@gmmanutencoes.com.br"
									className="hover:text-primary transition-colors"
								>
									contato@gmmanutencoes.com.br
								</a>
							</div>
							<div className="flex items-center gap-4">
								<Phone className="h-6 w-6 text-primary" />
								<a
									href="tel:+5531994650007"
									className="hover:text-primary transition-colors"
								>
									(31) 99465-0007
								</a>
							</div>
							<div className="flex items-center gap-4">
								<MessageCircle className="h-6 w-6 text-primary" />
								<a
									href="https://wa.me/5531994650007"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-primary transition-colors"
								>
									(31) 99465-0007
								</a>
							</div>
							<div className="flex items-center gap-4">
								<Instagram className="h-6 w-6 text-primary" />
								<a
									href="https://www.instagram.com/geraldinho_manutencoes"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-primary transition-colors"
								>
									@geraldinho_manutencoes
								</a>
							</div>
							<div className="flex items-center gap-4">
								<MapPin className="flex-shrink-0 h-6 w-6 text-primary" />
								<span>
									Atendemos em Belo Horizonte-MG e Região Metropolitana
								</span>
							</div>
						</div>
					</div>
					<div
						id="orcamento-form"
						className="bg-card p-8 rounded-lg shadow-md scroll-mt-24"
					>
						<h3 className="text-2xl font-semibold mb-6 text-primary">
							Solicite seu Orçamento
						</h3>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
