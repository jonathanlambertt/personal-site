import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 md:px-12 lg:px-20">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-600">
        PERSONAL PROJECTS
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                project.image
                  ? "group block"
                  : "group block border border-gray-200 p-6 rounded-lg"
              }
            >
              {project.image && (
                <div className="aspect-4/3 overflow-hidden bg-gray-100 rounded-lg">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div
                className={
                  project.image
                    ? "mt-4 flex items-start justify-between gap-4"
                    : "flex items-start justify-between gap-4"
                }
              >
                <h3 className="font-sans text-xl font-bold text-gray-900">
                  {project.name}
                </h3>
                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-gray-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-900"
                />
              </div>
              <p className="mt-1 text-sm text-gray-600">
                {project.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
