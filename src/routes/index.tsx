import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{
				name: "description",
				content:
					"Jonathan Lambert designs and builds thoughtful digital products — from interface to implementation.",
			},
		],
	}),
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
