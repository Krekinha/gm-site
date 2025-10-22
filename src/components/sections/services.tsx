import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircuitBoard, Wrench, LayoutGrid, Plug } from 'lucide-react';

const services = [
  {
    icon: <CircuitBoard className="h-10 w-10 text-primary" />,
    title: 'Manutenção e Instalação Elétrica',
    description: 'Serviços completos para instalações prediais e industriais, garantindo segurança e eficiência energética.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Reparação de Máquinas e Equipamentos',
    description: 'Diagnóstico e conserto de equipamentos industriais, minimizando o tempo de parada da sua produção.',
  },
  {
    icon: <LayoutGrid className="h-10 w-10 text-primary" />,
    title: 'Montagem de Quadros Elétricos',
    description: 'Projetamos e montamos quadros de comando e distribuição personalizados para a sua necessidade.',
  },
  {
    icon: <Plug className="h-10 w-10 text-primary" />,
    title: 'Serviços Similares',
    description: 'Soluções elétricas diversas, incluindo automação, cabeamento estruturado e consultoria técnica.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluções completas e confiáveis para a sua empresa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
