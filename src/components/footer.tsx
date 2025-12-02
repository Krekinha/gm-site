import {
	Building2,
	Headset,
	Instagram,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
} from "lucide-react";
import Link from "next/link";
import Logo from "./logo";
import { Separator } from "./ui/separator";

const Footer = () => {
	return (
		<footer className="bg-primary">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Column 1: Logo */}
					<div className="flex flex-col items-center md:items-start">
						<Logo />
					</div>

					{/* Column 2: Address & Info */}
					<div className="flex flex-col items-center md:items-start space-y-2">
						<div className="flex items-center gap-2 mb-4 text-primary-foreground">
							<MapPin className="h-5 w-5" />
							<h3 className="font-semibold text-lg">Endereço</h3>
						</div>
						<p className="text-center md:text-left text-sm text-primary-foreground">
							Atendemos em Belo Horizonte-MG e Região Metropolitana.
						</p>
						<Separator className="bg-primary-foreground/20 w-1/3" />
						<div className="text-center mb-4 md:text-left text-sm text-primary-foreground/80 space-y-1">
							<p>Rua São Paulo, 500, Santa Cruz</p>
							<p>Betim/MG</p>
							<p>CEP 32667-368</p>
							<p className="pt-2 font-semibold">CNPJ 37.097.718/0001-58</p>
						</div>
						<Separator className="md:hidden bg-primary-foreground/20 w-full mt-4" />
					</div>

					{/* Column 3: Navigation Links */}
					<div className="flex flex-col items-center md:items-start">
						<div className="flex items-center gap-2 mb-4 text-primary-foreground">
							<Building2 className="h-5 w-5" />
							<h3 className="font-semibold text-lg">A Empresa</h3>
						</div>
						<ul className="space-y-2 text-sm text-primary-foreground/80 text-center md:text-left">
							<li>
								<Link
									href="#about"
									className="hover:text-white transition-colors"
								>
									Sobre a GM
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="hover:text-white transition-colors"
								>
									Serviços
								</Link>
							</li>
							<li>
								<Link
									href="#testimonials"
									className="hover:text-white transition-colors"
								>
									Depoimentos
								</Link>
							</li>
							<li>
								<Link
									href="#compliance"
									className="hover:text-white transition-colors"
								>
									Conformidade
								</Link>
							</li>
							<li>
								<Link
									href="#partners"
									className="hover:text-white transition-colors"
								>
									Empresas Parceiras
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="hover:text-white transition-colors"
								>
									Contato
								</Link>
							</li>
						</ul>
						<Separator className="md:hidden bg-primary-foreground/20 w-full mt-8" />
					</div>

					{/* Column 4: Contact & Socials */}
					<div className="flex flex-col items-center md:items-start">
						<div className="w-fit">
							<div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-primary-foreground">
								<Headset className="h-5 w-5" />
								<h3 className="font-semibold text-lg">Contato</h3>
							</div>
							<ul className="space-y-4 text-sm text-primary-foreground/80">
								<li>
									<a
										href="mailto:contato@gmmanutencoes.com.br"
										className="flex items-center gap-3 hover:text-white transition-colors group"
									>
										<div className="p-2 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
											<Mail className="h-4 w-4" />
										</div>
										<span>contato@gmmanutencoes.com.br</span>
									</a>
								</li>
								<li>
									<a
										href="tel:+5531994650007"
										className="flex items-center gap-3 hover:text-white transition-colors group"
									>
										<div className="p-2 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
											<Phone className="h-4 w-4" />
										</div>
										<span>(31) 99465-0007</span>
									</a>
								</li>
								<li>
									<a
										href="https://wa.me/5531994650007"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 hover:text-white transition-colors group"
									>
										<div className="p-2 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
											<MessageCircle className="h-4 w-4" />
										</div>
										<span>(31) 99465-0007</span>
									</a>
								</li>
								<li>
									<a
										href="https://www.instagram.com/geraldinho_manutencoes"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 hover:text-white transition-colors group"
									>
										<div className="p-2 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
											<Instagram className="h-4 w-4" />
										</div>
										<span>@geraldinho_manutencoes</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
					<p>
						&copy; {new Date().getFullYear()} GM Manutenções. Todos os direitos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
