export type Project = {
  name: string;
  description: string;
  href: string;
  image: string | null;
};

export const projects: Project[] = [
  {
    name: "Cinebook",
    description:
      "Social movie logging app. Rate, log, and share your movie taste with friends.",
    href: "https://github.com/jonathanlambertt/movie-log",
    image: "/images/cinebook-thumbnail-v2.png",
  },
<<<<<<< HEAD
  {
    name: "Tabletop.sh",
    description: "Board game meetup website for the Tri-Cities.",
    href: "https://tabletop.sh/",
    image: null,
  },
  {
    name: "Strivvy",
    description: "Link sharing iOS app built with React Native and Django.",
    href: "https://github.com/jonathanlambertt/strivvy-frontend/tree/main",
    image: "/images/strivvy-thumbnail-v2.png",
  },
=======
>>>>>>> 6db3616ccff2572ce0f36fda74e5ad1796751bb4
];
