import { ChevronRight, FolderOpen, LayoutDashboard, LogOut, MessageSquare, Wrench } from "lucide-react";

import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/projects",  icon: FolderOpen,      label: "Projects"  },
  { to: "/admin/skills",    icon: Wrench,          label: "Skills"    },
  { to: "/admin/messages",  icon: MessageSquare,   label: "Messages"  },
  { to: "/admin/homepage",  icon: LayoutDashboard, label: "Edit Homepage"  },

];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

export default function AdminSidebar() {
  




  return (
    <aside className="w-64 h-screen sticky top-0 bg-white border-r border-gray-200 flex flex-col shrink-0 shadow-sm">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <span
          className="text-xl font-semibold text-gray-900 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
          >
          Admin<span className="text-brand-600">.</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5 space-y-2 overflow-y-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
            ${
              isActive
              ? "bg-brand-50 text-brand-700 shadow-sm"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
        <Icon
          size={18}
          className="transition-transform group-hover:scale-110"
        />
        <span className="flex-1">{label}</span>
        <ChevronRight
          size={14}
          className="opacity-0 group-hover:opacity-40 transition"
        />
        </NavLink>
        ))}
      </nav>


        {/* Admin info + logout */}
      <div className="px-4 pb-4 border-t border-gray-100 pt-4 bg-gray-50">
    
          <div className="flex items-center gap-3 px-2 py-2 mb-3 rounded-lg hover:bg-gray-100 transition">
            <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-sm font-semibold shadow-sm">
              SJ
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">
                Sara Johnson
              </p>
              <p className="text-xs text-gray-500 truncate">
                sara@gmail.com
              </p>
           </div>
          </div>

          <button
            onClick={() => {}}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition"
            >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
      </div>

    </aside>
  );
}