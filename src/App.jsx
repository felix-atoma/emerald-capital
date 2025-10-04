// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "./components/LoadingSpinner"; // ✅ Import LoadingSpinner
import PageLoader from "./components/PageLoader"; // ✅ Import PageLoader

// Lazy load all your pages for better performance
const RootLayout = lazy(() => import("./layouts/Rootlayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SavingsAccountPage = lazy(() => import("./pages/SavingsAccountPage"));
const CorporateAccountPage = lazy(() => import("./pages/CorporateAccountPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogPage = lazy(() => import("./pages/BlogPost"));
const MTLoans = lazy(() => import("./pages/MTLoans"));
const Ippisloan = lazy(() => import("./pages/IPloanPage"));
const Car4CashPage = lazy(() => import("./pages/Car4CashPage"));
const MTplus = lazy(() => import("./pages/Mtplus"));
const SMELoan = lazy(() => import("./pages/SMELoan"));
const TreasuryNotesPage = lazy(() => import("./pages/TreasuryNotesPage"));
const FixedDepositPage = lazy(() => import("./pages/FixedDepositPage"));
const MudarabahPage = lazy(() => import("./pages/MudarabahPage"));
const MTGreenSolar = lazy(() => import("./pages/MTGreenSolar"));
const Agric = lazy(() => import("./pages/Agric"));
const AutoFinance = lazy(() => import("./pages/AutoFinance"));
const AboutPage = lazy(() => import("./pages/About"));
const Leadership = lazy(() => import("./pages/Leadership"));
const CSRPage = lazy(() => import("./pages/CSRPage"));
const Gallary = lazy(() => import("./pages/Gallary"));
const Form = lazy(() => import("./pages/Form"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* ✅ Suspense wraps everything - shows spinner during initial/lazy loads */}
        <Suspense fallback={<LoadingSpinner />}>
          {/* ✅ PageLoader shows spinner during route transitions */}
          <PageLoader />
          
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="savings-accounts" element={<SavingsAccountPage />} />
              <Route path="corporate-accounts" element={<CorporateAccountPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="mtloans" element={<MTLoans />} />
              <Route path="ippis-loans" element={<Ippisloan />} />
              <Route path="car4cash" element={<Car4CashPage />} />
              <Route path="mtplus-loans" element={<MTplus />} />
              <Route path="sme-loan" element={<SMELoan />} />
              <Route path="treasury-note" element={<TreasuryNotesPage />} />
              <Route path="fixed-deposit" element={<FixedDepositPage />} />
              <Route path="mudurabah" element={<MudarabahPage />} />
              <Route path="mt-green-solar" element={<MTGreenSolar />} />
              <Route path="agric-finance" element={<Agric />} />
              <Route path="auto-finance" element={<AutoFinance />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="leadership" element={<Leadership />} />
              <Route path="gallery" element={<Gallary />} />
              <Route path="corporatesocial-responsibility-(csr)" element={<CSRPage />} />
              <Route path="privacy-page" element={<PrivacyPage />} />
            </Route>
            <Route path="form" element={<Form />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>

          {/* ✅ Toast Provider */}
          <Toaster position="top-right" reverseOrder={false} />
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;