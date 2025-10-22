import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const portfolioItems = [
  {
    id: 'portfolio-1',
    title: 'Instalação Industrial',
    description: 'Implementação completa do sistema elétrico para uma nova linha de produção, otimizando a eficiência e segurança.',
  },
  {
    id: 'portfolio-2',
    title: 'Modernização de Painel Elétrico',
    description: 'Substituição e modernização de painel de controle antigo, resultando em maior confiabilidade e facilidade de manutenção.',
  },
  {
    id: 'portfolio-3',
    title: 'Manutenção Preventiva Comercial',
    description: 'Contrato de manutenção preventiva para um grande centro comercial, garantindo a operação contínua e segura de todas as instalações.',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">GM em Ação</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja a qualidade e o profissionalismo do nosso trabalho em projetos reais.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {portfolioItems.map((item) => {
              const image = PlaceHolderImages.find((p) => p.id === item.id);
              return (
                <CarouselItem key={item.id}>
                  <Card className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                       {image && (
                         <div className="relative h-64 md:h-full">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                         </div>
                       )}
                      <div className="flex flex-col justify-center">
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription className="pt-2">{item.description}</CardDescription>
                        </CardHeader>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
