export type Project = {
  name: string;
  description: string;
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "Strivvy",
    description:
      "Social link sharing iOS app built with React Native and Django.",
    href: "https://github.com/jonathanlambertt/strivvy-frontend/blob/main/README.md",
    image: "/images/strivvy_project.png",
  },
  {
    name: "Tabletop",
    description: "Board game meetup website built with React and Supabase.",
    href: "https://tabletop.sh/",
    image: "/images/project1.png",
  },
];
