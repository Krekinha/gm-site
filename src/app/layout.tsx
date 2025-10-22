import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import WhatsAppButton from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'GM Manutenções | Elétrica e Industrial em BH e Região',
  description:
    'Desde 2020, prestando serviços de manutenção e instalação elétrica para empresas e indústrias em Belo Horizonte e região. Solicite um orçamento gratuito!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
