const About = () => {
	return (
		<section id="about" className="bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-primary">
						Sobre a GM Manutenções
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
						Nossa jornada de excelência em serviços elétricos e industriais.
					</p>
				</div>
				<div className="max-w-6xl mx-auto">
					<div className="space-y-6 text-foreground/90 text-base leading-relaxed">
						<div className="clear-both pt-4">
							<img
								src="/images/sections/about/mold-gm-atual.png"
								alt="GM Manutenções - Atual"
								className="
									float-right
									w-[270px] md:w-[330px] h-auto 
									ml-6 
									mb-4
									[shape-outside:url('/images/sections/about/mold-gm-atual.png')]
									[shape-image-threshold:0.5]
									[shape-margin:1rem]
								"
							/>
							<p>
								A dedicação à segurança, à eficiência e à satisfação do cliente
								nos permitiu expandir nossa equipe e nosso portfólio de
								serviços, passando a atender empresas e indústrias de pequeno e
								grande porte. Hoje, operamos com uma equipe qualificada e
								equipamentos de ponta, mantendo o compromisso original do nosso
								fundador: entregar um trabalho confiável, dentro das normas e
								com a agilidade que o seu negócio precisa.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
