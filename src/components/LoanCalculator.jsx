import React from 'react';
import { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, TrendingUp, AlertCircle } from 'lucide-react';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [error, setError] = useState('');
  const [showResults, setShowResults] = useState(false);

  const validateInputs = () => {
    if (!loanAmount || !interest || !years) {
      setError('Please fill in all fields');
      return false;
    }

    const amount = parseFloat(loanAmount);
    const rate = parseFloat(interest);
    const period = parseFloat(years);

    if (amount <= 0) {
      setError('Loan amount must be greater than 0');
      return false;
    }

    if (rate < 0) {
      setError('Interest rate cannot be negative');
      return false;
    }

    if (period <= 0) {
      setError('Loan period must be greater than 0');
      return false;
    }

    if (period > 50) {
      setError('Loan period cannot exceed 50 years');
      return false;
    }

    setError('');
    return true;
  };

  const calculateLoan = () => {
    if (!validateInputs()) {
      setShowResults(false);
      return;
    }

    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    if (principal && calculatedInterest >= 0 && calculatedPayments) {
      // If interest rate is 0, simple calculation
      if (calculatedInterest === 0) {
        const monthly = principal / calculatedPayments;
        setMonthlyPayment(monthly.toFixed(2));
        setTotalPayment(principal.toFixed(2));
        setTotalInterest('0.00');
        setShowResults(true);
        return;
      }

      // Standard loan calculation with interest
      const x = Math.pow(1 + calculatedInterest, calculatedPayments);
      const monthly = (principal * x * calculatedInterest) / (x - 1);

      if (isFinite(monthly)) {
        const total = monthly * calculatedPayments;
        const totalInt = total - principal;

        setMonthlyPayment(monthly.toFixed(2));
        setTotalPayment(total.toFixed(2));
        setTotalInterest(totalInt.toFixed(2));
        setShowResults(true);
      } else {
        setError('Unable to calculate. Please check your inputs.');
        setShowResults(false);
      }
    }
  };

  const handleReset = () => {
    setLoanAmount('');
    setInterest('');
    setYears('');
    setMonthlyPayment(null);
    setTotalPayment(null);
    setTotalInterest(null);
    setError('');
    setShowResults(false);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Loan Calculator
                </h1>
                <p className="text-sm text-gray-600">Calculate your monthly repayment</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Amount Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Amount (GH₵)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    placeholder="Enter loan amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  />
                </div>
              </div>

              {/* Interest Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Interest Rate (%)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Percent className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Enter interest rate"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  />
                </div>
              </div>

              {/* Years Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Period (Years)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    placeholder="Enter number of years"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={calculateLoan}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Calculate
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Results Display */}
            {showResults && monthlyPayment && (
              <div className="mt-8 space-y-4">
                {/* Monthly Payment */}
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1 font-medium">Monthly Payment</p>
                  <p className="text-4xl font-bold text-emerald-600">
                    GH₵ {formatCurrency(monthlyPayment)}
                  </p>
                </div>

                {/* Breakdown */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Total Payment</p>
                    <p className="text-xl font-bold text-gray-900">
                      GH₵ {formatCurrency(totalPayment)}
                    </p>
                  </div>
                  <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Total Interest</p>
                    <p className="text-xl font-bold text-gray-900">
                      GH₵ {formatCurrency(totalInterest)}
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold mb-1">Loan Summary</p>
                      <p>You will pay <span className="font-bold text-blue-600">GH₵ {formatCurrency(monthlyPayment)}</span> per month for <span className="font-bold">{years} years</span>, totaling <span className="font-bold">GH₵ {formatCurrency(totalPayment)}</span>.</p>
                      <p className="mt-2">Total interest: <span className="font-bold text-orange-600">GH₵ {formatCurrency(totalInterest)}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Illustration */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full opacity-10 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500 rounded-full opacity-10 -ml-24 -mb-24"></div>
              
              {/* Illustration */}
              <div className="relative z-10 flex items-center justify-center">
                <img
                  src="cartoon.png"
                  alt="Financial planning illustration"
                  className="rounded-2xl opacity-90 max-w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Icon Overlays */}
              <div className="absolute top-8 left-8 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <Calculator className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="absolute bottom-8 right-8 bg-white rounded-full p-3 shadow-lg animate-pulse">
                <DollarSign className="w-6 h-6 text-green-500" />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -right-8 top-1/4 bg-white rounded-2xl p-6 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-100 rounded-full p-3">
                  <Percent className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Interest Rate</p>
                  <p className="text-lg font-bold text-gray-900">Competitive</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 bottom-1/4 bg-white rounded-2xl p-6 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 hidden lg:block">
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

        {/* Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Calculator className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Easy Calculation</h3>
            <p className="text-sm text-gray-600">Get instant results with our simple and accurate loan calculator.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Complete Breakdown</h3>
            <p className="text-sm text-gray-600">View detailed information about your monthly payments and total costs.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Plan Your Budget</h3>
            <p className="text-sm text-gray-600">Make informed decisions about your loan with clear payment projections.</p>
          </div>
        </div>
      </div>
    </div>
  );
}