export type Project = {
  name: string;
  description: string;
  href: string;
  image: string | null;
};

export const projects: Project[] = [
  {
    name: "Strivvy",
    description:
      "Social link sharing iOS app built with React Native and Django.",
    href: "https://github.com/jonathanlambertt/strivvy-frontend/tree/main",
    image: "/images/strivvy_project.png",
  },
];
