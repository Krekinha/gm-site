"use client";

import {
	Briefcase,
	Info,
	Menu,
	MessageSquareQuote,
	Phone,
	ShieldCheck,
	X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
	{ name: "Sobre a GM", href: "#about", icon: Info },
	{ name: "Serviços", href: "#services", icon: Briefcase },
	{ name: "Depoimentos", href: "#testimonials", icon: MessageSquareQuote },
	{ name: "Conformidade", href: "#compliance", icon: ShieldCheck },
	{ name: "Contato", href: "#contact", icon: Phone },
];

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const targetElement = document.querySelector(href);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
		setMobileMenuOpen(false);
	};

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				isScrolled
					? "bg-[#003366ff]/95 "
					: "bg-transparent",
			)}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<Link
						href="/"
						onClick={(e) => handleLinkClick(e, "#home")}
						className="flex items-center"
					>
						<Logo className="h-12 w-auto" />
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex md:space-x-4 lg:space-x-6">
						{navLinks.map((link) => (
							<Button asChild variant="link" key={link.name}>
								<Link
									href={link.href}
									onClick={(e) => handleLinkClick(e, link.href)}
									className="text-lg font-medium text-white hover:text-white/80 transition-colors"
								>
									{link.name}
								</Link>
							</Button>
						))}
					</nav>

					{/* Mobile Navigation */}
					<div className="md:hidden">
						<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
							<SheetTrigger asChild>
								<button
									type="button"
									className="text-white hover:text-white/80"
								>
									<Menu className="h-10 w-10" />
									<span className="sr-only">Abrir menu</span>
								</button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="bg-[#003366ff] border-none p-0 text-white"
							>
								<SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
								<div className="flex flex-col h-full">
									<div className="flex justify-center items-center p-4 border-b border-white/10">
										<Link href="/" onClick={(e) => handleLinkClick(e, "#home")}>
											<Logo className="h-12 w-auto" />
										</Link>
									</div>
									<nav className="flex-1 flex flex-col items-start justify-start pt-8 px-6 space-y-6">
										{navLinks.map((link) => (
											<Link
												key={link.name}
												href={link.href}
												onClick={(e) => handleLinkClick(e, link.href)}
												className="flex items-center space-x-4 text-lg font-medium text-white hover:text-white/80 transition-colors w-full"
											>
												<link.icon className="h-5 w-5" />
												<span>{link.name}</span>
											</Link>
										))}
									</nav>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
