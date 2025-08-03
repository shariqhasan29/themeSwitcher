import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "../themeSwitcher";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsMenuOpen(false), [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary shadow-md h-[var(--header-height)] theme-transition">
      <div className="container flex justify-between items-center h-full px-4">
        {/* Logo */}
        <Link
          to="/home"
          className="text-2xl font-semibold text-accent hover:opacity-80 transition"
        >
          ThemeSwitcher
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Theme Switcher (Desktop) */}
        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-primary p-2"
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
          <Link to="/home" className="nav-link block">
            Home
          </Link>
          <Link to="/about" className="nav-link block">
            About
          </Link>
          <Link to="/contact" className="nav-link block">
            Contact
          </Link>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};
