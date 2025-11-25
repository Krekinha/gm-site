"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const Hero = () => {
	const heroImage = PlaceHolderImages.find((p) => p.id === "hero-image");

	const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		document
			.querySelector("#orcamento-form")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="home"
			className="relative w-full min-h-[600px] md:min-h-[700px] pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 bg-gradient-to-t from-[#2c70b5] to-[#003366] "
		>
			{/* Background Image - Absolute Left */}
			<div className="absolute left-0 bottom-0 w-[40%] h-full z-10 hidden md:block">
				{heroImage && (
					<Image
						src={heroImage.imageUrl}
						alt={heroImage.description}
						priority
						fill
						className="object-cover object-right-bottom"
						data-ai-hint={heroImage.imageHint}
						sizes="40vw"
					/>
				)}
			</div>

			{/* Overlay Escuro */}
			<div className="absolute inset-0 bg-black/25 z-10" />

			{/* Conteúdo */}
			<div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
				{/* Mobile Layout - Shape Outside */}
				<div className="md:hidden">
					<img
						src="/images/sections/hero/hero-eletricista-mobile.png"
						alt="Eletricista GM Manutenções"
						className="
						float-left 
						w-[212px] h-auto 
						mr-4 
						mb-4
						mt-12
						-ml-4 sm:-ml-6
						[shape-outside:url('/images/sections/hero/hero-eletricista-mobile.png')]
						[shape-image-threshold:0.5]
						[shape-margin:1rem]
					"
					/>
					<div className="text-right">
						<div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
							<h1 className="text-3xl font-bold text-white tracking-tight leading-tight">
								Manutenções e Instalações Elétricas Para Sua Empresa
							</h1>
							<p className="mt-2 text-2xl font-semibold text-accent">
								Confiança Conectada à Sua Rede
							</p>
						</div>
						<p
							className="mt-4 text-lg text-white/90 animate-fade-in"
							style={{ animationDelay: "0.4s" }}
						>
							Desde 2020, prestando serviços de manutenção e instalação elétrica
							para empresas e indústrias
						</p>
						<p
							className="mt-4 text-lg text-white/90 animate-fade-in"
							style={{ animationDelay: "0.4s" }}
						>
							Em Belo Horizonte e Região Metropolitana
						</p>
					</div>
					{/* Clear float to ensure button is below */}
					<div className="clear-both"></div>
					<div
						className="mt-8 animate-fade-in"
						style={{ animationDelay: "0.6s" }}
					>
						<Button
							asChild
							size="lg"
							className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
						>
							<Link href="#orcamento-form" onClick={handleScrollToContact}>
								Solicite um Orçamento Gratuito
							</Link>
						</Button>
					</div>
				</div>

				{/* Desktop Layout - Grid */}
				<div className="hidden md:grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 items-center h-full">
					<div className="hidden md:block">
						{/* Spacer for the absolute image */}
					</div>
					<div className="text-center md:text-left md:col-start-2">
						<div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
								Manutenções e Instalações Elétricas Para Sua Empresa
							</h1>
							<p className="mt-2 text-2xl md:text-3xl font-semibold text-accent">
								Confiança Conectada à Sua Rede
							</p>
						</div>
						<p
							className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-white/90 animate-fade-in"
							style={{ animationDelay: "0.4s" }}
						>
							Desde 2020, prestando serviços de manutenção e instalação elétrica
							para empresas e indústrias
						</p>
						<p
							className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-white/90 animate-fade-in"
							style={{ animationDelay: "0.4s" }}
						>
							Atendemos Belo Horizonte e Região Metropolitana
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
								<Link href="#orcamento-form" onClick={handleScrollToContact}>
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
