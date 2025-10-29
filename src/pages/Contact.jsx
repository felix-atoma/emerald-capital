import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { contactAPI } from '../services/api';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreed) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);

    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        website: formData.website || '',
        message: formData.message,
        agreedToTerms: formData.agreed,
      };

      await contactAPI.submitMessage(contactData);

      toast.success('Medaase! Your message has been sent successfully ✅');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        agreed: false,
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Yoo! Failed to send message ❌'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Ghana-themed color palette
  const ghanaColors = {
    red: '#CF0921',
    yellow: '#FCD20F',
    green: '#006B3D',
    black: '#000000',
    gold: '#D4AF37'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-red-50">
      {/* Toast Renderer */}
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#000',
            border: `2px solid ${ghanaColors.green}`,
            borderRadius: '12px',
            fontWeight: '500',
          },
        }}
      />

      {/* Header Section with Ghana Flag Inspiration */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 h-2"></div>
        
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-4 h-8 bg-red-600 rounded-l-full"></div>
                <div className="w-4 h-8 bg-yellow-400"></div>
                <div className="w-4 h-8 bg-green-600 rounded-r-full"></div>
                <Heart className="w-8 h-8 text-red-600 animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 via-black to-green-600 bg-clip-text text-transparent">
              Kasa Na Yen
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              "Talk to Us" - We're here to serve you with the warmth and hospitality Ghana is known for. 
              Akwaaba to Emerald Capital Microfinance!
            </p>
          </div>

          {/* Emergency Contact Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white text-center mb-12 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Phone className="w-8 h-8 animate-pulse" />
              <h2 className="text-2xl font-bold">Emergency Contact Line</h2>
            </div>
            <div className="text-3xl font-black tracking-wider mb-2">
              0 5 5 3 3 2 2 1 1 0
            </div>
            <div className="text-yellow-300 text-lg font-semibold">
              ( 0 5 5 3 E M E R A L D C A P I T A L )
            </div>
            <p className="text-red-100 mt-2">Available 24/7 for urgent banking needs</p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {/* Main Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-l-4 border-green-600 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">General Enquiries</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-1">Main Line</p>
                  <p className="text-lg font-semibold text-gray-800">0302 123 456</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Customer Care</p>
                  <p className="text-lg font-semibold text-gray-800">0500 123 456</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">WhatsApp Business</p>
                  <p className="text-lg font-semibold text-gray-800">0550 123 456</p>
                </div>
              </div>
            </div>

            {/* Email Contacts */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-l-4 border-yellow-500 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Digital Channels</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-1">General Inquiries</p>
                  <a href="mailto:info@emeraldcapitalgh.com" className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    info@emeraldcapitalgh.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Whistle Blowing</p>
                  <a href="mailto:integrity@emeraldcapitalgh.com" className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    integrity@emeraldcapitalgh.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Support</p>
                  <a href="mailto:support@emeraldcapitalgh.com" className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    support@emeraldcapitalgh.com
                  </a>
                </div>
              </div>
            </div>

            {/* Branches & Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-l-4 border-red-600 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Visit Us</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-1">Working Hours</p>
                  <p className="text-lg font-semibold text-gray-800">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-lg font-semibold text-gray-800">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Emergency Services</p>
                  <p className="text-lg font-semibold text-gray-800">24/7 Digital Banking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Locations */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white mb-16 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <MapPin className="w-8 h-8 text-yellow-300" />
              <h2 className="text-3xl font-bold">Our Branches Across Ghana</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-500 rounded-xl p-6 hover:bg-green-400 transition-colors">
                <h4 className="font-bold text-lg mb-2">Accra Main</h4>
                <p className="text-green-100">Ring Road Central, Opposite Accra Mall</p>
                <p className="text-yellow-300 font-semibold mt-2">0302 111 222</p>
              </div>
              <div className="bg-green-500 rounded-xl p-6 hover:bg-green-400 transition-colors">
                <h4 className="font-bold text-lg mb-2">Kumasi Branch</h4>
                <p className="text-green-100">Adum, Kejetia Roundabout</p>
                <p className="text-yellow-300 font-semibold mt-2">0322 111 333</p>
              </div>
              <div className="bg-green-500 rounded-xl p-6 hover:bg-green-400 transition-colors">
                <h4 className="font-bold text-lg mb-2">Takoradi Branch</h4>
                <p className="text-green-100">Market Circle, Sekondi-Takoradi</p>
                <p className="text-yellow-300 font-semibold mt-2">0312 111 444</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border-2 border-yellow-400">
              {/* Ghana Flag Decoration */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-green-600"></div>
              
              <div className="absolute right-8 top-8 opacity-90">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                    <Mail className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg border-2 border-white">
                    💬
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-red-600 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Fields marked with * are required
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-yellow-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="url"
                      name="website"
                      placeholder="Your Website (optional)"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-yellow-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="How can we help you? Tell us everything... *"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-red-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-2xl border border-yellow-200">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                  />
                  <label className="text-gray-700 text-sm">
                    Medaase for considering Emerald Capital! By submitting this form, 
                    I agree to the{' '}
                    <span className="text-green-600 cursor-pointer hover:underline font-semibold">
                      Terms & Conditions
                    </span>{' '}
                    and consent to being contacted by our customer service team. 
                    Yɛbɛhyia bio! (We'll see you again!)
                  </label>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
                    } text-white font-bold px-16 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-3 text-lg`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Your Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-gray-600 mt-4 text-sm">
                    We respond within 2 business hours. Akwaaba!
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20 z-10"></div>
        <div className="w-full h-[500px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6087936894845!2d-0.2179487!3d5.6219641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0x754f29c82b7d10b7!2sAccra%20Central%2C%20Ghana!5e0!3m2!1sen!2s!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Emerald Capital Ghana Branches Map"
            className="filter grayscale(0.3) contrast(1.1)"
          ></iframe>
          
          {/* Map Overlay Info */}
          <div className="absolute bottom-4 left-4 z-20 bg-white rounded-2xl p-4 shadow-2xl max-w-xs">
            <h3 className="font-bold text-green-700 mb-2">📍 Our Main Branch</h3>
            <p className="text-sm text-gray-700">
              Ring Road Central, Accra<br/>
              Near Accra Mall<br/>
              <span className="text-yellow-600 font-semibold">Open 8:00 AM - 5:00 PM</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-gradient-to-r from-red-600 via-black to-green-600 text-white text-center py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg font-semibold mb-2">
            "Nyimpa nyinaa yɛ wo yɔnko" - Every person is your neighbor
          </p>
          <p className="text-yellow-300">
            Thank you for choosing Emerald Capital Microfinance Bank. We're committed to your financial growth! 💫
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;