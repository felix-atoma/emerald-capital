import React from 'react';
import MutualPlusLoanHeader from '../components/MutualPlusLoanHeader';
import PrivateSectorLoan from '../components/PrivateSection';

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      <MutualPlusLoanHeader />
      <PrivateSectorLoan />
    </div>
  );
};

export default HomePage;
