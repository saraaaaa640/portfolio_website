import { PageHeader } from "../../components/ui";


export default function SkillsAdmin() {
    return (
  <div className="animate-fade-in space-y-6">

    {/* Header */}
    <PageHeader
      title="Skills"
      subtitle="Frontend skills overview"
      action={
        <button className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition">
          + Add Skill
        </button>
      }
    />

    {/* Skills Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {/* Skill Card 1 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">React</h3>
          <span className="text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-600">
            Frontend
          </span>
        </div>

        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div className="h-full w-[90%] bg-blue-500 rounded-full"></div>
        </div>

        <p className="text-xs text-gray-500 mt-2">90% proficiency</p>

        <div className="flex justify-end mt-4 gap-2">
          <button className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
            Edit
          </button>
          <button className="text-xs px-3 py-1.5 rounded-lg text-red-500 hover:bg-red-50 transition">
            Delete
          </button>
        </div>
      </div>

      {/* Skill Card 2 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Tailwind CSS</h3>
          <span className="text-xs px-2 py-1 rounded-md bg-cyan-50 text-cyan-600">
            Styling
          </span>
        </div>

        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div className="h-full w-[85%] bg-cyan-500 rounded-full"></div>
        </div>

        <p className="text-xs text-gray-500 mt-2">85% proficiency</p>

        <div className="flex justify-end mt-4 gap-2">
          <button className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
            Edit
          </button>
          <button className="text-xs px-3 py-1.5 rounded-lg text-red-500 hover:bg-red-50 transition">
            Delete
          </button>
        </div>
      </div>

      {/* Skill Card 3 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Node.js</h3>
          <span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-600">
            Backend
          </span>
        </div>

        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div className="h-full w-[70%] bg-green-500 rounded-full"></div>
        </div>

        <p className="text-xs text-gray-500 mt-2">70% proficiency</p>

        <div className="flex justify-end mt-4 gap-2">
          <button className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
            Edit
          </button>
          <button className="text-xs px-3 py-1.5 rounded-lg text-red-500 hover:bg-red-50 transition">
            Delete
          </button>
        </div>
      </div>

      {/* Skill Card 4 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">TypeScript</h3>
          <span className="text-xs px-2 py-1 rounded-md bg-indigo-50 text-indigo-600">
            Language
          </span>
        </div>

        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div className="h-full w-[75%] bg-indigo-500 rounded-full"></div>
        </div>

        <p className="text-xs text-gray-500 mt-2">75% proficiency</p>

        <div className="flex justify-end mt-4 gap-2">
          <button className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
            Edit
          </button>
          <button className="text-xs px-3 py-1.5 rounded-lg text-red-500 hover:bg-red-50 transition">
            Delete
          </button>
        </div>
      </div>

    </div>
  </div>
);
}