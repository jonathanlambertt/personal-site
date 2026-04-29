export type Project = {
  slug: string;
  name: string;
  platform: string;
  description: string;
  href: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "wayfinding-pnnl",
    name: "Wayfinding at PNNL",
    platform: "mobile",
    description: "map service",
    href: "#",
    image: "/images/project1.png",
  },
  {
    slug: "tabletop",
    name: "Tabletop",
    platform: "web",
    description: "board game app",
    href: "#",
    image: "",
  },
];
