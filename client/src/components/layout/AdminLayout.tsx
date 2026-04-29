import { Outlet } from "react-router-dom";
import AdminSidebar from "../admin/AdminSidebar";




export default function AdminLayout() {
  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}