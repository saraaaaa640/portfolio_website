import { useSkills } from "../../hooks/publicUse";
import type { Skill } from "../../types/index";

export default function SkillsPage() {
  const skills = (useSkills().data as Skill[]) || [];

  return (
  <section className="min-h-screen bg-[#0a0a0a] text-white max-w-6xl mx-auto px-6 py-32 animate-fade-in relative">
    {/* Background Glows for Depth */}
    <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

    {/* Header */}
    <div className="mb-20 relative z-10">
      <p className="text-blue-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Technical Stack</p>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
        Mastery & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 italic font-light">Proficiency</span>
      </h1>
      <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
        A complete overview of the languages, frameworks, and tools I use to bring high-performance applications to life.
      </p>
    </div>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
      {skills.sort((a, b) => a.order - b.order)
        .map((skill) => (
          <div
            key={skill._id}
            className="group relative bg-white/[0.03] border border-white/5 rounded-3xl p-8 transition-all duration-500 
                       hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Hover Glow Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity blur-2xl rounded-3xl"
              style={{ backgroundColor: skill.color }}
            />

            {/* Top Row */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {skill.name}
              </h3>

              {/* Level badge */}
              <span
                className="text-[10px] font-bold px-3 py-1 rounded-full border tracking-widest"
                style={{
                  borderColor: skill.color + "40",
                  color: skill.color,
                  backgroundColor: skill.color + "10",
                }}
              >
                {skill.level}%
              </span>
            </div>

            {/* Category Tag */}
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
              {skill.category}
            </p>

            {/* Progress Bar Container */}
            <div className="relative w-full bg-white/5 rounded-full h-1.5 mb-8 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: skill.color,
                  boxShadow: `0 0 15px ${skill.color}60`
                }}
              />
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-500 relative z-10">
              <span className="group-hover:text-gray-300 transition-colors">/{skill.slug}</span>

              {skill.featured && (
                <span className="flex items-center gap-1.5 text-blue-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Featured
                </span>
              )}
            </div>
          </div>
        ))}
    </div>
  </section>
);
}