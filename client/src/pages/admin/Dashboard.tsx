import { Mail, Folder, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { StatCard } from "../../components/ui";
import { useAdminDashboard } from "../../hooks/useAdminDashboard";
import type { Message, Project } from "../../types";

export default function Dashboard() {
  const { data, isLoading, error } = useAdminDashboard();

  if (isLoading) return <p className="p-10">Loading...</p>;
  if (error) return <p className="p-10 text-red-500">Failed to load dashboard</p>;

  const dashboard = {
    stats: {
      totalMessages: data?.totalMessages ?? 0,
      totalProjects: data?.totalProjects ?? 0,
      totalSkills:   data?.totalSkills   ?? 0,
    },
    recentMessages: data?.recentMessages ?? [],
    recentProjects: data?.recentProjects ?? [],
  };

  const stats = [
    { label: "Messages", value: dashboard.stats.totalMessages, icon: Mail   },
    { label: "Projects", value: dashboard.stats.totalProjects, icon: Folder },
    { label: "Skills",   value: dashboard.stats.totalSkills,   icon: Code   },
  ];

  return (
    <div className="animate-fade-in p-6">
      <div className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
          <span className="text-sm text-gray-400">Live data</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Messages */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <div className="flex justify-between mb-5">
            <h2 className="font-semibold">Recent Messages</h2>
            <Link to="/admin/messages" className="text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>

          <div className="space-y-4">
            {dashboard.recentMessages.length > 0 ? (
              dashboard.recentMessages.map((msg: Message) => (
                <div key={msg._id} className="border-b pb-3 last:border-0">
                  <p className="text-sm font-medium">{msg.name}</p>
                  {/* ✅ FIXED: was msg.body — the backend stores this field as "message" */}
                  <p className="text-sm text-gray-500 truncate">{msg.body}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">No recent messages.</p>
            )}
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <div className="flex justify-between mb-5">
            <h2 className="font-semibold">Projects</h2>
            <Link to="/admin/projects" className="text-sm text-blue-600 hover:underline">
              Manage
            </Link>
          </div>

          <div className="space-y-4">
            {dashboard.recentProjects.length > 0 ? (
              dashboard.recentProjects.map((p: Project) => (
                <div key={p._id} className="border-b py-2 last:border-0">
                  <p className="font-medium">{p.title}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">No projects found.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}