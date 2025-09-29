import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/Rootlayout";
import HomePage from "./pages/HomePage";
import SavingsAccountPage from "./pages/SavingsAccountPage";
import CorporateAccountPage from "./pages/CorporateAccountPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ContactComponent from "./pages/Contact";
import BlogPage from "./pages/BlogPost";
import MTLoans from "./pages/MTLoans";
import Ippisloan from "./pages/IPloanPage";
// import all other pages here as you create them and then add them to the Route below


function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Pages WITH Navbar & Footer */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="savings-accounts" element={<SavingsAccountPage />} />
          <Route path="corporate-accounts" element={<CorporateAccountPage />} />
          <Route path="contact" element={<ContactComponent />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="mtloans" element={<MTLoans />} />
          <Route path="ippis-loans" element={<Ippisloan />} />
        </Route>

        {/* 🚫 Pages WITHOUT Navbar & Footer */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}
import IPPISLoan from "./components/IPPISLoan";

export default App;
