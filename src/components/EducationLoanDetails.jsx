import React from 'react';
import { CheckCircle, Users, TrendingUp, GraduationCap, Target, Award, BookOpen, Book, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Education Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Invest in your future with our comprehensive education financing solutions. 
            From undergraduate studies to professional certifications, we support your 
            academic journey with flexible terms and competitive rates designed for students.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-emerald-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">ScholarFund Program</h3>
                  <p className="text-emerald-200">For Academic Excellence</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-emerald-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵2K - ₵50K</div>
                    <div className="text-emerald-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">12-72</div>
                    <div className="text-emerald-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Program Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-emerald-200 mb-2">Program Impact</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">9,500+</div>
                    <div className="text-emerald-200 text-sm">Students Funded</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-300">95%</div>
                    <div className="text-emerald-200 text-sm">Graduation Rate</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Education Loan Advantages</h4>
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Deferred Payments",
                    description: "Start repaying after graduation or course completion"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Lower Interest Rates",
                    description: "Special student rates with flexible terms"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Academic Support",
                    description: "Scholarships info and study abroad guidance"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "All Institutions",
                    description: "Local and international schools covered"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-teal-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-teal-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-emerald-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {[
                  "Ghanaian citizen or resident",
                  "Admission letter from accredited institution",
                  "Valid national ID card",
                  "Academic transcripts or certificates",
                  "Proof of tuition and fee structure",
                  "Guarantor (parent or guardian)",
                  "Proof of address",
                  "Bank account or mobile money"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Education Types Section */}
          <div className="space-y-8">
            {/* Education Categories */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Covered Education Programs</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🎓", title: "Undergraduate", desc: "Bachelor's degrees" },
                  { icon: "📚", title: "Postgraduate", desc: "Masters, PhD programs" },
                  { icon: "💼", title: "Professional", desc: "MBA, law, medicine" },
                  { icon: "🔧", title: "Vocational", desc: "Technical training" },
                  { icon: "💻", title: "IT & Tech", desc: "Coding, certifications" },
                  { icon: "🌍", title: "Study Abroad", desc: "International programs" },
                  { icon: "📜", title: "Certifications", desc: "Professional licenses" },
                  { icon: "🎨", title: "Creative Arts", desc: "Design, music, film" },
                ].map((program, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-xl">
                    <div className="text-2xl mb-2">{program.icon}</div>
                    <div className="font-bold text-gray-900">{program.title}</div>
                    <div className="text-sm text-gray-600">{program.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
           

            {/* Support Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Student Support Services</h3>
              <div className="space-y-3">
                {[
                  "Academic counseling and guidance",
                  "Study abroad application support",
                  "Scholarship information and resources",
                  "Direct payment to institutions",
                  "Grace period after graduation",
                  "Flexible repayment during studies",
                  "Career guidance and job placement",
                  "Student loan refinancing options"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              to="/applyforloanpage"
              className="block"
              aria-label="Apply for Education Loan"
            >
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-500/50">
                Apply for Education Loan
              </button>
            </Link>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 shadow-xl border border-emerald-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Student Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kwabena Osei",
                program: "MBA - University of Ghana",
                loan: "₵35,000",
                before: "Mid-level manager, stagnant career",
                after: "Senior executive, 3x salary, leadership role"
              },
              {
                name: "Akua Frimpong",
                program: "Medical School - KNUST",
                loan: "₵45,000",
                before: "Couldn't afford medical school",
                after: "Doctor, serving communities, saving lives"
              },
              {
                name: "Yaw Mensah",
                program: "Software Engineering - UK",
                loan: "₵40,000",
                before: "Basic IT skills, low income",
                after: "Senior developer, remote work, 5x income"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <div className="text-emerald-600 font-medium text-sm">{story.program}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Before:</div>
                      <div className="font-medium">{story.before}</div>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">After:</div>
                      <div className="font-medium text-teal-600">{story.after}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Education Loan:</span>
                    <span className="font-bold text-emerald-700">{story.loan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Components */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ScholarFund Program Components
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                component: "Flexible Finance",
                icon: "💰",
                description: "Cover tuition, fees, books, and living costs"
              },
              {
                component: "Grace Period",
                icon: "⏰",
                description: "Start repaying after graduation"
              },
              {
                component: "Career Support",
                icon: "🎯",
                description: "Job placement and career guidance"
              },
              {
                component: "Study Resources",
                icon: "📚",
                description: "Scholarship info and academic support"
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

        {/* Education Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Cover
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                area: "Tuition Fees", 
                impact: "Full or partial tuition coverage",
                icon: "🎓" 
              },
              { 
                area: "Books & Materials", 
                impact: "Textbooks, supplies, equipment",
                icon: "📚" 
              },
              { 
                area: "Accommodation", 
                impact: "Campus housing or rent",
                icon: "🏠" 
              },
              { 
                area: "Living Expenses", 
                impact: "Food, transport, daily costs",
                icon: "🍽️" 
              },
              { 
                area: "Technology", 
                impact: "Laptop, software, devices",
                icon: "💻" 
              },
              { 
                area: "Study Abroad", 
                impact: "International programs, visa fees",
                icon: "✈️" 
              },
              { 
                area: "Certification Exams", 
                impact: "Professional licensing tests",
                icon: "📜" 
              },
              { 
                area: "Research Projects", 
                impact: "Thesis, dissertation funding",
                icon: "🔬" 
              },
            ].map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
                <div className="text-2xl mb-3">{impact.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{impact.area}</div>
                <div className="text-sm text-gray-600">{impact.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Study Now, Pay Later</h4>
            <p className="text-emerald-200">
              Focus on your studies with deferred payments. Start repaying 6 months after graduation.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Lower Student Rates</h4>
            <p className="text-teal-200">
              Special interest rates for students with flexible terms and payment plans.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Complete Coverage</h4>
            <p className="text-emerald-200">
              We cover tuition, books, accommodation, and living expenses for a complete package.
            </p>
          </div>
        </div>

        {/* Education Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Ready to Start Your Educational Journey?</p>
              </div>
              <p className="text-emerald-100">Connect with our education loan specialists today</p>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                to="/applyforloanpage"
                className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                aria-label="Apply for Education Loan - Call to Action"
              >
                Apply for Education Loan
              </Link>
              <a 
                href="mailto:education@emeraldcapitalgh.com" 
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

export default EducationLoanDetails;