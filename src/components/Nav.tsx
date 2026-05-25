import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1B5s_IRE81i_e6DiI_ENcx1N_8P-6VAf3/view?usp=sharing",
  },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 md:px-12 lg:px-20">
        <Logo />
        <ul className="hidden gap-10 text-lg/9 text-gray-600 md:flex">
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="relative -my-3 inline-block py-3 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 after:content-[''] hover:text-gray-900 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-gray-900 md:hidden"
        >
          {open ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </nav>
      {open && (
        <ul
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-10 border-b border-gray-200 bg-gray-50 md:hidden"
        >
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <li
                key={link.href}
                className="border-t border-gray-200 first:border-t-0"
              >
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-lg text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
