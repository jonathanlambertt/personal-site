export type Project = {
  name: string;
  description: string;
  subDescription?: string;
  href: string;
  image: string | null;
};

export const projects: Project[] = [
  {
    name: "Cinebook",
    description:
      "Social movie logging app. Rate, log, and share your movie taste with friends.",
    subDescription: "React Native · Supabase",
    href: "https://github.com/jonathanlambertt/movie-log",
    image: "/images/cinebook-thumbnail-v2.png",
  },
  {
    name: "Strivvy",
    description: "Link sharing mobile app. Like and share links with friends.",
    subDescription: "React Native · Django",
    href: "https://github.com/jonathanlambertt/strivvy-frontend/tree/main",
    image: "/images/strivvy-thumbnail-v2.png",
  },
  {
    name: "Tabletop.sh",
    description: "Board game meetup website for the Tri-Cities.",
    subDescription: "React · Supabase",
    href: "https://tabletop.sh/",
    image: null,
  },
  {
    name: "PicturePool",
    description:
      "Group photo sharing tool. Built during my time at Stanford University.",
    subDescription: "HTML/CSS",
    href: "https://github.com/lab-w/Snapool",
    image: null,
  },
];
