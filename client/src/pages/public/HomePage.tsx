// ─── HomePage.tsx ──────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";


import { useProjects,useSkills } from '../../hooks/publicUse';

import { type Project, type Skill } from '../../types';



// Custom hook to detect when an element is in view
function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, [threshold]);

  return [ref, inView];
}

export default function HomePage() {
  // DATA (TanStack Query)
  const {data: projects = [],isLoading: projectsLoading} = useProjects();
  const {data: skills = [],isLoading: skillsLoading} = useSkills();
  // UI STATE
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutRef, aboutInView] = useInView();
  const [skillsRef] = useInView();
  const [projRef] = useInView();
  // TYPING EFFECT
  const roles = ["Full-Stack Developer","Cybersecurity Learner"];
  const [typed, setTyped] = useState("");
  useEffect(() => {let roleIndex = 0;let charIndex = 0;
    const interval = setInterval(() => {
      const current = roles[roleIndex];
      setTyped(current.slice(0, charIndex++));
      if (charIndex > current.length) {charIndex = 0;roleIndex = (roleIndex + 1) % roles.length;}
    }, 120);
    return () => clearInterval(interval);
  }, []);
  // SCROLL


  // LOADING
  if (projectsLoading || skillsLoading) {
    return (<div className="p-8 text-lg">Loading...</div>);
  }


  return (
    <div className="min-h-screen bg-[#0a0a0a]">

  {/* HERO */}
  <section id="hero" className="min-h-screen flex items-center px-6 md:px-10 bg-[#0a0a0a] text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -mr-48 -mt-48" />
    
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
      <div className="fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-400 text-[10px] font-bold tracking-widest uppercase">Open to opportunities</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Sara Boussahoul
          </span>
        </h1>

        <div className="mb-8 text-2xl md:text-3xl font-light text-gray-400">
          I'm a <span className="text-white font-medium border-r-2 border-blue-500 pr-2">{typed}</span>
        </div>

        <p className="text-gray-400 mb-10 max-w-md text-lg leading-relaxed">
          I build scalable applications across <span className="text-gray-200 font-medium">frontend, backend, and security</span> with a focus on high-performance architecture.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="group relative px-8 py-4 rounded-2xl bg-white text-black font-bold overflow-hidden transition-all duration-300 hover:pr-10 active:scale-95 shadow-lg shadow-white/5">
            <span className="relative z-10">See my work</span>
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <a href="/resume.pdf" className="px-8 py-4 rounded-2xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all">
            Download CV
          </a>
        </div>
      </div>

      <div className="hidden md:flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative w-80 h-80 rounded-[2rem] bg-[#111] border border-white/10 flex items-center justify-center text-8xl shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
             <span className="group-hover:scale-110 transition-transform duration-500">👨‍💻</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ABOUT */}
  <section id="about" className="py-32 px-6 md:px-10 bg-[#0e0e0e] text-white">
    <div ref={aboutRef} className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-20 items-start">
      <div className={`lg:col-span-3 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <p className="text-xs text-blue-500 font-bold tracking-[0.3em] uppercase mb-6">About me</p>
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
          Building things <br />
          <span className="italic font-light text-gray-500">that actually work.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Full-stack developer focused on clean architecture, security, and user-centered products. I don't just write code; I design systems.
        </p>
        <p className="text-gray-500 text-lg leading-relaxed">
          Outside of work, I contribute to open-source projects, write technical blogs, and mentor junior developers.
        </p>
      </div>

      <div className="lg:col-span-2 grid grid-cols-2 gap-4">
        {[
          { num: "4+", label: "Years experience", glow: "group-hover:bg-blue-500/20" },
          { num: "30+", label: "Projects shipped", glow: "group-hover:bg-emerald-500/20" },
          { num: "15+", label: "Happy clients", glow: "group-hover:bg-violet-500/20" },
          { num: "100%", label: "Remote-ready", glow: "group-hover:bg-amber-500/20" },
        ].map((s) => (
          <div key={s.label} className="group relative p-6 rounded-3xl bg-white/[0.03] border border-white/5 transition-all hover:border-white/20">
            <div className={`absolute inset-0 rounded-3xl transition-colors duration-500 ${s.glow}`} />
            <div className="relative z-10">
              <p className="text-4xl font-bold text-white mb-1 tracking-tighter">{s.num}</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Aligned "More about me" button to match the Project/Skill style */}
    <div className="max-w-6xl mx-auto mt-20 flex justify-center lg:justify-end">
      <Link 
        to="/about" 
        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full 
                   bg-white text-black font-semibold overflow-hidden transition-all duration-300
                   hover:pr-10 active:scale-95"
      >
        <span className="relative z-10 text-sm uppercase tracking-widest">More about me</span>
        <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
        <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </Link>
    </div>
  </section>

  {/* PROJECTS */}
  <section id="projects" className="py-32 px-6 bg-[#0a0a0a] text-white">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-gray-500 text-lg italic">Selected works that define my craft</p>
        </div>
        <Link 
          to="/projects" 
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full 
                     bg-white text-black font-semibold overflow-hidden transition-all duration-300
                     hover:pr-10 active:scale-95"
        >
          <span className="relative z-10 text-sm uppercase tracking-widest">See all projects</span>
          <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Link>
      </div>

      <div ref={projRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p: any) => (
          <Link to={`/projects/${p.slug}`} key={p._id} className="group relative rounded-3xl border border-white/5 bg-[#111] overflow-hidden transition-all hover:-translate-y-2 hover:border-white/20">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-8">
              <div className="flex gap-2 flex-wrap mb-4">
                {p.tags?.slice(0,3).map((tag:string) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-gray-400">{tag}</span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>

  {/* SKILLS */}
  {skills.length > 0 && (
    <section id="skills" className="py-28 px-6 md:px-10 bg-[#0e0e0e] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div className="lg:sticky lg:top-32">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <p className="text-[10px] text-blue-400 font-bold tracking-[0.2em] uppercase">Expertise</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
            Skills & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 italic font-light">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            My go-to stack for building production-grade applications — chosen for <span className="text-white">reliability</span> and <span className="text-white">performance</span>.
          </p>
        </div>

        <div ref={skillsRef} className="space-y-12">
          {(["Frontend", "Backend", "Tools", "Design", "Other"] as const).map(cat => {
            const catSkills = (skills as Skill[]).filter(s => s.category === cat);
            if (!catSkills.length) return null;
            return (
              <div key={cat} className="group">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] whitespace-nowrap">{cat}</h3>
                  <div className="h-[1px] w-full bg-gray-800 group-hover:bg-gray-700 transition-colors" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {catSkills.map(skill => (
                    <div key={skill._id} style={{ '--skill-color': skill.color } as React.CSSProperties}
                      className="relative group/skill border border-white/5 bg-white/[0.03] backdrop-blur-sm rounded-lg px-4 py-2.5 text-sm text-gray-300 transition-all duration-300 hover:border-[var(--skill-color)] hover:text-white hover:-translate-y-1">
                      <div className="absolute inset-0 opacity-0 group-hover/skill:opacity-20 transition-opacity blur-md rounded-lg" style={{ backgroundColor: skill.color }} />
                      <span className="relative z-10 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 flex justify-center lg:justify-end">
        <Link to="/skills" className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold overflow-hidden transition-all duration-300 hover:pr-10">
          <span className="relative z-10 text-sm uppercase tracking-widest">View Full Profile</span>
          <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  )}

  {/* CONTACT */}
  <section id="contact" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <p className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">Get in touch</p>
      <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
        Let's build something <br />
        <span className="italic font-light text-gray-500 underline decoration-1 underline-offset-8">extraordinary.</span>
      </h2>
      <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href="mailto:you@email.com" className="group relative px-10 py-5 bg-white text-black font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:-rotate-1 active:scale-95 shadow-xl shadow-white/5">
          <span className="relative z-10 flex items-center gap-2 text-lg">Send an Email 🚀</span>
        </a>
        <button onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')} className="px-8 py-5 text-gray-400 font-medium rounded-2xl border border-white/10 hover:bg-white/5 hover:text-white transition-all">
          LinkedIn
        </button>
      </div>
      <div className="mt-16 flex items-center justify-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Available for new projects</span>
      </div>
    </div>
  </section>
   </div>
);
}
