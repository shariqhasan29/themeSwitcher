import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "../themeSwitcher";

interface NavLinkProps {
  path: string;
  label: string;
  isMobile?: boolean;
}

// Common link component
const NavLink = ({ path, label, isMobile = false }: NavLinkProps) => {
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`
          nav-link transition-colors duration-200
          ${isActive ? "font-semibold" : "hover:!text-accent"}
          ${isMobile ? "block py-2" : ""}
        `}
      style={{
        color: isActive ? "var(--color-accent)" : "var(--text-primary)",
      }}
    >
      {label}
    </Link>
  );
};
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation links data
  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => setIsMenuOpen(false), [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary shadow-md h-[var(--header-height)] theme-transition">
      <div className="container flex justify-between items-center h-full px-4">
        {/* Logo */}
        <Link
          to="/home"
          className="text-2xl font-semibold text-accent hover:opacity-80 transition-opacity duration-200"
        >
          ThemeSwitcher
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink key={link.path} path={link.path} label={link.label} />
          ))}
        </nav>

        {/* Theme Switcher (Desktop) */}
        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-primary p-2 hover:text-accent transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden bg-primary transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={`mobile-${link.path}`}
              path={link.path}
              label={link.label}
              isMobile={true}
            />
          ))}
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};
