import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["#about", "About"],
  ["#experience", "Experience"],
  ["#skills", "Skills"],
  ["#projects", "Projects"],
  ["#contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070b12]/90 backdrop-blur-xl border-b border-white/15"
          : "bg-[#070b12]/40 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-[1240px] mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">

        {/* Logo / Name */}
        <a
          href="#home"
          className="focus-ring flex items-center gap-3 group"
        >
          <span
            className="
              grid place-items-center
              w-10 h-10
              rounded-xl
              border border-white/50
              bg-[#0b121b]
              text-[#4de1ff]
              font-mono text-xs font-bold
              shadow-[0_0_18px_rgba(77,225,255,0.12)]
              transition-all duration-300
              group-hover:border-[#4de1ff]
              group-hover:shadow-[0_0_22px_rgba(77,225,255,0.25)]
            "
          >
            BR
          </span>

          <span className="text-white font-semibold tracking-tight text-[15px]">
            Bappy Reja
            <span className="text-[#4de1ff]">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="
                text-sm
                text-white/85
                hover:text-[#4de1ff]
                transition-colors duration-200
                focus-ring
              "
            >
              {label}
            </a>
          ))}
        </div>

        {/* Let's Talk */}
        <a
          href="#contact"
          className="
            hidden md:inline-flex
            items-center gap-1.5
            rounded-full
            border border-white/35
            bg-white/[0.03]
            px-5 py-2.5
            text-sm font-medium
            text-white
            shadow-[0_0_16px_rgba(255,255,255,0.04)]
            hover:border-[#4de1ff]
            hover:text-[#4de1ff]
            hover:bg-[#4de1ff]/[0.06]
            hover:shadow-[0_0_22px_rgba(77,225,255,0.15)]
            transition-all duration-300
            focus-ring
          "
        >
          Let's talk
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-white
            hover:text-[#4de1ff]
            transition-colors
            focus-ring
          "
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div
          className="
            md:hidden
            border-t border-white/15
            bg-[#070b12]/95
            backdrop-blur-xl
            px-5 py-4
          "
        >
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="
                block
                py-3
                text-white/85
                hover:text-[#4de1ff]
                transition-colors
              "
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}