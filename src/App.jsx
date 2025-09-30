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
import Car4CashPage from "./pages/Car4CashPage"; 
import Mtplus from "./pages/MTPlus";
import SMELoan from "./pages/SMELoan";
import TreasuryNotesPage from "./pages/TreasuryNotesPage";  
import FixedDepositPage from "./pages/FixedDepositPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="savings-accounts" element={<SavingsAccountPage />} />
          <Route path="corporate-accounts" element={<CorporateAccountPage />} />
          <Route path="contact" element={<ContactComponent />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="mtloans" element={<MTLoans />} />
          <Route path="ippis-loans" element={<Ippisloan />} />
          <Route path="car4cash" element={<Car4CashPage />} />
          <Route path="mtplus-loans" element={<Mtplus />} />
          <Route path="sme-loan" element={<SMELoan />} />
          <Route path="treasury-note" element={<TreasuryNotesPage />} />
          <Route path="fixed-deposit" element={<FixedDepositPage/>} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
