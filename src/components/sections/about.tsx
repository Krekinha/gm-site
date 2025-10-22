import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Zap, Wrench } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Sobre a GM Manutenções</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa jornada de excelência em serviços elétricos e industriais.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-foreground/90 text-base leading-relaxed">
            <p>
              Fundada em 2020 por Geraldo Magela, um profissional com vasta experiência no setor, a <strong>GM Manutenções</strong> nasceu da paixão por oferecer soluções elétricas e industriais de alta qualidade para o mercado de Belo Horizonte e região metropolitana.
            </p>
            <p>
              O que começou como uma operação individual, focada em pequenos reparos, rapidamente evoluiu. A dedicação à segurança, à eficiência e à satisfação do cliente nos permitiu expandir nossa equipe e nosso portfólio de serviços, passando a atender empresas e indústrias de pequeno e grande porte.
            </p>
            <p>
              Hoje, operamos com uma equipe qualificada e equipamentos de ponta, mantendo o compromisso original do nosso fundador: entregar um trabalho confiável, dentro das normas e com a agilidade que o seu negócio precisa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="mt-4">Fundador Experiente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Liderança com profundo conhecimento técnico e de mercado.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="mt-4">Evolução Contínua</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">De reparos simples a projetos industriais complexos.</p>
              </CardContent>
            </Card>
            <Card className="text-center col-span-1 sm:col-span-2">
              <CardHeader>
                <Wrench className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="mt-4">Operação Atual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Equipe qualificada e foco em segurança para atender B2B.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
