export type Project = {
  owner: string;
  name: string;
  description: string;
  href: string;
  language: string;
  languageColor: string;
  stars?: number;
};

export const projects: Project[] = [
  {
    owner: "jonathanlambertt",
    name: "strivvy",
    description:
      "Social link sharing iOS app built with React Native and Django.",
    href: "https://github.com/jonathanlambertt/strivvy-frontend/blob/main/README.md",
    language: "JavaScript",
    languageColor: "#f1e05a",
  },
  {
    owner: "jonathanlambertt",
    name: "tabletop",
    description: "Board game meetup website built with React and Supabase.",
    href: "https://github.com/jonathanlambert/tabletop",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
];
