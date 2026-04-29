import { ExternalLink, Pencil, Plus, Trash2 } from "lucide-react";


export default function ProjectAdmin() {
return (
  <div className="animate-fade-in space-y-6">



    {/* Table Card */}
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

      {/* Table */}
      <table className="w-full text-sm">
        
        {/* Head */}
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Project
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
              Tags
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-gray-100">

          {/* ROW 1 */}
          <tr className="hover:bg-gray-50 transition">
            <td className="px-6 py-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://via.placeholder.com/80"
                  className="w-11 h-11 rounded-xl object-cover shadow-sm"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    Portfolio Website
                  </p>
                  <p className="text-xs text-gray-500 max-w-xs truncate">
                    Personal portfolio built with React and Tailwind
                  </p>
                </div>
              </div>
            </td>

            <td className="px-6 py-4 hidden md:table-cell">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-600">React</span>
                <span className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-600">Tailwind</span>
              </div>
            </td>

            <td className="px-6 py-4">
              <div className="flex flex-col gap-1">
                <span className="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 w-fit">
                  Published
                </span>
                <span className="px-2 py-1 text-xs rounded-md bg-amber-100 text-amber-700 w-fit">
                  Featured
                </span>
              </div>
            </td>

            <td className="px-6 py-4">
              <div className="flex justify-end gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                  <ExternalLink size={15} />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                  <Pencil size={15} />
                </button>
                <button className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition">
                  <Trash2 size={15} />
                </button>
              </div>
            </td>
          </tr>

          {/* ROW 2 */}
          <tr className="hover:bg-gray-50 transition">
            <td className="px-6 py-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://via.placeholder.com/80"
                  className="w-11 h-11 rounded-xl object-cover shadow-sm"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    E-commerce UI
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Modern shopping UI design concept
                  </p>
                </div>
              </div>
            </td>

            <td className="px-6 py-4 hidden md:table-cell">
              <div className="flex gap-2">
                <span className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-600">UI/UX</span>
              </div>
            </td>

            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-600">
                Draft
              </span>
            </td>

            <td className="px-6 py-4">
              <div className="flex justify-end gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                  <Pencil size={15} />
                </button>
                <button className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition">
                  <Trash2 size={15} />
                </button>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
);
}