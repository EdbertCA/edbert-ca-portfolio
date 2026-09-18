import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 transition-colors ${
      isActive ? "bg-blue-50 text-slate-900" : "text-slate-500 hover:text-slate-900"
    }`;

  return (
    <nav className="border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <NavLink to="/" className="text-xl font-semibold text-slate-900">
          <span className="mr-2 text-blue-400">■</span>
          Edbert C Angwyn
        </NavLink>
        <div className="flex items-center">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkStyle}>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}