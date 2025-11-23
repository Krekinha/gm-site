import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "./ui/button";

const Footer = () => {
	return (
		<footer className="bg-primary">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="flex flex-col items-center md:items-start space-y-4">
						<Logo />
						<p className="text-center md:text-left text-sm text-primary-foreground">
							Manutenções Elétricas e Industriais em Belo Horizonte e Região.
						</p>
						<div className="flex space-x-4">
							<Button asChild variant="ghost" size="icon">
								<Link href="#" aria-label="Facebook">
									<Facebook className="h-5 w-5 text-primary-foreground" />
								</Link>
							</Button>
							<Button asChild variant="ghost" size="icon">
								<Link href="#" aria-label="Instagram">
									<Instagram className="h-5 w-5 text-primary-foreground" />
								</Link>
							</Button>
							<Button asChild variant="ghost" size="icon">
								<Link href="#" aria-label="LinkedIn">
									<Linkedin className="h-5 w-5 text-primary-foreground" />
								</Link>
							</Button>
						</div>
					</div>

					<div className="text-center md:text-left">
						<h3 className="font-semibold text-primary-foreground">Contato</h3>
						<ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
							<li>
								<p>Email: contato@gmmanutencoes.com.br</p>
							</li>
							<li>
								<p>Telefone: (31) 99999-9999</p>
							</li>
							<li>
								<p>Endereço: Belo Horizonte, MG</p>
							</li>
						</ul>
					</div>

					<div className="text-center md:text-left">
						<h3 className="font-semibold text-primary-foreground">
							Informações
						</h3>
						<ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
							<li>
								<p>CNPJ: 00.000.000/0001-00</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
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
