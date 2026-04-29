export function Logo() {
  return (
    <a
      href="/"
      className="group relative inline-flex items-center gap-2 font-display text-3xl font-bold tracking-wider text-gray-900 after:absolute after:inset-x-0 after:-bottom-3 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100"
    >
      {/* <span
        aria-hidden="true"
        className="block h-2.5 w-2.5 rounded-full bg-gray-300 transition-colors duration-300 group-hover:bg-primary-500 group-focus-visible:bg-primary-500"
      /> */}
      <span className="text-base text-gray-400 transition-colors duration-300 group-hover:text-primary-500 group-focus-visible:text-primary-500">
        ●
      </span>
      <span className="ml-1">JL</span>
    </a>
  );
}
