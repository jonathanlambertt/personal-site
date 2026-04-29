import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<Projects />
			</main>
		</>
	);
}
