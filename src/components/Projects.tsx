import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:px-12 lg:px-20">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-600">
        WORK SAMPLE
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={`${project.owner}/${project.name}`}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col border border-gray-200 bg-white p-6 transition-colors hover:border-gray-900"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 text-gray-900">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    className="text-gray-500"
                  >
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
                  </svg>
                  <span className="font-mono text-sm">
                    <span className="text-gray-500">{project.owner}/</span>
                    <span className="font-medium">{project.name}</span>
                  </span>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-gray-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-900"
                >
                  <line x1="4" y1="12" x2="12" y2="4" />
                  <polyline points="6 4 12 4 12 10" />
                </svg>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                {project.description}
              </p>

              <div className="mt-auto flex items-center gap-5 pt-6 text-xs text-gray-600">
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: project.languageColor }}
                    aria-hidden="true"
                  />
                  {project.language}
                </span>
                {project.stars !== undefined && (
                  <span className="flex items-center gap-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                    </svg>
                    {project.stars}
                  </span>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
