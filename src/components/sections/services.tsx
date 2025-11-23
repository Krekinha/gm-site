"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

const services = [
	{
		image: "/images/servicos/manutencao-em-subestacoes-de-media-tensao.jpg",
		title: "Manutenção em Subestações de Média Tensão",
		description:
			"Realizamos manutenção corretiva e preventiva em subestações de 13.8 kV, incluindo troca de fusíveis, chaves seccionadoras, coleta de óleo isolante, reaperto de conexões elétricas, troca de guarnições e buchas de porcelana em alta e baixa tensão, além de ensaios elétricos com instrumentos como mili-ohmímetro, micro-ohmímetro, TTR e fonte de corrente para garantir segurança e performance.",
	},
	{
		image: "/images/servicos/projeto-e-construcao-de-subestacoes.png",
		title: "Projeto e Construção de Subestações",
		description:
			"Desenvolvemos projetos completos, construção de subestações e liberação de carga junto à concessionária CEMIG, garantindo conformidade e eficiência desde o planejamento até a execução.",
	},
	{
		image: "/images/servicos/manutencao-em-rda.jpg",
		title: "Manutenção em Redes Aéreas de Distribuição (RDA)",
		description:
			"Executamos construção e manutenção corretiva em redes aéreas de 13.8 kV, com serviços como substituição de cabos, troca de elos fusíveis, chaves fusíveis, para-raios, instalação de para-raios, manutenção e substituição de transformadores para minimizar interrupções.",
	},
	{
		image:
			"/images/servicos/manutencao-em-instalacoes-eletricas-industriais.png",
		title: "Manutenção em Instalações Elétricas Industriais",
		description:
			"Criamos projetos para novas instalações elétricas em ambientes industriais, atendendo máquinas de pequeno e grande porte, com infraestrutura completa incluindo eletrodutos e eletrocalhas. Também realizamos correções e readequações em sistemas existentes para otimizar desempenho e segurança.",
	},
	{
		image: "/images/servicos/construcao-de-paineis-eletricos.jpg",
		title: "Construção de Painéis Elétricos",
		description:
			"Projetamos, construímos e instalamos painéis elétricos personalizados, incluindo readequação de sistemas elétrico de potência, para aplicações industriais robustas e eficientes.",
	},
	{
		image: "/images/servicos/spda.png",
		title: "SPDA - Sistema de Proteção contra Descargas Atmosféricas",
		description:
			"Oferecemos manutenção, correção, instalação e emissão de laudos técnicos para SPDA, garantindo proteção efetiva contra raios e conformidade com normas de segurança.",
	},
];

interface ServiceCardProps {
	image: string;
	title: string;
	description: string;
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [needsExpansion, setNeedsExpansion] = useState(false);
	const descriptionRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (descriptionRef.current) {
			const lineHeight = parseInt(
				getComputedStyle(descriptionRef.current).lineHeight,
			);
			const maxLines = 4;
			const maxHeight = lineHeight * maxLines;
			setNeedsExpansion(descriptionRef.current.scrollHeight > maxHeight);
		}
	}, []);

	return (
		<Card className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
			{/* Imagem - 20% */}
			<div className="relative w-full h-48 bg-gray-100">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>

			<CardContent className="flex flex-col flex-1 p-6">
				{/* Título - 15% */}
				<h3 className="text-xl font-bold text-primary mb-4 min-h-[60px] flex items-center">
					{title}
				</h3>

				{/* Descrição - 65% */}
				<Collapsible
					open={isOpen}
					onOpenChange={setIsOpen}
					className="flex-1 flex flex-col"
				>
					<div className="flex-1">
						<CollapsibleContent forceMount>
							<p
								ref={descriptionRef}
								className={`text-muted-foreground leading-relaxed ${
									!isOpen && needsExpansion ? "line-clamp-4" : ""
								}`}
							>
								{description}
							</p>
						</CollapsibleContent>
					</div>

					{needsExpansion && (
						<div className="flex justify-end mt-4">
							<CollapsibleTrigger asChild>
								<button
									type="button"
									className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
								>
									{isOpen ? (
										<>
											Ver menos <ChevronUp className="h-4 w-4" />
										</>
									) : (
										<>
											Ver mais <ChevronDown className="h-4 w-4" />
										</>
									)}
								</button>
							</CollapsibleTrigger>
						</div>
					)}
				</Collapsible>
			</CardContent>
		</Card>
	);
};

const Services = () => {
	return (
		/* eslint-disable-next-line */
		<section
			id="services"
			className="bg-[radial-gradient(circle_at_center,_#EDFAFF,_#9ECFFF)] py-16"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-primary">
						Nossos Serviços
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
						Soluções completas e confiáveis para a sua empresa.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<ServiceCard
							key={service.title}
							image={service.image}
							title={service.title}
							description={service.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
