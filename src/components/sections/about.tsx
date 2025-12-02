const About = () => {
	return (
		<section id="about" className="bg-background relative">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
						<div>
							<img
								src="/images/sections/about/mold-gm-atual.png"
								alt="GM Manutenções - Atual"
								className="
									hidden md:block
									float-right
									w-auto md:h-[275px] 
									ml-6 
									mb-4
									[shape-outside:url('/images/sections/about/mold-gm-atual.png')]
									[shape-image-threshold:0.5]
									[shape-margin:1rem]
								"
							/>
							<p className="mb-6">
								Fundada em 2020 por <strong>Jose Geraldo Aleixo</strong>{" "}
								(Geraldinho), um profissional com vasta experiência no setor, a{" "}
								<strong>GM Manutenções</strong> nasceu da paixão por oferecer
								soluções elétricas e industriais de alta qualidade para o
								mercado de Belo Horizonte e região metropolitana. O que começou
								como uma operação individual, focada em pequenos reparos,
								rapidamente evoluiu.
							</p>

							<img
								src="/images/sections/about/mold-gm-atual.png"
								alt="GM Manutenções - Atual"
								className="
									block md:hidden
									mx-auto
									w-auto h-[200px]
									mb-6
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
