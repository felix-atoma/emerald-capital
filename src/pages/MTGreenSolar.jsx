import React from "react";
import MTGreenSolarHero from "../components/MTGreenSolarHero";
import MTGreenSolarDetails from "../components/MTGreenSolarDetails";

import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const MTGreenSolar = () => {
  return (
    <div>
      <MTGreenSolarHero />
      <MTGreenSolarDetails/>
        
        
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default MTGreenSolar;
