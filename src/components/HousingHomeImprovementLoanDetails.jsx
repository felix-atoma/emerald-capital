import React from 'react';
import { CheckCircle, Home, Hammer, TrendingUp, Shield, Ruler, PaintBucket, Wrench, Key, Building } from 'lucide-react';

const HousingHomeImprovementLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Housing & Home Improvement Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finance your dream home projects with our specialized housing loan. 
            From construction and renovation to essential repairs and upgrades, 
            we provide flexible financing options for all your housing needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Home className="w-8 h-8 text-amber-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Home Transformation</h3>
                  <p className="text-amber-200">For Property Enhancement</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-amber-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵500 - ₵10K</div>
                    <div className="text-amber-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">12-36</div>
                    <div className="text-amber-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Property Value Increase */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-amber-200 mb-2">Property Value Impact</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">15-40%</div>
                    <div className="text-amber-200 text-sm">Value Increase</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-300">Low Rate</div>
                    <div className="text-amber-200 text-sm">Home Collateral</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Homeowner Advantages</h4>
                {[
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Property as Collateral",
                    description: "Use your home or land as security for better rates"
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Increased Property Value",
                    description: "Improvements can boost home value significantly"
                  },
                  {
                    icon: <Building className="w-5 h-5" />,
                    title: "Professional Contractors",
                    description: "Access to vetted, qualified contractors"
                  },
                  {
                    icon: <Key className="w-5 h-5" />,
                    title: "Ownership Documentation",
                    assistance: "Help with title searches and documentation"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-amber-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Basic Requirements</h3>
              <div className="space-y-4">
                {[
                  "Ghanaian citizen aged 21+",
                  "Property ownership or leasehold rights",
                  "Valid title deed or land certificate",
                  "Proof of income/employment",
                  "Property valuation report",
                  "Building permits (for construction)",
                  "Contractor estimates/quotes",
                  "Property insurance coverage"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Project Types Section */}
          <div className="space-y-8">
            {/* Project Types */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Supported Projects</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🏗️", title: "New Construction", desc: "Build new home" },
                  { icon: "🔨", title: "Renovation", desc: "Major home upgrades" },
                  { icon: "🔧", title: "Repairs", desc: "Essential maintenance" },
                  { icon: "🎨", title: "Painting", desc: "Interior/exterior paint" },
                  { icon: "🚽", title: "Plumbing", desc: "Bathroom/kitchen work" },
                  { icon: "💡", title: "Electrical", desc: "Wiring, lighting" },
                  { icon: "🪟", title: "Windows/Doors", desc: "Replacement/upgrade" },
                  { icon: "🌿", title: "Landscaping", desc: "Garden, outdoor space" },
                ].map((project, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-amber-50 rounded-xl">
                    <div className="text-2xl mb-2">{project.icon}</div>
                    <div className="font-bold text-gray-900">{project.title}</div>
                    <div className="text-sm text-gray-600">{project.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
          

            {/* Required Documents */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Documents</h3>
              <div className="space-y-3">
                {[
                  "Completed loan application form",
                  "Title deed/land certificate (copy)",
                  "Site plan and building plans",
                  "Contractor estimates/quotations",
                  "Building permit (for construction)",
                  "Valuation report from certified valuer",
                  "Proof of income (6 months)",
                  "Property insurance certificate"
                ].map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Apply for Home Improvement Loan
            </button>
          </div>
        </div>

        {/* Project Stages */}
        <div className="mt-20 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 shadow-xl border border-amber-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Typical Home Improvement Stages
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                stage: "Planning & Design",
                duration: "1-2 Months",
                cost: "₵500-₵2,000",
                activities: "Architect plans, permits, contractor selection"
              },
              {
                stage: "Structural Work",
                duration: "2-4 Months",
                cost: "₵2,000-₵6,000",
                activities: "Foundation, walls, roofing, structural repairs"
              },
              {
                stage: "Finishing & Systems",
                duration: "1-3 Months",
                cost: "₵1,500-₵4,000",
                activities: "Electrical, plumbing, flooring, painting"
              },
              {
                stage: "Final Touches",
                duration: "2-4 Weeks",
                cost: "₵500-₵2,000",
                activities: "Landscaping, fixtures, cleaning, inspection"
              }
            ].map((stage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{stage.stage}</h4>
                <div className="text-amber-600 font-medium mb-2">{stage.duration}</div>
                <div className="text-gray-700 mb-3">{stage.cost}</div>
                <p className="text-gray-600 text-sm">{stage.activities}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Home Types */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types of Properties We Finance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                type: "Single Family Home", 
                description: "Detached residential house",
                loan: "Up to ₵10,000" 
              },
              { 
                type: "Apartment/Condo", 
                description: "Multi-unit building improvements",
                loan: "Up to ₵8,000" 
              },
              { 
                type: "Compound House", 
                description: "Multi-family compound upgrades",
                loan: "Up to ₵12,000" 
              },
              { 
                type: "Rental Property", 
                description: "Investment property improvements",
                loan: "Up to ₵15,000" 
              },
              { 
                type: "Ancillary Building", 
                description: "Store, workshop, or garage",
                loan: "Up to ₵5,000" 
              },
              { 
                type: "Land Development", 
                description: "Site preparation and services",
                loan: "Up to ₵7,000" 
              },
              { 
                type: "Heritage Property", 
                description: "Historical property restoration",
                loan: "Up to ₵9,000" 
              },
              { 
                type: "Eco-Friendly Home", 
                description: "Green building improvements",
                loan: "Up to ₵10,000" 
              },
            ].map((property, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
                <div className="font-bold text-gray-900 mb-2">{property.type}</div>
                <div className="text-sm text-gray-600 mb-3">{property.description}</div>
                <div className="text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
                  <span className="font-semibold">Loan Amount:</span> {property.loan}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-amber-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Home Transformation Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                homeowner: "Mr. & Mrs. Asante",
                project: "Complete Home Renovation",
                loan: "₵8,500",
                before: "Dilapidated 3-bedroom house",
                after: "Modern family home, value increased by 50%"
              },
              {
                homeowner: "Ms. Abena Osei",
                project: "Kitchen & Bathroom Upgrade",
                loan: "₵4,200",
                before: "Outdated 1980s kitchen",
                after: "Modern open-plan kitchen, rental value up 30%"
              },
              {
                homeowner: "The Addo Family",
                project: "Room Addition",
                loan: "₵6,800",
                before: "2-bedroom cramped space",
                after: "4-bedroom comfortable home for growing family"
              }
            ].map((story, index) => (
              <div key={index} className="bg-amber-50 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.homeowner.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.homeowner}</h4>
                    <div className="text-amber-600 font-medium">{story.project}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Before:</div>
                      <div className="font-medium">{story.before}</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-sm text-gray-600">After:</div>
                      <div className="font-medium text-green-600">{story.after}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Home Loan:</span>
                    <span className="font-bold text-amber-700">{story.loan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Increased Property Value</h4>
            <p className="text-amber-200">
              Home improvements typically increase property value by 15-40%, providing excellent return on investment.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Vetted Contractors</h4>
            <p className="text-orange-200">
              Access to our network of pre-vetted, qualified contractors with proven track records.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-600 to-brown-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Key className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Title Assistance</h4>
            <p className="text-amber-200">
              Help with land title searches, documentation, and property registration processes.
            </p>
          </div>
        </div>

        {/* Contractor Network */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Hammer className="w-6 h-6" />
                <p className="text-lg font-bold">Need Qualified Contractors?</p>
              </div>
              <p className="text-amber-100">Access our network of vetted construction professionals</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-amber-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Housing Desk
              </a>
              <a 
                href="mailto:housingloans@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Request Contractor List
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingHomeImprovementLoanDetails;