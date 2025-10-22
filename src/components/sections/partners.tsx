import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partnerIds = ['partner-1', 'partner-2', 'partner-3', 'partner-4'];

const Partners = () => {
  return (
    <section id="partners" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Empresas Parceiras</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Construímos relações de confiança com empresas que valorizam a qualidade.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partnerIds.map((id) => {
            const image = PlaceHolderImages.find((p) => p.id === id);
            if (!image) return null;
            return (
              <div key={id} className="relative h-16 w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-contain"
                  data-ai-hint={image.imageHint}
                  sizes="160px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
