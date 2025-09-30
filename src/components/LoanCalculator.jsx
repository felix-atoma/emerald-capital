import React from 'react';
import { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar } from 'lucide-react';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    if (principal && calculatedInterest && calculatedPayments) {
      const x = Math.pow(1 + calculatedInterest, calculatedPayments);
      const monthly = (principal * x * calculatedInterest) / (x - 1);

      if (isFinite(monthly)) {
        setMonthlyPayment(monthly.toFixed(2));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Loan Calculator To
            </h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Determine Your Monthly Repayment
            </h2>

            <div className="space-y-6">
              {/* Amount Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Loan amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Interest Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Years Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Years to repay"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={calculateLoan}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-12 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </div>

            {/* Result Display */}
            {monthlyPayment && (
              <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Monthly Payment:</p>
                <p className="text-3xl font-bold text-blue-600">
                  ${monthlyPayment}
                </p>
              </div>
            )}
          </div>

          {/* Right Side - Illustration */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 -mr-32 -mt-32"></div>
              
              {/* Illustration */}
              <div className="relative z-10 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1554224311-beee2c470c77?w=400&h=300&fit=crop"
                  alt="Financial planning illustration"
                  className="rounded-2xl opacity-90"
                />
              </div>
              
              {/* Icon Overlays */}
              <div className="absolute top-8 left-8 bg-white rounded-full p-3 shadow-lg">
                <Calculator className="w-6 h-6 text-blue-500" />
              </div>
              <div className="absolute bottom-8 right-8 bg-white rounded-full p-3 shadow-lg">
                <DollarSign className="w-6 h-6 text-green-500" />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -right-8 top-1/4 bg-white rounded-2xl p-6 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-3">
                  <Percent className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Interest Rate</p>
                  <p className="text-lg font-bold text-gray-900">Low %</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 bottom-1/4 bg-white rounded-2xl p-6 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 rounded-full p-3">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Flexible Terms</p>
                  <p className="text-lg font-bold text-gray-900">Up to 30y</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}