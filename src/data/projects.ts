export type Project = {
	slug: string;
	name: string;
	platform: string;
	description: string;
	href: string;
};

export const projects: Project[] = [
	{
		slug: "lattice",
		name: "Lattice",
		platform: "iOS",
		description: "habit tracker",
		href: "#",
	},
	{
		slug: "atlas",
		name: "Atlas",
		platform: "cross-platform",
		description: "design system",
		href: "#",
	},
];
