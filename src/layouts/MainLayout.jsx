
// src/layouts/MainLayout.jsx
import React from "react";
import Topbar from "../components/common/Topbar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import FloatAction from "../components/common/FloatAction";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top header section with contact & social icons */}
      <Topbar />

      {/* Main navigation bar */}
      <Navbar />

      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Main page content */}
      <main className="flex-grow">
        <Outlet />
        <FloatAction />
      </main>

      {/* Footer always stays at bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
