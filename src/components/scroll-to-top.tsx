"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Button
			variant="default"
			size="icon"
			className={cn(
				"fixed bottom-4 right-20 rounded-full shadow-lg transition-opacity duration-300 z-50",
				"bg-primary hover:bg-primary/90",
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
			)}
			onClick={scrollToTop}
			aria-label="Voltar ao topo"
		>
			<ArrowUp className="h-6 w-6" />
		</Button>
	);
};

export default ScrollToTop;
