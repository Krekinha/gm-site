import { BadgeCheck, FileText, HardHat } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const complianceItems = [
	{
		icon: <BadgeCheck className="h-10 w-10 text-primary" />,
		title: "Normas Regulamentadoras (NRs)",
		description:
			"Nossa equipe é treinada e certificada nas principais NRs (como NR-10, NR-18, NR-35, etc), garantindo a máxima segurança em todos os serviços prestados.",
	},
	{
		icon: <HardHat className="h-10 w-10 text-primary" />,
		title: "Conformidade em SST",
		description:
			"Estamos devidamente registrados no CREA-MG e contamos com o suporte de Técnico em Segurança do Trabalho e de Engenheiro qualificado para emissão de ART's em nossos projetos.",
	},
];

const Compliance = () => {
	return (
		<section id="compliance" className="bg-radial-highlight">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-primary">
						Normas e Conformidade
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
						Tranquilidade e segurança para sua empresa, com total conformidade
						técnica e legal.
					</p>
				</div>
				<div className="flex flex-col md:flex-row gap-8 justify-center">
					{complianceItems.map((item, index) => (
						<Card
							key={item.title}
							className="text-center hover:shadow-lg max-w-[380px] transition-shadow duration-300"
						>
							<CardHeader className="items-center">
								{item.icon}
								<CardTitle className="mt-4">{item.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">{item.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Compliance;
