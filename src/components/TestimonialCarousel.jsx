
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Whenever I talk about Mutual Trust MFB in my office, my colleagues will say I'm running an advert for the bank but that's not so. I had rent problems and the money I was expecting from these get rich-quick schemes never materialized. I mean neverrrr! But Mutual Trust MFB came to my rescue.",
      name: "R. Obinna",
      avatar: "RO"
    },
    {
      id: 2,
      rating: 5,
      text: "I no need go their office, still dey road, to God be the glory. Thank you Mutual Trust MFB for making banking easy and accessible. Your service is top-notch!",
      name: "Fejiro O.",
      avatar: "FO"
    },
    {
      id: 3,
      rating: 5,
      text: "The loan disbursement process was incredibly fast. I applied in the morning and got credited by afternoon. Mutual Trust MFB truly understands urgency and customer needs.",
      name: "Amaka C.",
      avatar: "AC"
    },
    {
      id: 4,
      rating: 5,
      text: "Best banking experience ever! The customer service team is always ready to help, and the mobile app makes everything so convenient. Highly recommended!",
      name: "Biodun T.",
      avatar: "BT"
    },
    {
      id: 5,
      rating: 5,
      text: "I've been with Mutual Trust MFB for 3 years now and I have never regretted my decision. Their savings plans have helped me build a solid financial foundation.",
      name: "Chidinma N.",
      avatar: "CN"
    },
    {
      id: 6,
      rating: 5,
      text: "Professional, reliable, and trustworthy. That's how I describe Mutual Trust MFB. They've supported my business growth with their excellent corporate banking services.",
      name: "Samuel A.",
      avatar: "SA"
    },
    {
      id: 7,
      rating: 5,
      text: "The investment options are fantastic! I'm seeing real returns on my money. The financial advisors are knowledgeable and always willing to guide you.",
      name: "Grace M.",
      avatar: "GM"
    },
    {
      id: 8,
      rating: 5,
      text: "Zero stress banking! From account opening to daily transactions, everything is smooth. Mutual Trust MFB has set the standard for microfinance banks.",
      name: "Emeka J.",
      avatar: "EJ"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Changed to 3 seconds for better readability

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Clients Reviews</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Emerald Capital: Trusted by thousands worldwide, endorsed by industry leaders.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl min-h-96 flex flex-col justify-between transition-all duration-500">
            {/* Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <div className="flex-1 mb-8">
              <p className="text-white text-xl leading-relaxed">
                {currentTestimonial.text}
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                {currentTestimonial.avatar}
              </div>
              <div>
                <p className="text-white font-semibold text-lg">{currentTestimonial.name}</p>
                <p className="text-gray-400">Customer</p>
              </div>
            </div>


          </div>



          {/* Side Preview Cards */}
          <div className="hidden lg:block">
            {/* Previous Card Preview */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-64 opacity-30 pointer-events-none">
              <div className="bg-gray-200 rounded-2xl p-6 shadow-lg">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mb-3" />
                <p className="text-gray-600 text-sm line-clamp-3">
                  {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].text}
                </p>
              </div>
            </div>

            {/* Next Card Preview */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-64 opacity-30 pointer-events-none">
              <div className="bg-gray-200 rounded-2xl p-6 shadow-lg">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mb-3" />
                <p className="text-gray-600 text-sm line-clamp-3">
                  {testimonials[(currentIndex + 1) % testimonials.length].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;