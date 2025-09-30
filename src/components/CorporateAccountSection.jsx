// components/CorporateAccountSection.jsx
import React from 'react';
import { 
  FileText, 
  UserCheck, 
  Home, 
  Receipt, 
  Shield,
  ArrowRight,
  Building,
  CreditCard,
  Users
} from 'lucide-react';

const CorporateAccountSection = () => {
  const requirements = [
    { icon: UserCheck, text: 'BVN' },
    { icon: FileText, text: 'CAC Documents' },
    { icon: Shield, text: 'KYC verification' },
    { icon: Home, text: 'Residence Details' },
    { icon: Receipt, text: 'Utility Bill' }
  ];

  const features = [
    { icon: CreditCard, text: 'Easy access to transactions' },
    { icon: Users, text: 'Payroll management' },
    { icon: Building, text: 'Business loans' }
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <Building className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Corporate Account
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our corporate banking solutions come with easy access to transactions, 
            payroll management, and business loans. Take advantage of tailored 
            financial solutions to help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Requirements */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600" />
              Requirements
            </h2>
            
            <div className="space-y-4">
              {requirements.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200 group"
                  >
                    <IconComponent className="w-5 h-5 text-blue-600 mr-4" />
                    <span className="text-gray-700 font-medium group-hover:text-blue-900">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Features & CTA */}
          <div className="space-y-8">
            {/* Features List */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What You Get
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <FeatureIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
              
              <p className="text-gray-600 mt-6 leading-relaxed">
                Take advantage of tailored financial solutions to help your business grow.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 text-white text-center">
              <p className="text-lg mb-6 opacity-90">
                transactions, payroll management, and business loans. Take advantage 
                of tailored financial solutions to help your business grow
              </p>
              
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto w-full max-w-sm">
                Open A Corporate Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateAccountSection;