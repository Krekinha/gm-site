import { ContactForm } from '@/components/contact-form';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Entre em Contato</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Pronto para iniciar seu projeto? Fale conosco e solicite um orçamento sem compromisso.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Solicite seu Orçamento</h3>
            <ContactForm />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-semibold mb-2 text-primary">Nossos Canais</h3>
            <div className="space-y-4 text-foreground/90">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary"/>
                  <span>contato@gmmanutencoes.com.br</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary"/>
                  <span>(31) 99999-9999</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary"/>
                  <span>Belo Horizonte e Região Metropolitana, MG</span>
                </div>
            </div>
             <div className="mt-4">
                <h4 className="text-lg font-semibold text-primary">Siga-nos</h4>
                <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-6 w-6"/></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6"/></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-6 w-6"/></a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
