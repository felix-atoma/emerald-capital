import React from 'react';
import MicrofinanceHero from "../components/MicrofinanceHero";
import PrivateSectorLoan from "../components/PrivateSection";
import FinancialProductsSite from "../components/FinancialProductsSite";
import FinancialCards from  '../components/FinancialCards'
import BusinessFocusCarousel from '../components/BusinessFocusCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ThreeRowCarousel from '../components/ThreeRowCarousel'; 
import TopServicesHero from '../components/TopServicesHero'; 
import FAQsSection from '../components/FAQsSection';
import DownloadAppSection from '../components/DownloadAppSection';  

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <MicrofinanceHero />
      <PrivateSectorLoan />
      {/* Scoped financial section */}
      <section id="financial-products">
        <FinancialProductsSite />
        <TopServicesHero />
        <FinancialCards />
        <BusinessFocusCarousel />
        <TestimonialCarousel />
        <ThreeRowCarousel />
        <FAQsSection />
        {/* <DownloadAppSection /> */}
      </section>
      
    </div>
  );
};

export default HomePage;
