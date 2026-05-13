import type { NavLink } from "../types/types";
import Button from "./ui/Button";

interface NavbarProps {
  links: NavLink[];
}

function Navbar({ links }: NavbarProps) {
  return (
    <nav className="bg-slate-50/80 backdrop-blur-md fixed top-0 z-50 flex justify-between items-center w-full px-6 py-3 max-w-full mx-auto">
      <div className="flex items-center gap-8">
        <a className="text-xl font-bold tracking-tight text-slate-900" href="#">
          Lumio
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              className={
                link.active
                  ? "text-indigo-600 border-b-2 border-indigo-600 pb-1 text-sm font-medium"
                  : "text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="text-sm font-medium px-4 py-2 rounded-lg"
        >
          Log In
        </Button>
        <Button
          variant="primary"
          className="bg-indigo-600 from-transparent to-transparent px-5 py-2 rounded-lg text-sm font-semibold hover:scale-98 transition-transform"
        >
          Sign Up
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
