import Image from "next/image";

const partners = [
	{ name: "All4Labels", logo: "/images/empresas-parceiras/all4labels.svg" },
	{ name: "AM/PM", logo: "/images/empresas-parceiras/ampm.svg" },
	{ name: "Arcor", logo: "/images/empresas-parceiras/arcor.svg" },
	{
		name: "Atlas Schindler",
		logo: "/images/empresas-parceiras/atlas-shindler.svg",
	},
	{
		name: "Café 3 Corações",
		logo: "/images/empresas-parceiras/cafe-3-coracoes.svg",
	},
	{
		name: "Cushman & Wakefield",
		logo: "/images/empresas-parceiras/cushman-e-wakefield.svg",
	},
	{
		name: "Fasor Engenharia",
		logo: "/images/empresas-parceiras/fasor-engenharia.svg",
	},
	{ name: "Huawei", logo: "/images/empresas-parceiras/huawei.svg" },
	{ name: "Leroy Merlin", logo: "/images/empresas-parceiras/leroy-merlin.svg" },
	{ name: "Manserv", logo: "/images/empresas-parceiras/manserv.svg" },
	{
		name: "RGL Engenharia",
		logo: "/images/empresas-parceiras/rgl-engenharia.svg",
	},
	{
		name: "Stone Equipamentos",
		logo: "/images/empresas-parceiras/stone-equipamentos.svg",
	},
	{ name: "TOTVS", logo: "/images/empresas-parceiras/totvs.svg" },
	{
		name: "Vilma Alimentos",
		logo: "/images/empresas-parceiras/vilma-alimentos.svg",
	},
	{ name: "WeWork", logo: "/images/empresas-parceiras/wework.svg" },
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
				<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
					{partners.map((partner) => (
						<div
							key={partner.name}
							className="relative h-16 w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
						>
							<Image
								src={partner.logo}
								alt={`Logo ${partner.name}`}
								fill
								className="object-contain"
								sizes="160px"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partners;
