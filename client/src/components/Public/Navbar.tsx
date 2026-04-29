import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tighter text-white group"
        >
          SARA<span className="text-blue-500 transition-all duration-300 group-hover:pl-1">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {["About", "Projects", "Skills"].map((l) => (
            <Link
              key={l}
              to={`/${l.toLowerCase()}`}
              className="relative text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors group"
            >
              {l}
              {/* Subtle animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Contact Button with consistent Slide Effect */}
          <Link
            to="/contact"
            className="group relative px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">Contact me</span>
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden relative z-50 p-2 flex flex-col gap-1.5 items-end group"
        >
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : "w-4"}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a] transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col items-center justify-center gap-8`}>
        {["About", "Projects", "Skills", "Contact"].map((l) => (
          <Link
            key={l}
            to={`/${l.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold text-white tracking-tighter hover:text-blue-500 transition-colors"
          >
            {l}
          </Link>
        ))}
      </div>
    </nav>
  );
}