import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, Shield, TrendingUp, Lock, Zap, Target, 
  Users, Globe, PiggyBank, DollarSign, Calendar, Percent,
  Calculator, ArrowRight, RotateCcw, Save
} from 'lucide-react';

const SavingsProductsDetails = () => {
  // Calculator states
  const [calculatorType, setCalculatorType] = useState('savings'); // 'savings' or 'loan'
  const [monthlySavings, setMonthlySavings] = useState(500);
  const [savingsPeriod, setSavingsPeriod] = useState(12); // months
  const [interestRate, setInterestRate] = useState(6); // annual percentage
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanPeriod, setLoanPeriod] = useState(24); // months
  const [loanInterestRate, setLoanInterestRate] = useState(12); // annual percentage
  const [savingsFrequency, setSavingsFrequency] = useState('monthly'); // 'monthly', 'quarterly', 'yearly'
  
  // Calculation results
  const [totalSavings, setTotalSavings] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [totalLoanCost, setTotalLoanCost] = useState(0);

  // Savings products data
  const savingsProducts = [
    {
      id: 1,
      title: "Regular Savings",
      icon: "💰",
      interest: 6,
      min: 50,
      features: ["Daily access", "Monthly statements", "Mobile banking"],
      color: "from-purple-400 to-purple-600",
      description: "Perfect for everyday savings with easy access"
    },
    {
      id: 2,
      title: "Fixed Deposit",
      icon: "📈",
      interest: 12,
      min: 500,
      features: ["Higher interest", "Term options", "Automatic renewal"],
      color: "from-yellow-400 to-yellow-600",
      description: "Higher returns for fixed term deposits"
    },
    {
      id: 3,
      title: "Susu Account",
      icon: "👥",
      interest: 4,
      min: 5,
      features: ["Daily savings", "Group savings", "Flexible deposits"],
      color: "from-blue-400 to-blue-600",
      description: "Traditional group savings with modern convenience"
    },
    {
      id: 4,
      title: "Goal Savings",
      icon: "🎯",
      interest: 8,
      min: 100,
      features: ["Target-based", "Progress tracking", "Bonus interest"],
      color: "from-green-400 to-green-600",
      description: "Save towards specific financial goals"
    },
  ];

  // Loan products data
  const loanProducts = [
    {
      id: 1,
      title: "Personal Loan",
      icon: "💳",
      interest: 18,
      min: 1000,
      max: 50000,
      features: ["Flexible use", "Quick approval", "No collateral"],
      color: "from-purple-400 to-purple-600",
      description: "For personal expenses and emergencies"
    },
    {
      id: 2,
      title: "Business Loan",
      icon: "🏢",
      interest: 15,
      min: 5000,
      max: 200000,
      features: ["Business growth", "Equipment financing", "Working capital"],
      color: "from-yellow-400 to-yellow-600",
      description: "Fuel your business growth and expansion"
    },
    {
      id: 3,
      title: "Education Loan",
      icon: "🎓",
      interest: 10,
      min: 1000,
      max: 100000,
      features: ["Low interest", "Study abroad", "Flexible repayment"],
      color: "from-blue-400 to-blue-600",
      description: "Invest in education and future opportunities"
    },
    {
      id: 4,
      title: "Home Improvement",
      icon: "🏠",
      interest: 12,
      min: 2000,
      max: 100000,
      features: ["Home renovation", "Furniture", "Construction"],
      color: "from-green-400 to-green-600",
      description: "Upgrade and improve your living space"
    },
  ];

  // Calculate savings
  const calculateSavings = () => {
    const months = savingsPeriod;
    const monthlyRate = interestRate / 100 / 12;
    let futureValue = 0;
    
    // Calculate future value of monthly contributions
    if (monthlyRate > 0) {
      futureValue = monthlySavings * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    } else {
      futureValue = monthlySavings * months;
    }
    
    const totalPrincipal = monthlySavings * months;
    const interest = futureValue - totalPrincipal;
    
    setTotalSavings(Math.round(totalPrincipal));
    setInterestEarned(Math.round(interest));
    setFinalAmount(Math.round(futureValue));
  };

  // Calculate loan
  const calculateLoan = () => {
    const principal = loanAmount;
    const monthlyRate = loanInterestRate / 100 / 12;
    const months = loanPeriod;
    
    // Calculate monthly payment using amortization formula
    let monthlyPayment = 0;
    if (monthlyRate > 0) {
      monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                      (Math.pow(1 + monthlyRate, months) - 1);
    } else {
      monthlyPayment = principal / months;
    }
    
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;
    
    setMonthlyPayment(Math.round(monthlyPayment));
    setTotalInterestPaid(Math.round(totalInterest));
    setTotalLoanCost(Math.round(totalPayment));
  };

  // Handle product selection for savings
  const handleSavingsProductSelect = (product) => {
    setInterestRate(product.interest);
    setMonthlySavings(Math.max(product.min, 500)); // Set minimum or 500, whichever is higher
    calculateSavings();
  };

  // Handle product selection for loan
  const handleLoanProductSelect = (product) => {
    setLoanInterestRate(product.interest);
    setLoanAmount(Math.max(product.min, 1000)); // Set minimum or 1000, whichever is higher
    calculateLoan();
  };

  // Reset calculator
  const resetCalculator = () => {
    if (calculatorType === 'savings') {
      setMonthlySavings(500);
      setSavingsPeriod(12);
      setInterestRate(6);
      calculateSavings();
    } else {
      setLoanAmount(10000);
      setLoanPeriod(24);
      setLoanInterestRate(12);
      calculateLoan();
    }
  };

  // Initialize calculations
  useEffect(() => {
    calculateSavings();
    calculateLoan();
  }, []);

  // Recalculate when inputs change
  useEffect(() => {
    calculateSavings();
  }, [monthlySavings, savingsPeriod, interestRate]);

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, loanPeriod, loanInterestRate]);

  return (
    <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Financial Products<br />
            <span className="text-purple-600">Savings & Loans Calculator</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your financial future with our comprehensive savings and loan calculators. 
            Compare products, calculate returns, and make informed decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Financial Products Card */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Calculator className="w-8 h-8 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Financial Planning Suite</h3>
                  <p className="text-purple-200">Complete Savings & Loan Solutions</p>
                </div>
              </div>

              <p className="text-purple-200 mb-8 leading-relaxed">
                Our comprehensive financial products feature advanced calculators to help you 
                plan your savings goals and understand loan commitments. Make informed decisions 
                with real-time calculations.
              </p>

              {/* Key Benefits */}
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Secure Savings",
                    description: "Government-insured deposits with competitive returns"
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Growth Potential",
                    description: "High-interest savings and affordable loan options"
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: "Digital Access",
                    description: "24/7 account management through digital channels"
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Family Solutions",
                    description: "Special packages for families and businesses"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{benefit.title}</h4>
                      <p className="text-purple-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Account Opening Requirements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">1</span>
                    </div>
                    <span className="font-medium">Valid National ID</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">2</span>
                    </div>
                    <span className="font-medium">Proof of Address</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">3</span>
                    </div>
                    <span className="font-medium">Passport Photo</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">4</span>
                    </div>
                    <span className="font-medium">Minimum Deposit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">5</span>
                    </div>
                    <span className="font-medium">Tax ID (if applicable)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="font-bold">6</span>
                    </div>
                    <span className="font-medium">Completed Forms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Calculator Section */}
          <div className="space-y-8">
            {/* Calculator Type Selector */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setCalculatorType('savings')}
                className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
                  calculatorType === 'savings'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                💰 Savings Calculator
              </button>
              <button
                onClick={() => setCalculatorType('loan')}
                className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
                  calculatorType === 'loan'
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🏦 Loan Calculator
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-6">
              {(calculatorType === 'savings' ? savingsProducts : loanProducts).map((product) => (
                <div 
                  key={product.id}
                  onClick={() => calculatorType === 'savings' ? handleSavingsProductSelect(product) : handleLoanProductSelect(product)}
                  className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                      <span className="text-2xl">{product.icon}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{product.interest}% {calculatorType === 'savings' ? 'PA' : 'APR'}</div>
                      <div className="text-xs text-gray-600">
                        {calculatorType === 'savings' ? 'Interest Rate' : 'Annual Rate'}
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{product.title}</h4>
                  <div className="text-sm text-gray-600 mb-4">
                    Min: ₵{product.min}
                    {product.max && ` - Max: ₵${product.max.toLocaleString()}`}
                  </div>
                  <div className="space-y-2">
                    {product.features.slice(0, 2).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Calculator */}
         
            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-bold text-lg py-5 rounded-2xl hover:from-purple-700 hover:to-yellow-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
              {calculatorType === 'savings' ? (
                <>
                  <Save className="w-5 h-5" />
                  Open Savings Account
                </>
              ) : (
                <>
                  <DollarSign className="w-5 h-5" />
                  Apply for Loan
                </>
              )}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Comparison Table */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">
              Financial Products Comparison
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => setCalculatorType('savings')}
                className={`px-6 py-3 rounded-full font-bold transition-colors ${
                  calculatorType === 'savings'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Savings
              </button>
              <button
                onClick={() => setCalculatorType('loan')}
                className={`px-6 py-3 rounded-full font-bold transition-colors ${
                  calculatorType === 'loan'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Loans
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-purple-50 to-yellow-50">
                  <th className="text-left p-4 font-bold text-purple-900">Product</th>
                  <th className="text-left p-4 font-bold text-purple-900">Interest Rate</th>
                  <th className="text-left p-4 font-bold text-purple-900">{calculatorType === 'savings' ? 'Minimum Balance' : 'Loan Range'}</th>
                  <th className="text-left p-4 font-bold text-purple-900">Term Options</th>
                  <th className="text-left p-4 font-bold text-purple-900">Features</th>
                  <th className="text-left p-4 font-bold text-purple-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {(calculatorType === 'savings' ? [
                  { 
                    product: "Regular Savings", 
                    rate: "6% PA", 
                    range: "₵50+", 
                    term: "Flexible", 
                    features: "Monthly statements", 
                    for: "Daily savings" 
                  },
                  { 
                    product: "Fixed Deposit", 
                    rate: "12-15% PA", 
                    range: "₵500+", 
                    term: "3-60 months", 
                    features: "Higher interest", 
                    for: "Long-term savings" 
                  },
                  { 
                    product: "Susu Account", 
                    rate: "4% PA", 
                    range: "₵5+", 
                    term: "Flexible", 
                    features: "Group savings", 
                    for: "Regular small savings" 
                  },
                  { 
                    product: "Goal Savings", 
                    rate: "8% PA", 
                    range: "₵100+", 
                    term: "Target-based", 
                    features: "Progress tracking", 
                    for: "Specific targets" 
                  },
                ] : [
                  { 
                    product: "Personal Loan", 
                    rate: "18% APR", 
                    range: "₵1,000 - ₵50,000", 
                    term: "6-60 months", 
                    features: "No collateral", 
                    for: "Personal expenses" 
                  },
                  { 
                    product: "Business Loan", 
                    rate: "15% APR", 
                    range: "₵5,000 - ₵200,000", 
                    term: "12-84 months", 
                    features: "Quick approval", 
                    for: "Business growth" 
                  },
                  { 
                    product: "Education Loan", 
                    rate: "10% APR", 
                    range: "₵1,000 - ₵100,000", 
                    term: "Flexible", 
                    features: "Low interest", 
                    for: "Education expenses" 
                  },
                  { 
                    product: "Home Improvement", 
                    rate: "12% APR", 
                    range: "₵2,000 - ₵100,000", 
                    term: "6-60 months", 
                    features: "Home renovation", 
                    for: "Property upgrades" 
                  },
                ]).map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-purple-50">
                    <td className="p-4 font-bold text-gray-900">{item.product}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full font-bold ${
                        calculatorType === 'savings' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {item.rate}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-gray-700">{item.range}</td>
                    <td className="p-4 text-gray-600">{item.term}</td>
                    <td className="p-4 text-gray-600">{item.features}</td>
                    <td className="p-4 text-gray-600">{item.for}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <p className="text-lg font-bold mb-2">Need financial advice?</p>
              <p className="text-purple-100">Our financial experts are ready to help you plan your future</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                +233 20 807 0000
              </a>
              <a 
                href="mailto:finance@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Email Our Experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsProductsDetails;