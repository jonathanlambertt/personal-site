const linkClass =
  "relative inline-block transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 after:content-[''] hover:text-gray-900 hover:after:scale-x-100 focus-visible:after:scale-x-100";

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between md:px-12 lg:px-20">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Jonathan Lambert
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-gray-600">
          <a
            href="https://github.com/jonathanlambertt"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jondlambert/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          <a href="mailto:jonathanlambert247@gmail.com" className={linkClass}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
