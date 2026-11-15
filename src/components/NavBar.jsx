
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PiTreePalm, PiList, PiX } from "react-icons/pi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", path: "/projects" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle = ({ isActive }) =>
    `font-nunito text-sm md:text-base font-medium uppercase
    tracking-wide transition-opacity duration-200
    hover:opacity-60 focus-visible:outline
    focus-visible:outline-2 focus-visible:outline-offset-4
    ${isActive ? "opacity-60" : "opacity-100"}`;

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full
        px-6 md:px-8 py-4 md:py-5
        transition-all duration-300
        ${
          scrolled
            ? "bg-mint/95 text-darkgreen shadow-sm backdrop-blur-md"
            : "bg-transparent text-beige"
        }`}
    >
      <div className="flex items-center justify-between">

        {/* Palm tree logo */}
        <Link
          to="/"
          aria-label="Home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center"
        >
          <PiTreePalm size={34} strokeWidth={1.6} />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile burger menu */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-4"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <PiX size={26} />
          ) : (
            <PiList size={26} />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className={`absolute top-full left-0 w-full
            md:hidden px-6 py-8 backdrop-blur-md shadow-md
            ${
              scrolled
                ? "bg-mint/95 text-darkgreen"
                : "bg-darkgreen/95 text-beige"
            }`}
        >
          <div className="flex flex-col items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
