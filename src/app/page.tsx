import About from "@/components/sections/about";
import Compliance from "@/components/sections/compliance";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Partners from "@/components/sections/partners";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Testimonials />
			<Compliance />
			<Partners />
			<Contact />
		</>
	);
}
