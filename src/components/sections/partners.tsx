import Image from "next/image";
import { Card } from "@/components/ui/card";

const partners = [
	{
		name: "Vilma Alimentos",
		logo: "/images/empresas-parceiras/vilma-alimentos.svg",
	},
	{ name: "Leroy Merlin", logo: "/images/empresas-parceiras/leroy-merlin.svg" },
	{ name: "Manserv", logo: "/images/empresas-parceiras/manserv.svg" },
	{ name: "Arcor", logo: "/images/empresas-parceiras/arcor.svg" },
	{
		name: "Café 3 Corações",
		logo: "/images/empresas-parceiras/cafe-3-coracoes.svg",
	},
	{ name: "Huawei", logo: "/images/empresas-parceiras/huawei.svg" },
	{
		name: "Cushman & Wakefield",
		logo: "/images/empresas-parceiras/cushman-e-wakefield.svg",
	},
	{
		name: "Atlas Schindler",
		logo: "/images/empresas-parceiras/atlas-shindler.svg",
	},
	{ name: "AM/PM", logo: "/images/empresas-parceiras/ampm.svg" },
	{ name: "TOTVS", logo: "/images/empresas-parceiras/totvs.svg" },

	{ name: "WeWork", logo: "/images/empresas-parceiras/wework.svg" },
	{ name: "All4Labels", logo: "/images/empresas-parceiras/all4labels.svg" },
	{
		name: "RGL Engenharia",
		logo: "/images/empresas-parceiras/rgl-engenharia.svg",
	},
	{
		name: "Fasor Engenharia",
		logo: "/images/empresas-parceiras/fasor-engenharia.svg",
	},

	{
		name: "Stone Equipamentos",
		logo: "/images/empresas-parceiras/stone-equipamentos.svg",
	},
];

const Partners = () => {
	return (
		<section id="partners" className="bg-secondary">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-primary">
						Empresas Parceiras
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
						Construímos relações de confiança com empresas que valorizam a
						qualidade.
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{partners.map((partner) => (
						<Card
							key={partner.name}
							className="flex items-center justify-center p-4"
						>
							<div className="relative h-16 w-40">
								<Image
									src={partner.logo}
									alt={`Logo ${partner.name}`}
									fill
									className="object-contain"
									sizes="160px"
								/>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partners;
