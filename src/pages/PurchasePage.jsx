import React from 'react';
import { ShoppingCart, Home, Zap, CheckCircle, Star, Truck, Shield, CreditCard, ArrowRight } from 'lucide-react';

export default function ApplianceCataloguePage() {
  const applianceCategories = [
    {
      name: 'Kitchen Appliances',
      icon: '🍳',
      items: ['Refrigerators', 'Microwaves', 'Blenders', 'Ovens', 'Cookers']
    },
    {
      name: 'Home Entertainment',
      icon: '📺',
      items: ['Televisions', 'Sound Systems', 'Home Theaters', 'Gaming Consoles']
    },
    {
      name: 'Laundry & Cleaning',
      icon: '🧺',
      items: ['Washing Machines', 'Dryers', 'Vacuum Cleaners', 'Ironing Systems']
    },
    {
      name: 'Air Conditioning',
      icon: '❄️',
      items: ['AC Units', 'Fans', 'Air Purifiers', 'Heaters']
    },
    {
      name: 'Electronics',
      icon: '💻',
      items: ['Laptops', 'Smartphones', 'Tablets', 'Printers']
    },
    {
      name: 'Furniture',
      icon: '🛋️',
      items: ['Sofas', 'Beds', 'Dining Sets', 'Office Chairs']
    }
  ];

  const handleViewCatalogue = () => {
    window.location.href = 'https://catalogue.sikanii.com/Y%2FNkZRMzZ%2F2WE2KNL7ApXw%3D%3D/listing';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Home className="w-10 h-10" />
            <Zap className="w-10 h-10" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Home Appliances Catalogue
          </h1>
          <p className="text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Premium home appliances with flexible payment plans
          </p>
          
          <button
            onClick={handleViewCatalogue}
            className="group bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl text-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-3"
          >
            <ShoppingCart className="w-6 h-6" />
            Browse All Appliances
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: 'Free Delivery',
                desc: 'Nationwide delivery included'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: '1-Year Warranty',
                desc: 'Full warranty on all products'
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: 'Flexible Payments',
                desc: 'Pay in installments'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Premium Brands',
                desc: 'Top quality appliances'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Shop By Category
            </h2>
            <p className="text-gray-600 text-lg">
              Browse our wide selection of home appliances
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applianceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Brands */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Brands
            </h2>
            <p className="text-gray-600">
              Leading appliance manufacturers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Samsung', 'LG', 'Hisense', 'Midea', 'Tecno', 'iPhone'].map((brand, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-2">
                    {brand === 'Samsung' ? '📱' : 
                     brand === 'LG' ? '🖥️' : 
                     brand === 'Hisense' ? '📺' : 
                     brand === 'Midea' ? '🍳' : 
                     brand === 'Tecno' ? '💻' : '📱'}
                  </div>
                  <span className="font-semibold text-gray-900">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main CTA */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready to Upgrade Your Home?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Browse our full catalogue of premium home appliances with easy payment options
          </p>
          
          <button
            onClick={handleViewCatalogue}
            className="group bg-white text-blue-600 font-bold py-5 px-16 rounded-2xl text-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-3"
          >
            <ShoppingCart className="w-6 h-6" />
            View Full Appliance Catalogue
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <p className="text-sm text-blue-200 mt-6">
            You'll be redirected to our secure appliance catalogue
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-4">
            Need help choosing appliances? Contact our sales team
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span className="font-semibold">020 807 0000</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span className="font-semibold">sales@emeraldcapitalgh.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🕒</span>
              <span className="font-semibold">Mon-Sat: 8AM-6PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}