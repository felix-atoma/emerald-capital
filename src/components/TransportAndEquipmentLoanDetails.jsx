import React from 'react';
import { CheckCircle, Users, TrendingUp, Truck, Target, Award, BookOpen, Wrench, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransportAndEquipmentLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transport & Equipment Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finance the vehicles and equipment your business needs to operate efficiently 
            and grow. From commercial vehicles to industrial machinery, get the assets 
            that drive your success with flexible financing options.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Truck className="w-8 h-8 text-orange-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AssetDrive Program</h3>
                  <p className="text-orange-200">For Asset Acquisition</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-orange-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵1K - ₵20K</div>
                    <div className="text-orange-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">12-48</div>
                    <div className="text-orange-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-orange-200 mb-2">Program Impact</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">2,800+</div>
                    <div className="text-orange-200 text-sm">Assets Financed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-300">92%</div>
                    <div className="text-orange-200 text-sm">Business Efficiency</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Asset Financing Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Asset-Based Security",
                    description: "The asset serves as collateral for the loan"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Flexible Payments",
                    description: "Monthly installments aligned with earnings"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Insurance Included",
                    description: "Comprehensive asset insurance coverage"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Maintenance Support",
                    description: "Access to service provider networks"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-orange-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {[
                  "Registered business in Ghana",
                  "Valid driver's license (for vehicles)",
                  "Business operational for 6+ months",
                  "Proof of business income",
                  "Business registration documents",
                  "Valid national ID card",
                  "Asset quotation or proforma invoice",
                  "Down payment capacity (10-20%)"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Asset Types Section */}
          <div className="space-y-8">
            {/* Asset Categories */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Financed Asset Types</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🚚", title: "Commercial Trucks", desc: "Cargo, delivery trucks" },
                  { icon: "🚗", title: "Business Vehicles", desc: "Cars, vans, SUVs" },
                  { icon: "🏗️", title: "Construction Equipment", desc: "Excavators, mixers" },
                  { icon: "🚜", title: "Agricultural Machinery", desc: "Tractors, harvesters" },
                  { icon: "🏭", title: "Industrial Equipment", desc: "Generators, machines" },
                  { icon: "🔧", title: "Workshop Tools", desc: "Professional equipment" },
                  { icon: "🚌", title: "Passenger Transport", desc: "Buses, minibuses" },
                  { icon: "⚙️", title: "Processing Machines", desc: "Manufacturing equipment" },
                ].map((asset, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-2xl mb-2">{asset.icon}</div>
                    <div className="font-bold text-gray-900">{asset.title}</div>
                    <div className="text-sm text-gray-600">{asset.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
           

            {/* Support Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Included Support Services</h3>
              <div className="space-y-3">
                {[
                  "Asset valuation and inspection",
                  "Registration and documentation support",
                  "Comprehensive insurance arrangement",
                  "Maintenance service provider network",
                  "GPS tracking installation (vehicles)",
                  "Spare parts supplier connections",
                  "Emergency roadside assistance",
                  "Asset upgrade options after 50% repayment"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              to="/applyforloanpage"
              className="block"
              aria-label="Apply for Asset Loan"
            >
              <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-500/50">
                Apply for Asset Loan
              </button>
            </Link>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-12 shadow-xl border border-orange-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Asset Financing Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Samuel Owusu",
                business: "Owusu Logistics",
                loan: "₵15,000",
                before: "Renting trucks for deliveries",
                after: "Owns 2 trucks, doubled delivery capacity"
              },
              {
                name: "Martha Adjei",
                business: "Adjei Construction",
                loan: "₵18,000",
                before: "Hiring equipment for each project",
                after: "Owns excavator and mixer, 3x profit margins"
              },
              {
                name: "Yaw Boakye",
                business: "Boakye Farms",
                loan: "₵12,500",
                before: "Manual farming, low yield",
                after: "Tractor-powered, 5x productivity, larger land"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-orange-600 font-medium">{story.business}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Before:</div>
                      <div className="font-medium">{story.before}</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">After:</div>
                      <div className="font-medium text-amber-600">{story.after}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Asset Loan:</span>
                    <span className="font-bold text-orange-700">{story.loan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            AssetDrive Program Components
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Asset Financing",
                icon: "💰",
                description: "Flexible loans for vehicles and equipment"
              },
              {
                component: "Insurance Coverage",
                icon: "🛡️",
                description: "Comprehensive protection for your assets"
              },
              {
                component: "Maintenance Network",
                icon: "🔧",
                description: "Access to reliable service providers"
              },
              {
                component: "Asset Tracking",
                icon: "📍",
                description: "GPS monitoring and security systems"
              }
            ].map((component, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{component.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{component.component}</h4>
                <p className="text-gray-600 text-sm">{component.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Asset Investment Areas */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Asset Investment Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Transport Vehicles", 
                impact: "Commercial cars, trucks, vans",
                icon: "🚚" 
              },
              { 
                area: "Passenger Fleet", 
                impact: "Buses, taxis, ride-share vehicles",
                icon: "🚌" 
              },
              { 
                area: "Construction Gear", 
                impact: "Heavy machinery and tools",
                icon: "🏗️" 
              },
              { 
                area: "Farm Equipment", 
                impact: "Tractors, tillers, harvesters",
                icon: "🚜" 
              },
              { 
                area: "Industrial Machines", 
                impact: "Generators, compressors, pumps",
                icon: "⚙️" 
              },
              { 
                area: "Processing Units", 
                impact: "Manufacturing equipment",
                icon: "🏭" 
              },
              { 
                area: "Workshop Tools", 
                impact: "Professional grade equipment",
                icon: "🔧" 
              },
              { 
                area: "Specialized Assets", 
                impact: "Industry-specific machinery",
                icon: "🎯" 
              },
            ].map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                <div className="text-2xl mb-3">{impact.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{impact.area}</div>
                <div className="text-sm text-gray-600">{impact.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Asset-Based Security</h4>
            <p className="text-orange-200">
              The financed asset serves as collateral, making approval faster with competitive interest rates.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Wrench className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Maintenance Support</h4>
            <p className="text-amber-200">
              Access to our network of trusted service providers for repairs, maintenance, and spare parts.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600 to-yellow-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Insurance Included</h4>
            <p className="text-orange-200">
              Comprehensive insurance coverage protects your investment and ensures peace of mind.
            </p>
          </div>
        </div>

        {/* Asset Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Ready to Acquire Your Asset?</p>
              </div>
              <p className="text-orange-100">Speak with our asset financing specialists today</p>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                to="/applyforloanpage"
                className="bg-white text-orange-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                aria-label="Apply for Asset Loan - Call to Action"
              >
                Apply for Asset Loan
              </Link>
              <a 
                href="mailto:assets@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportAndEquipmentLoanDetails;