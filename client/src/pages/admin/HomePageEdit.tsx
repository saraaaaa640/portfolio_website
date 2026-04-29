//import { PageHeader } from "../../components/admin/ad";



export default function HomePageEdit() {
    return (
  <div className="animate-fade-in space-y-8">

    {/* Header 
    <PageHeader
      title="Home Page Editor"
      subtitle="Manage your portfolio homepage content"
      action={
        <button className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition">
          Save Changes
        </button>
      }
    />
*/}
    {/* HERO SECTION */}
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
      <h2 className="font-semibold text-gray-900">Hero Section</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="input"
          defaultValue="Hi, I'm sara boussahoul."
          placeholder="Main title"
        />

        <input
          className="input"
          defaultValue="Open to opportunities"
          placeholder="Status text"
        />
      </div>

      <textarea
        className="input min-h-[100px]"
        defaultValue="I design and build scalable web applications..."
        placeholder="Description"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <input className="input" defaultValue="30+" placeholder="Projects count" />
        <input className="input" defaultValue="4+" placeholder="Years experience" />
      </div>
    </div>

    {/* ABOUT SECTION */}
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
      <h2 className="font-semibold text-gray-900">About Section</h2>

      <input
        className="input"
        defaultValue="Building things that actually work."
      />

      <textarea
        className="input min-h-[120px]"
        defaultValue="I'm a full-stack developer with 4+ years..."
      />
    </div>

    {/* CONTACT SECTION */}
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
      <h2 className="font-semibold text-gray-900">Contact Section</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input className="input" defaultValue="alex@example.com" />
        <input className="input" defaultValue="linkedin.com/in/example" />
      </div>

      <textarea
        className="input min-h-[100px]"
        defaultValue="Let's build something together..."
      />
    </div>

  </div>
);

}