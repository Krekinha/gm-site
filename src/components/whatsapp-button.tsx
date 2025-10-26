"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
	// Replace with the actual phone number
	const phoneNumber = "5531999999999";
	const message = encodeURIComponent(
		"Olá! Gostaria de solicitar um orçamento.",
	);

	return (
		<Button
			asChild
			size="icon"
			className="fixed bottom-4 right-4 rounded-full h-14 w-14 shadow-lg z-50 bg-[#25D366] hover:bg-[#128C7E] text-white"
		>
			<Link
				href={`https://wa.me/${phoneNumber}?text=${message}`}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Fale conosco no WhatsApp"
			>
				<Image
					src="/images/whatsapp.svg"
					alt="WhatsApp"
					width={28}
					height={28}
					className="text-white"
				/>
			</Link>
		</Button>
	);
};

export default WhatsAppButton;
