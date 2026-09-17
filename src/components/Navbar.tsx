import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <span>Edbert C Angwyn</span>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}