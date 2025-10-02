import React, { useState, useEffect } from 'react';

export default function CSRPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-orange-500 overflow-hidden flex items-center">
        {/* Animated decorative elements */}
        <div className="absolute inset-0">
          {/* Half circle */}
          <div 
            className={`absolute top-1/3 right-1/4 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: 'pulse 4s ease-in-out infinite' }}
          >
            <div className="w-20 h-20 bg-white rounded-full"></div>
          </div>

          {/* Outline circle */}
          <div 
            className={`absolute top-1/4 right-1/3 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <div className="w-16 h-16 border-2 border-white rounded-full"></div>
          </div>

          {/* Blue dots */}
          <div 
            className={`absolute top-1/2 right-1/4 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: 'orbit1 8s ease-in-out infinite' }}
          >
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>

          <div 
            className={`absolute top-2/3 right-1/3 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: 'orbit2 7s ease-in-out infinite' }}
          >
            <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
          </div>

          {/* Cyan dot */}
          <div 
            className={`absolute top-3/4 right-1/4 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: 'float 5s ease-in-out infinite' }}
          >
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
          </div>

          {/* Light blue circle */}
          <div 
            className={`absolute top-1/2 right-1/5 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: 'pulse 3s ease-in-out infinite' }}
          >
            <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
          </div>

          {/* Small blue dot top right */}
          <div 
            className={`absolute top-1/3 right-1/6 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: 'orbit3 6s ease-in-out infinite' }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h1 className="text-7xl font-bold text-white leading-tight mb-4">
            Corporate Social
          </h1>
          <h2 className="text-7xl font-light italic text-white leading-tight">
            Responsibility
          </h2>
          <h3 className="text-7xl font-light italic text-white leading-tight">
            (CSR)
          </h3>
          <div className="w-32 h-1 bg-white mt-8"></div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes orbit1 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(20px, -20px); }
          }
          
          @keyframes orbit2 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-15px, 15px); }
          }
          
          @keyframes orbit3 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(10px, 10px); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
        `}</style>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering Communities, Transforming Lives
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Mutual Trust mfBank, we believe in building more than financial stability; we are committed to creating meaningful and lasting change in the communities we serve. Our Corporate Social Responsibility (CSR) efforts are focused on empowering lives, fostering sustainable growth, and supporting communities across Nigeria to realize their fullest potential.
            </p>
          </div>

          {/* CSR Pillars */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our CSR Pillars
            </h2>

            {/* Pillar 1 */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                1. Financial Inclusion & Literacy
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work to bridge the gap in financial inclusion by empowering underserved communities with the knowledge and tools they need to make informed financial decisions. Through workshops, training programs, and outreach initiatives, we're bringing financial literacy to the forefront, ensuring that more Nigerians have access to banking services, savings plans, and responsible lending.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2. Community Development & Empowerment
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mutual Trust Microfinance Bank partners with local organizations and leaders to support community-driven projects that improve lives. From funding small businesses and cooperative societies to investing in infrastructure, education, and healthcare, we aim to create resilient communities where everyone has a chance to thrive.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                3. Youth & Women Empowerment
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that empowering youth and women is key to building a brighter future. Our programs provide financial support, training, and mentorship for young entrepreneurs and female business owners, enabling them to start or scale their businesses with confidence. By investing in youth and women, we are investing in the prosperity of generations to come.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                4. Environmental Sustainability
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to a better planet drives us to implement sustainable practices in our banking operations and community engagements. From supporting eco-friendly agriculture projects to promoting environmental awareness, we strive to minimize our footprint and advocate for a cleaner, greener Nigeria.
              </p>
            </div>
          </div>

          {/* Making a Difference */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Making a Difference Together
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As we continue to grow, our dedication to impactful CSR initiatives remains at the heart of our mission. We are grateful to our clients, partners, and communities for joining us on this journey to create a better tomorrow. Together, we are not only changing lives but also shaping a sustainable future for all.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contact Us to Get Involved
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Interested in partnering with us or learning more about our CSR initiatives? Contact us to discover how we can work together to create positive change.
            </p>
            
            <button className="bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </button>

            <p className="text-gray-600 italic mt-8 leading-relaxed">
              At Mutual Trust Microfinance Bank, we see our role as more than a financial service provider. We are a partner in progress, a force for good, and a catalyst for positive transformation. Join us in our mission to make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}