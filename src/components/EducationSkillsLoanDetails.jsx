import React from 'react';
import { CheckCircle, GraduationCap, BookOpen, Target, Zap, Users, Globe, Award, Clock, DollarSign } from 'lucide-react';

const EducationSkillsLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Education & Skills Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finance your educational journey with our specialized loan program. 
            From tuition fees to vocational training, we support your pursuit of 
            knowledge and skill development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-indigo-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Knowledge Investment</h3>
                  <p className="text-indigo-200">For Academic & Vocational Growth</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-indigo-200 mb-2">Loan Details</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵100 - ₵3K</div>
                    <div className="text-indigo-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">6-24</div>
                    <div className="text-indigo-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Why Choose This Loan?</h4>
                {[
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Low Interest Rates",
                    description: "Special reduced rates for education financing"
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Grace Period",
                    description: "Start repayment after completing studies"
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Co-signer Option",
                    description: "Parent or guardian can co-sign the loan"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Study Abroad",
                    description: "Support for international education programs"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-indigo-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
              <div className="space-y-4">
                {[
                  "Ghanaian citizen aged 16+",
                  "Admitted to accredited institution",
                  "Valid admission letter",
                  "Valid national ID or birth certificate",
                  "Proof of guardianship (if under 18)",
                  "Academic transcripts/records",
                  "Course/program details",
                  "Fee structure from institution"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Programs Section */}
          <div className="space-y-8">
            {/* Covered Programs */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Programs We Cover</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🎓", title: "University", desc: "Undergraduate degrees" },
                  { icon: "🏫", title: "College", desc: "Diploma programs" },
                  { icon: "🔧", title: "Vocational", desc: "Technical training" },
                  { icon: "💻", title: "IT Courses", desc: "Coding, certifications" },
                  { icon: "🍳", title: "Culinary", desc: "Chef training schools" },
                  { icon: "✂️", title: "Beauty School", desc: "Cosmetology courses" },
                  { icon: "🚗", title: "Driving School", desc: "Professional licenses" },
                  { icon: "📚", title: "Short Courses", desc: "Professional development" },
                ].map((program, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-indigo-50 rounded-xl">
                    <div className="text-2xl mb-2">{program.icon}</div>
                    <div className="font-bold text-gray-900">{program.title}</div>
                    <div className="text-sm text-gray-600">{program.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
           
            {/* Covered Expenses */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Covered Expenses</h3>
              <div className="space-y-3">
                {[
                  "Tuition and school fees",
                  "Accommodation/hostel fees",
                  "Textbooks and study materials",
                  "Examination fees",
                  "Laboratory/workshop fees",
                  "Student insurance",
                  "Laptop/tablet purchase",
                  "Transportation allowance"
                ].map((expense, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span>{expense}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Apply for Education Loan
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Study-Focused Repayment</h4>
            <p className="text-indigo-200">
              Start repayment only after completing your studies with our flexible grace period.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Academic Performance</h4>
            <p className="text-purple-200">
              Maintain good grades and qualify for interest rate reductions on your loan.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Family Support</h4>
            <p className="text-indigo-200">
              Parents or guardians can co-sign to help students build credit history.
            </p>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 shadow-xl border border-indigo-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kwame Mensah",
                program: "Computer Science Degree",
                loan: "₵2,500",
                result: "Now employed as software developer at tech firm"
              },
              {
                name: "Ama Ofori",
                program: "Culinary Arts Diploma",
                loan: "₵1,800",
                result: "Opened successful restaurant, employs 6 people"
              },
              {
                name: "Kofi Asante",
                program: "Auto Mechanics Training",
                loan: "₵1,200",
                result: "Started own repair shop, 50+ regular customers"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-indigo-600 font-medium">{story.program}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Loan Amount:</span>
                    <span className="font-bold text-indigo-700">{story.loan}</span>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Current Status:</div>
                    <div className="font-bold text-green-600">{story.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-indigo-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Application Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Document Preparation",
                desc: "Gather admission letter, fee structure, and ID documents"
              },
              {
                step: "02",
                title: "Application Submission",
                desc: "Complete loan application form with program details"
              },
              {
                step: "03",
                title: "Approval & Disbursement",
                desc: "Get approved and funds sent directly to institution"
              },
              {
                step: "04",
                title: "Study & Repayment",
                desc: "Focus on studies, start repayment after completion"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <p className="text-lg font-bold mb-2">Need guidance on education financing?</p>
              <p className="text-indigo-100">Our education loan specialists are here to help</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-indigo-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Education Desk
              </a>
              <a 
                href="mailto:educationloans@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSkillsLoanDetails;