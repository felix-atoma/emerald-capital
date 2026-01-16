import React from 'react';
import { CheckCircle, AlertCircle, Zap, Shield, Heart, Clock, DollarSign, Home, Stethoscope, Wrench } from 'lucide-react';

const EmergencyPersonalLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-red-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Emergency & Personal Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immediate financial assistance for unexpected situations. From medical emergencies 
            to urgent repairs, get the funds you need quickly and conveniently.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-red-600 to-orange-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-red-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Emergency Relief</h3>
                  <p className="text-red-200">For Urgent Situations</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-red-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵100 - ₵2.5K</div>
                    <div className="text-red-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">3-12</div>
                    <div className="text-red-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Why This Loan?</h4>
                {[
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "24/7 Availability",
                    description: "Apply anytime, day or night"
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Same-Day Processing",
                    description: "Funds in 4-24 hours after approval"
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Minimal Documentation",
                    description: "Basic ID and proof of income"
                  },
                  {
                    icon: <Heart className="w-5 h-5" />,
                    title: "Compassionate Service",
                    description: "Understanding staff for emergencies"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-red-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Basic Requirements</h3>
              <div className="space-y-4">
                {[
                  "Ghanaian citizen aged 18+",
                  "Valid national ID card",
                  "Proof of regular income",
                  "Active mobile number",
                  "Bank account in Ghana",
                  "Clean credit history",
                  "Emergency documentation",
                  "Minimum 3 months employment"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Emergency Uses Section */}
          <div className="space-y-8">
            {/* Common Emergencies */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Common Emergency Uses</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🏥", title: "Medical Bills", desc: "Hospital expenses, medication" },
                  { icon: "🔧", title: "Home Repairs", desc: "Urgent plumbing, electrical" },
                  { icon: "🚗", title: "Car Repairs", desc: "Vehicle breakdowns" },
                  { icon: "💡", title: "Utilities", desc: "Electricity, water bills" },
                  { icon: "✈️", title: "Travel Emergency", desc: "Family emergencies" },
                  { icon: "📚", title: "Education", desc: "School fees, supplies" },
                  { icon: "🍽️", title: "Basic Needs", desc: "Food, rent assistance" },
                  { icon: "⚖️", title: "Legal Fees", desc: "Urgent legal matters" },
                ].map((use, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-red-50 rounded-xl">
                    <div className="text-2xl mb-2">{use.icon}</div>
                    <div className="font-bold text-gray-900">{use.title}</div>
                    <div className="text-sm text-gray-600">{use.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
          

            {/* Documents Required */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Documents</h3>
              <div className="space-y-3">
                {[
                  "Completed emergency loan application",
                  "Valid national ID card (copy)",
                  "Recent passport photograph",
                  "Proof of income (payslip/bank statement)",
                  "Proof of emergency (where applicable)",
                  "Utility bill (proof of address)",
                  "Bank account details",
                  "Emergency contact information"
                ].map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Apply for Emergency Loan
            </button>
          </div>
        </div>

        {/* Emergency Types */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types of Emergencies We Cover
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                type: "Medical Emergency", 
                examples: "Hospital bills, surgery costs, medication",
                icon: "🏥" 
              },
              { 
                type: "Home Emergency", 
                examples: "Roof repairs, plumbing, electrical faults",
                icon: "🏠" 
              },
              { 
                type: "Vehicle Emergency", 
                examples: "Car repairs, accident expenses, towing",
                icon: "🚗" 
              },
              { 
                type: "Family Emergency", 
                examples: "Travel for illness, funeral expenses",
                icon: "👨‍👩‍👧‍👦" 
              },
              { 
                type: "Utility Emergency", 
                examples: "Disconnection threats, urgent bills",
                icon: "💡" 
              },
              { 
                type: "Educational Emergency", 
                examples: "School fee deadlines, exam fees",
                icon: "🎓" 
              },
              { 
                type: "Employment Emergency", 
                examples: "Job loss support, work equipment",
                icon: "💼" 
              },
              { 
                type: "Natural Disaster", 
                examples: "Flood damage, fire repairs",
                icon: "🌪️" 
              },
            ].map((emergency, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-red-100">
                <div className="text-3xl mb-3">{emergency.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{emergency.type}</div>
                <div className="text-sm text-gray-600">{emergency.examples}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mt-20 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-12 shadow-xl border border-red-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Emergency Application Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                time: "0-1 Hour",
                step: "Online Application",
                desc: "Complete simple form with basic details"
              },
              {
                time: "1-4 Hours",
                step: "Document Verification",
                desc: "Upload required documents digitally"
              },
              {
                time: "4-8 Hours",
                step: "Approval Decision",
                desc: "Receive instant loan decision"
              },
              {
                time: "8-24 Hours",
                step: "Fund Disbursement",
                desc: "Money transferred to your account"
              }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-red-200 transform -translate-x-1/2"></div>
                )}
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {process.time}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{process.step}</h4>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">24/7 Application</h4>
            <p className="text-red-200">
              Apply anytime - day, night, weekends, or holidays. Emergencies don't wait for business hours.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Fast Processing</h4>
            <p className="text-orange-200">
              Most applications processed within 4 hours, with funds available in 24 hours or less.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Compassionate Service</h4>
            <p className="text-red-200">
              Our team understands emergencies and provides supportive, judgment-free service.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-red-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Real Emergency Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariam Abdulai",
                emergency: "Child's Medical Emergency",
                loan: "₵1,200",
                quote: "When my son needed emergency surgery, this loan saved his life. The process was so fast!"
              },
              {
                name: "Kwame Asante",
                emergency: "Car Accident Repair",
                loan: "₵800",
                quote: "My car was my livelihood. The emergency loan got me back on the road in 2 days."
              },
              {
                name: "Esi Mensah",
                emergency: "Home Flood Damage",
                loan: "₵1,500",
                quote: "After the flood destroyed our home, this loan helped us make urgent repairs immediately."
              }
            ].map((story, index) => (
              <div key={index} className="bg-red-50 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-red-600 font-medium">{story.emergency}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                <div className="text-sm text-gray-600 bg-white p-3 rounded-lg">
                  <span className="font-bold">Loan Received:</span> {story.loan}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-6 h-6" />
                <p className="text-lg font-bold">24/7 Emergency Hotline</p>
              </div>
              <p className="text-red-100">For immediate assistance during emergencies</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-red-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                +233 20 807 0000
              </a>
              <a 
                href="tel:0553322110" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Emergency: 0553322110
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPersonalLoanDetails;