import { Route, Routes } from "react-router-dom";

// PUBLIC PAGES
import PublicLayout from "./components/layout/PublicLayout";
import HomePage from "./pages/public/HomePage";
import ProjectsPage from "./pages/public/ProjectPage";
import ProjectDetail from "./pages/public/ProjectDetail";
import ContactPage from "./pages/public/ContactPage";
import AboutPage from "./pages/public/AboutPage";
import SkillsPage from "./pages/public/SkillsPage";


// ADMIN PAGES
import AdminLayout from "./components/layout/AdminLayout";
import Login from "./pages/admin/Login";
import Dashbored from "./pages/admin/Dashboard";
import ProjectAdmin from "./pages/admin/ProjectAdmin";





export default function App() {
    return (
    <> 
      
      
      <Routes>
        {/* Public routes use PublicLayout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />        
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/skills" element={<SkillsPage/>} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Admin routes */}
        {/* Admin login route is separate and does NOT use AdminLayout */}
        <Route path="/adminlogin" element={<Login />} />

        {/* Admin route has NO Navbar/Footer */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashbored />} />
          <Route path="/admin/projects" element={<ProjectAdmin />} />
          
          {/*  <Route path="/admin/projects/:id" element={<ProjectEditAdmin />} />
          <Route path="/admin/messages" element={<MessagesAdmin />} />
          <Route path="/admin/skills" element={<SkillsAdmin />} />
          <Route path="/admin/homepage" element={<HomePageEdit />} />
          */}
        </Route>

      </Routes>
     


    </> 
  );
}