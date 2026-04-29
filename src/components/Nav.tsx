import { Logo } from "./Logo";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
];

export function Nav() {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-20 py-3">
        <Logo />
        <ul className="flex gap-8 text-base/9 text-gray-600">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative -my-3 inline-block py-3 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 after:content-[''] hover:text-gray-900 hover:after:scale-x-100 focus-visible:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
