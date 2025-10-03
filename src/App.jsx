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
import MTplus from "./pages/Mtplus";
import SMELoan from "./pages/SMELoan";
import TreasuryNotesPage from "./pages/TreasuryNotesPage";  
import FixedDepositPage from "./pages/FixedDepositPage";
import MudarabahPage from "./pages/MudarabahPage";
import MTGreenSolar from "./pages/MTGreenSolar";
import Agric from "./pages/Agric";
import  AutoFinance from "./pages/AutoFinance";
import AboutPage from "./pages/About";
import Leadership from "./pages/Leadership";
import CSRPage from "./pages/CSRPage";
import Gallary from "./pages/Gallary";
import Form  from './pages/Form';
import PrivacyPage from "./pages/PrivacyPage";





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
          <Route path="mtplus-loans" element={<MTplus/>} />
          <Route path="sme-loan" element={<SMELoan />} />
          <Route path="treasury-note" element={<TreasuryNotesPage />} />
          <Route path="fixed-deposit" element={<FixedDepositPage/>} />
          <Route path="mudurabah" element={<MudarabahPage/>} />
          <Route path="mt-green-solar" element={<MTGreenSolar/>} />
          <Route path="agric-finance" element={<Agric/>} />
          <Route path="auto-finance" element={<AutoFinance/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="leadership" element={<Leadership/>} />
          <Route path="gallery" element={<Gallary/>} />
          <Route path="corporatesocial-responsibility-(csr)" element={<CSRPage/>} />
          <Route path="form" element={<Form/>} />
          <Route path="privacy-page" element={<PrivacyPage/>} />
         

        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
