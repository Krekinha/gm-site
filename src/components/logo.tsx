import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
	className?: string;
}

const Logo = ({ className }: LogoProps) => (
	<div className={cn("flex flex-col items-center justify-center", className)}>
		<Image
			src="/images/gm-logo.png"
			alt="GM Manutenções Logo"
			width={100}
			height={40}
			className="h-auto w-auto"
			priority
		/>
	</div>
);

export default Logo;
