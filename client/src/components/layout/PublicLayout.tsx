import { Outlet } from "react-router-dom";

import Navbar from "../Public/Navbar";
import Footer from "../Public/footer";

import ScrollToTop from "../Public/ScrollToTop";

export default function PublicLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      
      <main><Outlet /></main>
      <Footer />
    </>
  );
}