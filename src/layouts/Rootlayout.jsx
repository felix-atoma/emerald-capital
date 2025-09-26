import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow px-4 sm:px-8 md:px-12 lg:px-16 py-6">
        <Outlet /> {/* 👈 Renders the current page */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
