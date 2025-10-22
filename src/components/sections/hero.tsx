'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Hero = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center p-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight">
            Manutenções Elétricas e Industriais
          </h1>
          <p className="mt-2 text-2xl md:text-4xl font-semibold text-accent">
            Rápidas e Confiáveis em Belo Horizonte e Região
          </p>
        </div>
        <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/90 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Desde 2020, prestando serviços de manutenção e instalação elétrica para empresas e indústrias.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact" onClick={handleScrollToContact}>
              Solicite um Orçamento Gratuito
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
