import { MailOpen } from "lucide-react";
import { PageHeader } from "../../components/ui";




export default function MessagesAdmin() {
return (
  <div className="animate-fade-in space-y-6">

    {/* Header */}
    <PageHeader
      title="Messages"
      subtitle="3 unread"
      action={
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-sm font-medium hover:bg-gray-200 transition">
            All
          </button>

          <button className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition">
            Unread
            <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
              3
            </span>
          </button>
        </div>
      }
    />

    {/* Layout */}
    <div className="grid lg:grid-cols-5 gap-6 h-[calc(100vh-220px)]">

      {/* LEFT: Inbox List */}
      <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

        <div className="divide-y divide-gray-100">

          {/* MESSAGE 1 */}
          <div className="p-4 hover:bg-gray-50 cursor-pointer border-l-2 border-brand-500 bg-brand-50">
            <div className="flex gap-3">

              <div className="w-2 h-2 mt-2 rounded-full bg-brand-500" />

              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-900">
                    John Doe
                  </p>
                  <span className="text-xs text-gray-400">Apr 19</span>
                </div>
                <p className="text-xs text-gray-600">Project Inquiry</p>
                <p className="text-xs text-gray-400 truncate">
                  Hi, I want to discuss a web development project...
                </p>
              </div>

            </div>
          </div>

          {/* MESSAGE 2 */}
          <div className="p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex gap-3">

              <div className="w-2 h-2 mt-2 rounded-full bg-gray-300" />

              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-gray-700 font-medium">
                    Sarah Smith
                  </p>
                  <span className="text-xs text-gray-400">Apr 18</span>
                </div>
                <p className="text-xs text-gray-600">Collaboration</p>
                <p className="text-xs text-gray-400 truncate">
                  Let’s work together on a UI/UX project...
                </p>
              </div>

            </div>
          </div>

          {/* MESSAGE 3 */}
          <div className="p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex gap-3">

              <div className="w-2 h-2 mt-2 rounded-full bg-gray-300" />

              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-gray-700 font-medium">
                    Client A
                  </p>
                  <span className="text-xs text-gray-400">Apr 17</span>
                </div>
                <p className="text-xs text-gray-600">Support Request</p>
                <p className="text-xs text-gray-400 truncate">
                  I need help updating my website design...
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* RIGHT: Message Detail */}
      <div className="lg:col-span-3 rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col justify-between">

        {/* Empty / Preview state */}
        <div className="flex-1 flex items-center justify-center text-center text-gray-400">
          <div>
            <MailOpen size={42} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">Select a message to preview</p>
          </div>
        </div>

        {/* Static preview (for UI only) */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Project Inquiry
          </h2>

          <div className="text-sm text-gray-500 mt-1">
            John Doe • john@example.com
          </div>

          <p className="text-xs text-gray-400 mt-1">
            April 19, 2026
          </p>

          <div className="mt-5 bg-gray-50 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
            Hi, I would like to discuss building a modern portfolio website.
            Let me know your availability.
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-5">
            <button className="px-4 py-2 rounded-lg bg-gray-100 text-sm hover:bg-gray-200 transition">
              Archive
            </button>

            <button className="px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm hover:bg-red-100 transition">
              Delete
            </button>

            <button className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm hover:bg-brand-700 transition ml-auto">
              Reply
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
);
}