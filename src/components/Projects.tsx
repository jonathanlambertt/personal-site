import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-20 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-primary-600">
        Selected Work
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <a href={project.href} className="group block">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={`https://picsum.photos/seed/${project.slug}/800/600`}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-gray-900">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {project.platform} | {project.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
