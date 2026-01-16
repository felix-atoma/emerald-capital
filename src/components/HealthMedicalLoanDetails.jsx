import React from 'react';
import { CheckCircle, Heart, Stethoscope, Shield, Clock, Pill, Ambulance, Users, Hospital, FileText } from 'lucide-react';

const HealthMedicalLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-pink-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Health & Medical Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prioritize your health without financial worry. Our medical loan provides 
            immediate funding for healthcare expenses, treatments, and medical emergencies 
            with compassionate terms and fast processing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-pink-600 to-rose-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-pink-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Healthcare Support</h3>
                  <p className="text-pink-200">For Medical Emergencies</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-pink-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵200 - ₵5K</div>
                    <div className="text-pink-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">3-18</div>
                    <div className="text-pink-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Medical Support */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-pink-200 mb-2">Emergency Support</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-pink-200 text-sm">Application</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-300">Fast Track</div>
                    <div className="text-pink-200 text-sm">Medical Emergencies</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Medical Advantages</h4>
                {[
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Emergency Processing",
                    description: "Fast-track approval for medical emergencies"
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Grace Period",
                    description: "Start repayment after recovery period"
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Family Coverage",
                    description: "Can be used for immediate family members"
                  },
                  {
                    icon: <Hospital className="w-5 h-5" />,
                    title: "Hospital Partnerships",
                    description: "Direct billing arrangements with hospitals"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-pink-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-pink-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Basic Requirements</h3>
              <div className="space-y-4">
                {[
                  "Ghanaian citizen aged 18+",
                  "Valid national ID card",
                  "Medical documentation/report",
                  "Hospital estimate/quotation",
                  "Proof of income/employment",
                  "Emergency contact information",
                  "Bank account in Ghana",
                  "Clean credit history"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Medical Coverage Section */}
          <div className="space-y-8">
            {/* Covered Treatments */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-pink-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Covered Medical Expenses</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🏥", title: "Hospital Bills", desc: "Inpatient/outpatient" },
                  { icon: "💊", title: "Medications", desc: "Prescription drugs" },
                  { icon: "🔬", title: "Lab Tests", desc: "Diagnostic tests" },
                  { icon: "🩺", title: "Surgery", desc: "Surgical procedures" },
                  { icon: "🦷", title: "Dental Care", desc: "Dental procedures" },
                  { icon: "👁️", title: "Eye Care", desc: "Vision treatments" },
                  { icon: "🤰", title: "Maternity", desc: "Pregnancy care" },
                  { icon: "🚑", title: "Ambulance", desc: "Emergency transport" },
                ].map((treatment, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-pink-50 rounded-xl">
                    <div className="text-2xl mb-2">{treatment.icon}</div>
                    <div className="font-bold text-gray-900">{treatment.title}</div>
                    <div className="text-sm text-gray-600">{treatment.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
           

            {/* Required Documents */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Documents</h3>
              <div className="space-y-3">
                {[
                  "Completed medical loan application",
                  "Valid national ID card (copy)",
                  "Medical report from doctor/hospital",
                  "Hospital bill/estimate/quotation",
                  "Proof of income (payslip/bank statement)",
                  "Emergency contact details",
                  "Bank account information",
                  "Recent passport photograph"
                ].map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-pink-700 hover:to-rose-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Apply for Medical Loan
            </button>
          </div>
        </div>

        {/* Hospital Partnerships */}
        <div className="mt-20 bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-12 shadow-xl border border-pink-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Partner Hospitals & Clinics
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                hospital: "Korle Bu Teaching Hospital",
                services: "Direct billing arrangements",
                benefit: "No upfront payment required"
              },
              {
                hospital: "Komfo Anokye Teaching Hospital",
                services: "Emergency care coverage",
                benefit: "Fast-track admission process"
              },
              {
                hospital: "Ridge Hospital",
                services: "Comprehensive medical services",
                benefit: "Priority treatment for loan clients"
              }
            ].map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                    {partner.hospital.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{partner.hospital}</h4>
                    <div className="text-pink-600 font-medium">{partner.services}</div>
                  </div>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Benefit:</div>
                  <div className="font-bold text-rose-600">{partner.benefit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Conditions */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Commonly Covered Conditions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                condition: "Surgical Procedures", 
                examples: "Appendectomy, hernia repair, cataract",
                icon: "🔪" 
              },
              { 
                condition: "Chronic Diseases", 
                examples: "Diabetes, hypertension, asthma care",
                icon: "🫀" 
              },
              { 
                condition: "Infectious Diseases", 
                examples: "Malaria, typhoid, bacterial infections",
                icon: "🦠" 
              },
              { 
                condition: "Maternity Care", 
                examples: "Prenatal, delivery, postnatal care",
                icon: "🤰" 
              },
              { 
                condition: "Pediatric Care", 
                examples: "Child vaccinations, pediatric illnesses",
                icon: "👶" 
              },
              { 
                condition: "Dental Emergencies", 
                examples: "Tooth extraction, root canal, dental pain",
                icon: "🦷" 
              },
              { 
                condition: "Eye Care", 
                examples: "Cataract surgery, glaucoma treatment",
                icon: "👁️" 
              },
              { 
                condition: "Accident & Injury", 
                examples: "Fractures, burns, emergency trauma care",
                icon: "🚑" 
              },
            ].map((condition, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
                <div className="text-2xl mb-3">{condition.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{condition.condition}</div>
                <div className="text-sm text-gray-600">{condition.examples}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Process */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-pink-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Emergency Medical Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                time: "Immediate",
                step: "Emergency Contact",
                desc: "Call emergency line or visit partner hospital"
              },
              {
                time: "1-2 Hours",
                step: "Fast-Track Application",
                desc: "Complete simplified emergency application"
              },
              {
                time: "2-4 Hours",
                step: "Approval & Guarantee",
                desc: "Receive loan approval and hospital guarantee"
              },
              {
                time: "Immediate",
                step: "Treatment Starts",
                desc: "Medical treatment begins immediately"
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-pink-200 transform -translate-x-1/2"></div>
                )}
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.time}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.step}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">24/7 Emergency Line</h4>
            <p className="text-pink-200">
              Dedicated emergency medical loan line available round the clock for urgent healthcare needs.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Hospital className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Direct Hospital Billing</h4>
            <p className="text-rose-200">
              Funds paid directly to hospitals, eliminating upfront payment requirements.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Family Coverage</h4>
            <p className="text-pink-200">
              Can be used for spouse, children, parents, and dependents' medical expenses.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-pink-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Patient Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                patient: "Mr. Kwame Boateng",
                treatment: "Emergency Appendectomy",
                loan: "₵3,200",
                quote: "The fast processing saved my life. I got surgery within hours of application."
              },
              {
                patient: "Mrs. Ama Mensah",
                treatment: "Maternity Complications",
                loan: "₵4,500",
                quote: "When complications arose during delivery, this loan ensured both my baby and I received proper care."
              },
              {
                patient: "Master Kofi Asare",
                treatment: "Pediatric Malaria Treatment",
                loan: "₵1,800",
                quote: "Our son needed immediate treatment. The medical loan covered everything without delay."
              }
            ].map((story, index) => (
              <div key={index} className="bg-pink-50 rounded-2xl p-6">
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 text-lg">{story.patient}</h4>
                  <div className="text-rose-600 font-medium">{story.treatment}</div>
                </div>
                <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="text-gray-600">Medical Loan:</span>
                  <span className="font-bold text-pink-700">{story.loan}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Ambulance className="w-6 h-6" />
                <p className="text-lg font-bold">24/7 Medical Emergency Line</p>
              </div>
              <p className="text-pink-100">For immediate medical loan assistance during emergencies</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-pink-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
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

export default HealthMedicalLoanDetails;