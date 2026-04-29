import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { useMessage } from "../../hooks/publicUse";

const info = [
  { icon: Mail,   label: "Email",    value: "hello@portfolio.com" },
  { icon: MapPin, label: "Location", value: "Algiers, Algeria"    },
  { icon: Clock,  label: "Response", value: "Within 24 hours"     },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", body: "" });

  // ✅ FIX 1: destructure setLoading so we can update it during submission
  const [loading, setLoading] = useState(false);

  const [responseData, setResponseData] = useState<any>(null);
  const [error, setError] = useState("");

  const { sendMessage } = useMessage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ FIX 2: tell the UI we're working so the button shows "Sending..."
    setLoading(true);
    setError("");
    setResponseData(null);

    const data = {
      name:    form.name,
      email:   form.email,
      subject: form.subject,
      message: form.body,
    };

    try {
      const response = await sendMessage(data);
      setResponseData(response);
    } catch (err) {
      // ✅ FIX 3: set error state so it actually renders in the UI
      setError("Failed to send message. Please try again or email me directly.");
    } finally {
      // ✅ always reset loading whether the request succeeded or failed
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 md:px-10 animate-fade-in relative overflow-hidden">

      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] rounded-full -ml-48 -mb-48 pointer-events-none" />

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
        <p className="text-blue-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Contact</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-white">
          Get In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 italic font-light">
            Touch
          </span>
        </h1>
        <p className="text-gray-400 mt-3 text-lg max-w-xl mx-auto leading-relaxed">
          Have a project in mind? Let's build something clean, fast, and useful.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16 relative z-10">

        {/* LEFT SIDE — INFO */}
        <div className="md:col-span-2 space-y-6">
          {info.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="group flex items-start gap-5 p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="text-white font-medium">{value}</p>
              </div>
            </div>
          ))}

          {/* Extra Visual Card */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-2">Let's work together</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                I'm currently available for freelance work and full-time
                opportunities. I usually reply within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-3 space-y-4 bg-white/[0.02] p-8 md:p-10 rounded-3xl border border-white/5 backdrop-blur-sm"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Sara Boussahoul"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-white/[0.05] outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="sara@example.com"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-white/[0.05] outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
              Message
            </label>
            <textarea
              name="body"
              value={form.body}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your project details..."
              required
              className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-white/[0.05] outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex items-center justify-center gap-4 bg-white text-black font-bold py-5 rounded-2xl overflow-hidden transition-all active:scale-95 disabled:opacity-50"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
              {/* ✅ Now actually shows "Sending..." because loading state is properly updated */}
              {loading ? "Sending..." : "Send Message"}
            </span>
            {!loading && (
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                🚀
              </span>
            )}
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          {/* ✅ FIX 3a: success message — renders when responseData is set */}
          {responseData && (
            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-green-500/30 bg-green-500/10 text-green-400 animate-fade-in">
              <div className="text-xl">✅</div>
              <div>
                <p className="font-semibold">Message sent successfully</p>
                <p className="text-sm text-green-300/80">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          )}

          {/* ✅ FIX 3b: error message — was never rendered before, now it is */}
          {error && (
            <div className="mt-4 flex items-start gap-3 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 animate-fade-in">
              <div className="text-xl">❌</div>
              <div>
                <p className="font-semibold">Failed to send message</p>
                <p className="text-sm text-red-300/80">{error}</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}