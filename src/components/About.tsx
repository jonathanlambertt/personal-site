const linkClass =
  "relative inline-block transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 after:content-[''] hover:text-gray-900 hover:after:scale-x-100 focus-visible:after:scale-x-100";

export function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-16 pb-8 md:px-12 md:pt-20 lg:px-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
        <div className="flex-1 text-xl text-gray-600 md:text-2xl">
          <h1>Hello!</h1>
          <div className="mt-6 max-w-2xl space-y-4">
            <p>I like to build software.</p>
            <p></p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
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
        <img
          src="/images/me.jpeg"
          alt="Jonathan Lambert"
          className="w-full max-w-xs shrink-0 rounded-lg object-cover md:w-72 lg:w-80"
        />
      </div>
    </section>
  );
}
