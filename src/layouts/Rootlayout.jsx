import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="w-full bg-white m-0 p-0 space-y-0 relative">
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
};

export default RootLayout;
