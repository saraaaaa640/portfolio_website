import {  useState } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 px-6 md:px-10 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tighter text-white">
            Sara<span className="text-blue-500">.</span>
          </span>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
            Full-Stack Developer & Security Enthusiast
          </p>
        </div>

        {/* Copyright - Centered on mobile */}
        <div className="text-center">
          <p className="text-xs text-gray-500 font-light">
            © {currentYear} <span className="text-gray-300">Sara Boussahoul</span> — 
            <span className="hidden sm:inline"> Designed & built with care</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          {["GitHub", "LinkedIn", "Twitter"].map((s) => (
            <a
              key={s}
              href={`https://${s.toLowerCase()}.com/yourusername`} // Update with your actual links
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-xs font-bold text-gray-500 uppercase tracking-widest transition-colors hover:text-white"
            >
              {s}
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;