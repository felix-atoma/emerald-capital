// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastProvider } from "./components/CustomToast";
import LoadingSpinner from "./components/LoadingSpinner";
import PageLoader from "./components/PageLoader";

// Lazy load all your pages for better performance
const RootLayout = lazy(() => import("./layouts/Rootlayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SavingsAccountPage = lazy(() => import("./pages/SavingsAccountPage"));
const SusuAccount = lazy(() => import("./pages/SusuAccount"));
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
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const RemittancePage = lazy(() => import("./pages/RemittancePage"));
const SavingsProduct = lazy(() => import("./pages/SavingsProduct"));
const InvestmentPage = lazy(() => import("./pages/InvestmentPage"));
const SavingsProductsPage = lazy(() => import("./pages/SavingsProductsPage"));
const BusinessStarterPage = lazy(() => import("./pages/BusinessStarterPage"));
const WorkingCapitalPage = lazy(() => import("./pages/WorkingCapitalPage"));
const EducationSkillsPage = lazy(() => import("./pages/EducationSkillsLoanPage"));
const EmmergencyPersonalLoanPage = lazy(() => import("./pages/EmergencyPersonalLoanPage"));
const GroupCommunityLoanPage = lazy(() => import("./pages/GroupCommunityLoanPage"));
const GreenSustainableLoanPage = lazy(() => import("./pages/GreenSustainableLoanPage")); 
const HouseingHomeImprovementLoanPage = lazy(() => import("./pages/HousingHomeImprovementLoanPage")); 
const HealthMedicalLoanPage = lazy(() => import("./pages/HealthMedicalLoanPage")); 
const WomensEmpowermentLoanPage = lazy(() => import("./pages/WomensEmpowermentLoanPage"));
const MicroEnterpriseExpansionPage = lazy(() => import("./pages/MicroEnterpriseExpansionPage"));
const TransportAndEquipmentLoanPage = lazy(() => import("./pages/TransportAndEquipmentLoanPage"));
const SeasonalBusinessLoanPage = lazy(() => import("./pages/SeasonalBusinessLoanPage"));
const MicrofinanceLoanProductsPage = lazy(() => import("./pages/MicrofinanceLoanProductsPage"));
const SpecializedLoanProductsPage = lazy(() => import("./pages/SpecializedLoanProductsPage"));
const FuneralLoanPage = lazy(() => import("./pages/FuneralLoanPage"));
const EducationLoanPage = lazy(() => import("./pages/EducationLoanPage"));
const PersonalLoanPage = lazy(() => import("./pages/PersonalLoanPage"));
const BusinessLoanPage = lazy(() => import("./pages/BusinessLoanPage"));
const InvestmentWealthManagementPage = lazy(() => import("./pages/InvestmentWealthManagementPage"));  
const EmeraldBusinessPage = lazy(() => import("./pages/EmeraldBusinessPage"));
const EmeraldPayPage = lazy(() => import("./pages/EmeraldPayPage"));
const InsuranceProductsPage = lazy(() => import("./pages/InsuranceProductsPage"));
const LeadershipPage = lazy(() => import("./pages/LeadershipPage"));
const OwnershipAndShareholdersPage = lazy(() => import("./pages/OwnershipAndShareholdersPage"));
const BoardAndExecutiveLeadershipPage = lazy(() => import("./pages/BoardAndExecutiveLeadershipPage"));
const ExecutiveManagementPage = lazy(() => import("./pages/ExecutiveManagementPage"));
const OrganizationalStructurePage = lazy(() => import("./pages/OrganizationalStructurePage"));
const LeadershipOwnershipPage = lazy(() => import("./pages/LeadershipOwnershipPage"));
const BoardOfDirectorsPage = lazy(() => import("./pages/BoardOfDirectorsPage"));
const ExecutiveLeadershipPage = lazy(() => import("./pages/ExecutiveLeadershipPage"));
const RegionalBranchManagersPage = lazy(() => import("./pages/RegionalBranchManagersPage"));
const DigitalBankingPage= lazy(() => import("./pages/DigitalbankingPage"));

// 🔐 Admin pages (lazy loaded)
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminMessages = lazy(() => import("./pages/admin/AdminMessagesDashboard"));

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
                <Route path="greateraccraregion" element={<RegionalBranchManagersPage/>} />
                <Route path="ashantiregion" element={<RegionalBranchManagersPage/>} />
                <Route path="ahaforegion" element={<RegionalBranchManagersPage/>} />
                <Route path="westernnorthregion" element={<RegionalBranchManagersPage/>} />
                <Route path="westernregion" element={<RegionalBranchManagersPage/>} />
                <Route path="centralregion" element={<RegionalBranchManagersPage/>} />
                <Route path="easternregion" element={<RegionalBranchManagersPage/>} />
                <Route path="volta-and-otiregion" element={<RegionalBranchManagersPage/>} />
                <Route path="bono-and-bonoeastregion" element={<RegionalBranchManagersPage/>} />
                <Route path="northernsavannah-and-northeast" element={<RegionalBranchManagersPage/>} />
                <Route path="upperwest-and-uppereastregion" element={<RegionalBranchManagersPage/>} />
                <Route path="diasporaservices" element={<RegionalBranchManagersPage/>} />
                
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