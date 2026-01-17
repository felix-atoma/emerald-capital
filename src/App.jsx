// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastProvider } from "./components/CustomToast";
import LoadingSpinner from "./components/LoadingSpinner";
import PageLoader from "./components/PageLoader";

// Lazy load all your pages for better performance
const RootLayout = lazy(() => import("./layouts/Rootlayout.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const SavingsAccountPage = lazy(() => import("./pages/SavingsAccountPage.jsx"));
const SusuAccount = lazy(() => import("./pages/SusuAccount.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const SignupPage = lazy(() => import("./pages/SignupPage.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const BlogPage = lazy(() => import("./pages/BlogPost.jsx"));
const MTLoans = lazy(() => import("./pages/MTLoans.jsx"));
const Ippisloan = lazy(() => import("./pages/IPloanPage.jsx"));
const Car4CashPage = lazy(() => import("./pages/Car4CashPage.jsx"));
const MTplus = lazy(() => import("./pages/Mtplus.jsx"));
const SMELoan = lazy(() => import("./pages/SMELoan.jsx"));
const TreasuryNotesPage = lazy(() => import("./pages/TreasuryNotesPage.jsx"));
const FixedDepositPage = lazy(() => import("./pages/FixedDepositPage.jsx"));
const MudarabahPage = lazy(() => import("./pages/MudarabahPage.jsx"));
const MTGreenSolar = lazy(() => import("./pages/MTGreenSolar.jsx"));
const Agric = lazy(() => import("./pages/Agric.jsx"));
const AutoFinance = lazy(() => import("./pages/AutoFinance.jsx"));
const AboutPage = lazy(() => import("./pages/About.jsx"));
const Leadership = lazy(() => import("./pages/Leadership.jsx"));
const CSRPage = lazy(() => import("./pages/CSRPage.jsx"));
const Gallary = lazy(() => import("./pages/Gallary.jsx"));
const Form = lazy(() => import("./pages/Form.jsx"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage.jsx"));
const DashboardPage = lazy(() => import("./pages/DashboardPage.jsx"));
const RemittancePage = lazy(() => import("./pages/RemittancePage.jsx"));
const SavingsProduct = lazy(() => import("./pages/SavingsProduct.jsx"));
const InvestmentPage = lazy(() => import("./pages/InvestmentPage.jsx"));
const SavingsProductsPage = lazy(() => import("./pages/SavingsProductsPage.jsx"));
const BusinessStarterPage = lazy(() => import("./pages/BusinessStarterPage.jsx"));
const WorkingCapitalPage = lazy(() => import("./pages/WorkingCapitalPage.jsx"));
const EducationSkillsPage = lazy(() => import("./pages/EducationSkillsLoanPage.jsx"));
const EmmergencyPersonalLoanPage = lazy(() => import("./pages/EmergencyPersonalLoanPage.jsx"));
const GroupCommunityLoanPage = lazy(() => import("./pages/GroupCommunityLoanPage.jsx"));
const GreenSustainableLoanPage = lazy(() => import("./pages/GreenSustainableLoanPage.jsx")); 
const HouseingHomeImprovementLoanPage = lazy(() => import("./pages/HousingHomeImprovementLoanPage.jsx")); 
const HealthMedicalLoanPage = lazy(() => import("./pages/HealthMedicalLoanPage.jsx")); 
const WomensEmpowermentLoanPage = lazy(() => import("./pages/WomensEmpowermentLoanPage.jsx"));
const MicroEnterpriseExpansionPage = lazy(() => import("./pages/MicroEnterpriseExpansionPage.jsx"));
const TransportAndEquipmentLoanPage = lazy(() => import("./pages/TransportAndEquipmentLoanPage.jsx"));
const SeasonalBusinessLoanPage = lazy(() => import("./pages/SeasonalBusinessLoanPage.jsx"));
const MicrofinanceLoanProductsPage = lazy(() => import("./pages/MicrofinanceLoanProductsPage.jsx"));
const SpecializedLoanProductsPage = lazy(() => import("./pages/SpecializedLoanProductsPage.jsx"));
const FuneralLoanPage = lazy(() => import("./pages/FuneralLoanPage.jsx"));
const EducationLoanPage = lazy(() => import("./pages/EducationLoanPage.jsx"));
const PersonalLoanPage = lazy(() => import("./pages/PersonalLoanPage.jsx"));
const BusinessLoanPage = lazy(() => import("./pages/BusinessLoanPage.jsx"));
const InvestmentWealthManagementPage = lazy(() => import("./pages/InvestmentWealthManagementPage.jsx"));  
const EmeraldBusinessPage = lazy(() => import("./pages/EmeraldBusinessPage.jsx"));
const EmeraldPayPage = lazy(() => import("./pages/EmeraldPayPage.jsx"));
const InsuranceProductsPage = lazy(() => import("./pages/InsuranceProductsPage.jsx"));
const LeadershipPage = lazy(() => import("./pages/LeadershipPage.jsx"));
const OwnershipAndShareholdersPage = lazy(() => import("./pages/OwnershipAndShareholdersPage.jsx"));
const BoardAndExecutiveLeadershipPage = lazy(() => import("./pages/BoardAndExecutiveLeadershipPage.jsx"));
const ExecutiveManagementPage = lazy(() => import("./pages/ExecutiveManagementPage.jsx"));
const OrganizationalStructurePage = lazy(() => import("./pages/OrganizationalStructurePage.jsx"));
const LeadershipOwnershipPage = lazy(() => import("./pages/LeadershipOwnershipPage.jsx"));
const BoardOfDirectorsPage = lazy(() => import("./pages/BoardOfDirectorsPage.jsx"));
const ExecutiveLeadershipPage = lazy(() => import("./pages/ExecutiveLeadershipPage.jsx"));
const RegionalBranchManagersPage = lazy(() => import("./pages/RegionalBranchManagersPage.jsx"));
const DigitalBankingPage = lazy(() => import("./pages/Digitalbankingpage.jsx"));

// 🔐 Admin pages (lazy loaded)
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin.jsx"));
const AdminMessages = lazy(() => import("./pages/admin/AdminMessagesDashboard.jsx"));

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <PageLoader />
            
            <Routes>
              {/* PUBLIC ROUTES - Anyone can access */}
              <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />} />
                <Route path="savings-account" element={<SavingsAccountPage />} />
                <Route path="susu-account" element={<SusuAccount />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="mtloans" element={<MTLoans />} />
                <Route path="ippis-loans" element={<Ippisloan />} />
                <Route path="car4cash" element={<Car4CashPage />} />
                <Route path="mtplus-loans" element={<MTplus />} />
                <Route path="smeloan" element={<SMELoan />} />
                <Route path="treasury-note" element={<TreasuryNotesPage />} />
                <Route path="fixeddeposit" element={<FixedDepositPage />} />
                <Route path="mudurabah" element={<MudarabahPage />} />
                <Route path="mt-green-solar" element={<MTGreenSolar />} />
                <Route path="agriculturalloan" element={<Agric />} />
                <Route path="auto-finance" element={<AutoFinance />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="leadership" element={<Leadership />} />
                <Route path="gallery" element={<Gallary />} />
                <Route path="corporatesocial-responsibility-(csr)" element={<CSRPage />} />
                <Route path="privacy-page" element={<PrivacyPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="remittance-and-moneytransfer" element={<RemittancePage />} />
                <Route path="emeraldcapitalsavingsproducts" element={<SavingsProduct />} />
                <Route path="investment-and-wealthmanagement" element={<InvestmentPage/>} />
                <Route path="savingsproductspurplegoldtheme" element={<SavingsProductsPage/>} />
                <Route path="businessstarterloan" element={<BusinessStarterPage/>} />
                <Route path="workingcapitalloan" element={<WorkingCapitalPage/>} />
                <Route path="education-and-skillsloan" element={<EducationSkillsPage/>} />
                <Route path="emergency-and-personalloan" element={<EmmergencyPersonalLoanPage/>} />
                <Route path="groupcommunityloan" element={<GroupCommunityLoanPage/>} />
                <Route path="green-and-sustainableloan" element={<GreenSustainableLoanPage/>} />
                <Route path="housing-and-homeimprovementloan" element={<HouseingHomeImprovementLoanPage/>} />
                <Route path="health-and-medicalloan" element={<HealthMedicalLoanPage/>} />
                <Route path="womensempowermentloan" element={<WomensEmpowermentLoanPage/>} />
                <Route path="micro-enterpriseexpansionloan" element={<MicroEnterpriseExpansionPage/>} />
                <Route path="transport-and-equipmentloan" element={<TransportAndEquipmentLoanPage/>} />
                <Route path="seasonalbusinessloan" element={<SeasonalBusinessLoanPage/>} />
                <Route path="microfinanceloanproducts" element={<MicrofinanceLoanProductsPage/>} />
                <Route path="specializedloanproducts" element={<SpecializedLoanProductsPage/>} />
                <Route path="educationloan" element={<EducationLoanPage/>} />
                <Route path="funeralloans" element={<FuneralLoanPage/>} />
                <Route path="personalloan" element={<PersonalLoanPage/>} />
                <Route path="businessloan" element={<BusinessLoanPage/>} />
                <Route path="investment-and-wealthmanagement" element={<InvestmentWealthManagementPage/>} />
                <Route path="emeraldbusiness" element={<EmeraldBusinessPage/>} />
                <Route path="emeraldpay" element={<EmeraldPayPage/>} />
                <Route path="insuranceproducts" element={<InsuranceProductsPage/>} />
                <Route path="/digital-banking" element={<DigitalBankingPage />} />
                
                {/* Leadership & Governance Routes */}
                <Route path="leadership-and-governanceoverview" element={<LeadershipPage/>} />
                <Route path="ownership-and-shareholders" element={<OwnershipAndShareholdersPage/>} />
                <Route path="boardofdirectors" element={<BoardAndExecutiveLeadershipPage/>} />
                <Route path="executiveleadershipteam" element={<ExecutiveManagementPage/>} />
                <Route path="governanceframework" element={<OrganizationalStructurePage/>} />
                
                {/* Organizational Structure Routes - All using same component pattern */}
                <Route path="shareholdersowners" element={<LeadershipOwnershipPage/>} />
                <Route path="boardofdirectorsstructure" element={<BoardOfDirectorsPage/>} />
                <Route path="executivemanagementc-suite" element={<ExecutiveLeadershipPage/>} />
                <Route path="chiefexecutiveofficerceo" element={<RegionalBranchManagersPage/>} />
                <Route path="chiefoperatingofficercoo" element={<RegionalBranchManagersPage/>} />
                <Route path="chieffinancialofficercfo" element={<RegionalBranchManagersPage/>} />
                <Route path="chiefriskofficerc ro" element={<RegionalBranchManagersPage/>} />
                <Route path="chieftechnologyofficercto" element={<RegionalBranchManagersPage/>} />
                <Route path="chiefmarketing-and-businessdevelopmentofficercmobdo" element={<RegionalBranchManagersPage/>} />
                <Route path="chiefcompliance-and-legalofficercccclo" element={<RegionalBranchManagersPage/>} />
                <Route path="chiefinvestmentofficercio" element={<RegionalBranchManagersPage/>} />
                <Route path="chiefinsuranceofficercinso" element={<RegionalBranchManagersPage/>} />
                <Route path="chiefhumanresourcesofficerchro" element={<RegionalBranchManagersPage/>} />
                <Route path="operationalstructureandorganogram" element={<RegionalBranchManagersPage/>} />
                
                {/* Regional Management Routes - All using same component */}
                <Route path="regionalmanagement" element={<RegionalBranchManagersPage/>} />
                {/* <Route path="ashantiregion" element={<RegionalBranchManagersPage/>} /> */}
                {/* <Route path="ahaforegion" element={<RegionalBranchManagersPage/>} /> */}
                {/* <Route path="westernnorthregion" element={<RegionalBranchManagersPage/>} /> */}
                {/* <Route path="westernregion" element={<RegionalBranchManagersPage/>} /> */}
                {/* <Route path="centralregion" element={<RegionalBranchManagersPage/>} /> */}
                {/* <Route path="easternregion" element={<RegionalBranchManagersPage/>} /> */}
                {/* <Route path="volta-and-otiregion" element={<RegionalBranchManagersPage/>} /> */}
                {/* <Route path="bono-and-bonoeastregion" element={<RegionalBranchManagersPage/>} /> */}
                {/* <Route path="northernsavannah-and-northeast" element={<RegionalBranchManagersPage/>} /> */}
                {/* <Route path="upperwest-and-uppereastregion" element={<RegionalBranchManagersPage/>} /> */}
                {/* <Route path="diasporaservices" element={<RegionalBranchManagersPage/>} /> */}
                
              </Route>
              
              <Route path="form" element={<Form />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />

              {/* 🔐 ADMIN ROUTES - Protected */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
              <Route 
                path="/admin/dashboard" 
                element={
                  <ProtectedRoute>
                    <AdminMessages />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </Suspense>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

// 🔐 Protected Route Component - Blocks unauthorized access
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('adminAuthToken');
  const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');
  
  // Check both token AND user role
  if (!token || (adminUser.role !== 'admin' && adminUser.role !== 'officer')) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
}

export default App;