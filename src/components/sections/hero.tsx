"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const Hero = () => {
	const heroImage = PlaceHolderImages.find((p) => p.id === "hero-background");

	const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="home"
			className="relative w-full min-h-[600px] md:min-h-[700px] pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20"
		>
			{/* Background Image */}
			{heroImage && (
				<Image
					src={heroImage.imageUrl}
					alt={heroImage.description}
					fill
					priority
					className="object-cover z-0"
					data-ai-hint={heroImage.imageHint}
					sizes="100vw"
				/>
			)}

			{/* Overlay Escuro */}
			<div className="absolute inset-0 bg-black/60 z-10" />

			{/* Conteúdo */}
			<div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
					<div className="text-center md:text-left">
						<div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
								Manutenções Elétricas e Industriais
							</h1>
							<p className="mt-2 text-2xl md:text-3xl font-semibold text-accent">
								Rápidas e Confiáveis em Belo Horizonte e Região
							</p>
						</div>
						<p
							className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-white/90 animate-fade-in"
							style={{ animationDelay: "0.4s" }}
						>
							Desde 2020, prestando serviços de manutenção e instalação elétrica
							para empresas e indústrias.
						</p>
						<div
							className="mt-8 animate-fade-in"
							style={{ animationDelay: "0.6s" }}
						>
							<Button
								asChild
								size="lg"
								className="bg-accent hover:bg-accent/90 text-accent-foreground"
							>
								<Link href="#contact" onClick={handleScrollToContact}>
									Solicite um Orçamento Gratuito
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
