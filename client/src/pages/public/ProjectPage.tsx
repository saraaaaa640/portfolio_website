import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, FolderOpen } from "lucide-react";
import { useProjects } from "../../hooks/publicUse";
import type { Project } from "../../types";


export default function ProjectsPage() {
  // Scroll to top on mount
  useState(() => {
    window.scrollTo(0, 0);
  });

  // DATA FETCHING
  const {data: projects = [],isLoading} = useProjects();

  // FILTER STATE
  const [activeTag, setActiveTag] = useState("");

  // LOADING
  if (isLoading) {return (<div className="p-8 text-lg">Loading...</div>);}

  // ALL TAGS
  const allTags= [...new Set(projects.flatMap((p: Project): string[] => p.tags || []))];

  // FILTERED PROJECTS
  const filtered = activeTag? projects.filter((p: Project) =>p.tags?.includes(activeTag)): projects;

  useEffect(() => {
  console.log("scrollY:", window.scrollY);
}, []);
  

 return (
  <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 md:px-10 animate-fade-in relative overflow-hidden">
    
    {/* Decorative Background Glows */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="mb-16">
        <p className="text-blue-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Portfolio</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          All <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 italic font-light">Projects</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl italic">A deep dive into the systems and interfaces I've built.</p>
      </div>

      {/* FILTERS - Glassmorphism Tabs */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-16 p-2 bg-white/[0.02] border border-white/5 rounded-3xl w-fit">
          <button 
            onClick={() => setActiveTag("")} 
            className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-2xl transition-all duration-300
            ${!activeTag 
              ? "bg-white text-black shadow-lg shadow-white/5" 
              : "text-gray-500 hover:text-white hover:bg-white/5"}`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button 
              key={tag} 
              onClick={() => setActiveTag(tag)} 
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-2xl transition-all duration-300
              ${activeTag === tag 
                ? "bg-white text-black shadow-lg shadow-white/5" 
                : "text-gray-500 hover:text-white hover:bg-white/5"}`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* EMPTY STATE */}
      {filtered.length === 0 ? (
        <div className="text-center py-32 bg-white/[0.02] rounded-3xl border border-dashed border-white/10">
          <FolderOpen size={48} className="mx-auto text-gray-700 mb-4" />
          <p className="text-gray-500 font-medium">No projects found in this category.</p>
        </div>
      ) : (

      /* GRID */
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p: Project) => ( 
          <div key={p.slug} className="group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2">
            
            <Link to={`/projects/${p.slug}`}>
              <div className="relative aspect-video overflow-hidden">
                <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags?.slice(0,3).map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6">{p.description}</p>
              </div>
            </Link>

            {/* Links Container */}
            <div className="px-8 pb-8 flex gap-4">
              {p.liveUrl && ( 
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" 
                   className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300">
                  <ExternalLink size={14}/>
                  Live
                </a>
              )}

              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                   className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all duration-300">
                   
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  </div>
);
}