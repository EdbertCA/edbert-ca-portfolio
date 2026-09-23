import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 transition-colors ${
      isActive ? "bg-blue-50 text-slate-900" : "text-slate-500 hover:text-slate-900"
    }`;

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <NavLink to="/" className="text-xl font-semibold text-slate-900">
          <span className="mr-2 text-blue-400">■</span>
          Edbert C Angwyn
        </NavLink>
        <nav className="hidden sm:flex items-center">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkStyle}>
              {link.name}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="sm:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <nav className="flex flex-col px-8 pb-5 sm:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={navLinkStyle}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}