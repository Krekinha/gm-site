'use client';

import Link from 'next/link';
import { Button } from './ui/button';

const WhatsAppButton = () => {
  // Replace with the actual phone number
  const phoneNumber = '5531999999999';
  const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento.');

  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-20 right-4 md:bottom-4 md:right-20 rounded-full h-14 w-14 shadow-lg z-50 bg-[#25D366] hover:bg-[#128C7E] text-white"
    >
      <Link
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004-1.141 4.155 4.27-1.12z"/>
        </svg>
      </Link>
    </Button>
  );
};

export default WhatsAppButton;
