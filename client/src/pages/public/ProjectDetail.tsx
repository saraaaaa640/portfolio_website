
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { getProjects } from "../../services/public/projectServices";
import type { Project } from "../../types";




export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      const found = data.find((p: Project) => p.slug === slug);
      setProject(found || null);
    };

    fetchData();
  }, [slug]);

  if (!project) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-gray-500 font-bold uppercase tracking-widest">
      <div className="text-center">
        <span className="block text-4xl mb-4">404</span>
        Project not found.
      </div>
    </div>
  );
}

return (
  <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 md:px-10 animate-fade-in relative">
    {/* Ambient Glow */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

    <div className="max-w-4xl mx-auto relative z-10">
      {/* Back Button */}
      <Link 
        to="/projects" 
        className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-blue-400 transition-colors mb-12 w-fit"
      >
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> 
        Back to Projects
      </Link>

      {/* Project Hero Image */}
      <div className="relative group rounded-3xl overflow-hidden border border-white/5 mb-12 aspect-video">
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-6">
        {project.tags.map((t) => (
          <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-md">
            {t}
          </span>
        ))}
      </div>

      {/* Header Info */}
      <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter leading-none">
        {project.title}
      </h1>
      <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-3xl">
        {project.description}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-16">
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-2xl overflow-hidden transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ExternalLink size={14} /> Live Demo
            </span>
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        )}

        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-4 rounded-2xl border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
             Source Code
          </a>
        )}
      </div>

      {/* Description & Tech Stack Grid */}
      <div className="grid md:grid-cols-3 gap-16 border-t border-white/5 pt-12">
        <div className="md:col-span-2">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-6">Project Overview</h3>
          {project.longDescription && (
            <div className="text-gray-300 leading-relaxed text-lg space-y-4">
              <p>{project.longDescription}</p>
            </div>
          )}
        </div>

        <div className="md:col-span-1">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-6">Built With</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((t) => (
              <span 
                key={t} 
                className="text-[11px] font-medium px-3 py-1.5 bg-white/[0.03] border border-white/5 text-gray-300 rounded-lg hover:border-white/20 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

}export default ProjectDetail;