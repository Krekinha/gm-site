import { Star } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
	{
		id: "testimonial-1",
		name: "João Silva",
		company: "Diretor, Indústria Têxtil",
		text: "A GM Manutenções resolveu um problema elétrico complexo que paralisava nossa produção. O serviço foi rápido, profissional e o resultado superou nossas expectativas. Recomendo!",
		rating: 5,
	},
	{
		id: "testimonial-2",
		name: "Maria Oliveira",
		company: "Gerente, Supermercado XYZ",
		text: "Contratamos a GM para a manutenção preventiva e estamos muito satisfeitos. A equipe é pontual, organizada e muito competente. Nossa operação está mais segura agora.",
		rating: 5,
	},
	{
		id: "testimonial-3",
		name: "Carlos Pereira",
		company: "CEO, Startup de Logística",
		text: "Serviço impecável na montagem dos nossos quadros elétricos. Entenderam perfeitamente nossa necessidade e entregaram uma solução robusta e escalável. Excelente parceria.",
		rating: 5,
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials" className="bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-primary">
						O Que Dizem Nossos Clientes
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
						A satisfação de quem confia em nosso trabalho é nossa maior
						conquista.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => {
						const image = PlaceHolderImages.find(
							(p) => p.id === testimonial.id,
						);
						return (
							<Card key={testimonial.id} className="flex flex-col">
								<CardContent className="pt-6 flex-grow">
									<p className="text-muted-foreground italic">
										"{testimonial.text}"
									</p>
								</CardContent>
								<CardHeader className="mt-auto pt-4">
									<div className="flex items-center space-x-4">
										<Avatar>
											{image && (
												<AvatarImage
													src={image.imageUrl}
													alt={testimonial.name}
													data-ai-hint={image.imageHint}
												/>
											)}
											<AvatarFallback>
												{testimonial.name.charAt(0)}
											</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-semibold text-foreground">
												{testimonial.name}
											</p>
											<p className="text-sm text-muted-foreground">
												{testimonial.company}
											</p>
										</div>
									</div>
									<div className="flex mt-4">
										{Array.from({ length: testimonial.rating }).map((_, i) => (
											<Star
												// biome-ignore lint/suspicious/noArrayIndexKey: rating stars are static
												key={i}
												className="h-5 w-5 fill-accent text-accent"
											/>
										))}
									</div>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
