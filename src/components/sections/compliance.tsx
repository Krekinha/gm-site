import { BadgeCheck, FileText, HardHat } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const complianceItems = [
	{
		icon: <BadgeCheck className="h-10 w-10 text-primary" />,
		title: "Normas Regulamentadoras (NRs)",
		description:
			"Nossa equipe é treinada e certificada nas principais NRs (como NR-10 e NR-35), garantindo a máxima segurança em todos os serviços.",
	},
	{
		icon: <FileText className="h-10 w-10 text-primary" />,
		title: "CREA-MG e ART",
		description:
			"Estamos devidamente registrados no CREA-MG e contamos com o apoio de engenheiros qualificados para emitir ARTs em nossos projetos.",
	},
	{
		icon: <HardHat className="h-10 w-10 text-primary" />,
		title: "Qualificação Profissional",
		description:
			"Investimos constantemente na qualificação dos nossos técnicos para estarem sempre atualizados com as melhores práticas e tecnologias do mercado.",
	},
];

const Compliance = () => {
	return (
		<section
			id="compliance"
			className="bg-[radial-gradient(circle_at_center,_#EDFAFF,_#9ECFFF)]"
		>
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
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{complianceItems.map((item, index) => (
						<Card
							key={index}
							className="text-center hover:shadow-lg transition-shadow duration-300"
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
