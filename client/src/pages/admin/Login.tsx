import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/admin/authService";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await authService.login(form);

      // backend should return token
      localStorage.setItem("token", res.token);
      localStorage.setItem("admin", JSON.stringify(res.admin));

      toast.success("Login successful");

      navigate("/admin/dashboard");

    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

    return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      
      {/* Icon Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="p-4 bg-indigo-50 rounded-2xl mb-4">
          <Lock className="text-indigo-600" size={28} />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Admin Login
        </h1>
        <p className="text-gray-500 mt-2">Enter your credentials to access the panel</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Email Address</label>
          <input
            type="email"
            placeholder="admin@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Password</label>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full border border-gray-200 p-3 rounded-xl pr-12 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
            >
              {show ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* FORGOT PASSWORD (Added Polish) */}
        <div className="flex justify-end">
          <button type="button" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
            Forgot password?
          </button>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-3.5 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Processing...
            </span>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  </div>
);
}