



export default function AboutPage() {

  return (
  <section className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 md:px-10 animate-fade-in relative overflow-hidden">
    
    {/* Decorative Background Glows */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -ml-24 -mt-24 pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full -mr-24 -mb-24 pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="mb-20">
        <p className="text-blue-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Identity</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          Systems & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 italic font-light">Security</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Computer Science graduate with a focus on building resilient systems. 
          I bridge the gap between <span className="text-white">full-stack development</span> and <span className="text-white">cybersecurity engineering</span>.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-12 gap-12">
        
        {/* Left Column: Narrative */}
        <div className="md:col-span-7 space-y-12">
          <div className="group">
            <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-500/50" /> 01. Who I Am
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
              I prefer depth over noise. My fascination lies in the "how"—understanding backend architecture, 
              reverse-engineering data flows, and layering security into every line of code I write.
            </p>
          </div>

          <div className="group">
            <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-500/50" /> 02. Current Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
              I’m currently training for a <span className="text-blue-400 font-medium">SOC Analyst</span> role, 
              mastering the art of threat detection and incident response while refining my cloud security expertise.
            </p>
          </div>

          <div className="group">
            <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-500/50" /> 03. Technical Path
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
              From network security protocols to backend performance optimization, my learning path is 
              driven by a desire to build real-world systems where <span className="italic">security is never an afterthought</span>.
            </p>
          </div>
        </div>

        {/* Right Column: Stats/Focus Cards */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:border-blue-500/20 transition-all duration-500">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Primary Focus</h3>
            <ul className="space-y-4">
              {[
                "Cybersecurity (SOC / Threat Analysis)",
                "Full-Stack System Design",
                "Incident Response & Mitigation",
                "Data Integrity & Analysis"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-400 text-sm group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Environment</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Linux / Git / Node.js / MongoDB / React / TypeScript
            </p>
            <div className="pt-6 border-t border-white/5">
              <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-2">Final Goal</h4>
              <p className="text-white text-sm font-medium italic">
                "Securing the architecture of tomorrow's digital infrastructure."
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);


  
}