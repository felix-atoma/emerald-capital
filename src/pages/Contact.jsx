import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gray-700">Get In </span>
            <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-gray-600">
            We will contact you again within 24 hours after receiving your request.
          </p>
        </div>

        <div className="text-center mb-12">
          <div className="text-red-600 text-4xl font-bold tracking-wider mb-2">
            0 7 0 0 6 8 8 8 2 5 8
          </div>
          <div className="text-gray-600 text-xl tracking-wide">
            ( 0 7 0 0 M U T U A L T R U S T )
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email:</h3>
              <a href="mailto:mails@mutualtrustmfb.com" className="text-gray-700 hover:text-red-600 transition">
                mails@mutualtrustmfb.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">For Whistle Blowing:</h3>
              <a href="mailto:whistleict@mutualtrustmfbank.com" className="text-gray-700 hover:text-red-600 transition block">
                whistleict@mutualtrustmfbank.com
              </a>
              <a href="mailto:whistleicu@mutualtrustmfbank.com" className="text-gray-700 hover:text-red-600 transition block">
                whistleicu@mutualtrustmfbank.com
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Operations Desk</h3>
              <p className="text-gray-700">(+234) 909 544 4887,</p>
              <p className="text-gray-700">(+234) 909 544 4886</p>
              <p className="text-gray-700">Telegram: 08071895576</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Address:</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Address 1:</span> 797 Adetokunbo Ademola Crescent, Wuse 2, Abuja.
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Address 2:</span> 27, Mississippi Crescent, Maitama, Abuja.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute right-8 top-8 opacity-90">
              <div className="relative">
                <Mail className="w-32 h-32 text-blue-500 opacity-20" />
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
                  2
                </div>
              </div>
            </div>

            <p className="text-red-600 text-sm mb-6">
              The field is required mark as *
            </p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (option)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <input
                  type="url"
                  name="website"
                  placeholder="Your Website (option)"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-6 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              ></textarea>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label className="text-gray-700">
                  By submitting, I'm agreed to the{' '}
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    Terms & Conditions
                  </span>
                </label>
              </div>

              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-12 py-4 rounded-full transition transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
                >
                  Send Your Request
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[500px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6087936894845!2d-0.2179487!3d5.6219641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0x754f29c82b7d10b7!2sNew%20Town%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2s!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Accra New Town Map"
        ></iframe>
      </div>
    </div>
  );
}