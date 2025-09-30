import React from "react";  // ✅ Add this

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What Is A High-Yield Savings Account?',
      answer: 'A high-yield savings account offers a higher interest rate than a traditional savings account'
    },
    {
      question: 'What Are The Benefits Of Saving Money?',
      answer: 'Saving money provides financial security, helps you achieve your goals, builds an emergency fund, and allows you to take advantage of opportunities when they arise.'
    },
    {
      question: 'How Much Should I Save Each Month?',
      answer: 'Financial experts typically recommend saving at least 20% of your income each month. However, the ideal amount depends on your personal financial goals and circumstances.'
    },
    {
      question: 'Can I Withdraw Money Anytime?',
      answer: 'Yes, you can access your savings anytime through our online banking platform or mobile app. However, certain account types may have withdrawal limits or penalties.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">FAQS</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className={`font-semibold text-lg ${
                  openIndex === index ? 'text-red-600' : 'text-gray-900'
                }`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}