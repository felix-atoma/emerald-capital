import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin, Clock, Heart, Globe, MessageCircle } from 'lucide-react';
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
            
            {/* Removed the Kasa Na Yen section here */}
          </div>

          {/* Head Office Information */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mb-12 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center gap-4 mb-6">
              <MapPin className="w-8 h-8 text-yellow-300" />
              <h2 className="text-3xl font-bold">Head Office</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-lg mb-2">📍 Emerald Capital Building</p>
                <p className="text-yellow-300 font-semibold">Barekese Rd, Amanfrom, Kumasi, Ghana</p>
                <p className="mt-4">📮 Post Office Box 995, Santasi, Kumasi, Ghana</p>
                <p className="mt-2">📄 AK-634-5480</p>
              </div>
              <div>
                <p className="text-lg mb-2">📞 Main Phone Lines</p>
                <p className="text-2xl font-bold mb-2">+233 20 8070000</p>
                <p className="text-2xl font-bold mb-4">+233 244 595808</p>
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <p className="text-lg">WhatsApp: 0208070000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {/* Customer Support */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-l-4 border-green-600 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Customer Support</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">📞 Phone Lines:</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">0531929712</p>
                    <p className="font-semibold text-gray-800">0537420472</p>
                    <p className="font-semibold text-gray-800">0208203653</p>
                    <p className="font-semibold text-gray-800">0209877171</p>
                    <p className="font-semibold text-gray-800">0240776444</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">📧 Email:</p>
                  <a href="mailto:support@emeraldcapitalgh.com" className="font-semibold text-gray-800 hover:text-green-600 transition-colors block">
                    support@emeraldcapitalgh.com
                  </a>
                  <a href="mailto:emeraldcapitalgh@gmail.com" className="font-semibold text-gray-800 hover:text-green-600 transition-colors block">
                    emeraldcapitalgh@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Digital Contacts */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-l-4 border-yellow-500 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Digital Channels</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-1">📧 General Email</p>
                  <a href="mailto:info@emeraldcapitalgh.com" className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    info@emeraldcapitalgh.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">🌐 Website</p>
                  <a href="https://www.emeraldcapitalgh.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    www.emeraldcapitalgh.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">💬 WhatsApp Business</p>
                  <p className="text-lg font-semibold text-gray-800">0208070000</p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-l-4 border-red-600 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Operating Hours</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 mb-2">🏢 Office Walk-in</p>
                  <p className="text-lg font-semibold text-gray-800">Monday - Friday</p>
                  <p className="text-lg font-semibold text-gray-800">8:00 AM – 5:00 PM</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 mb-2">🌐 Online & Internet Banking</p>
                  <p className="text-lg font-semibold text-gray-800">Monday - Sunday</p>
                  <p className="text-lg font-semibold text-gray-800">24/7 Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Offices */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white mb-16 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <MapPin className="w-8 h-8 text-yellow-300" />
              <h2 className="text-3xl font-bold">Regional Offices & Managers</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { region: 'Ashanti', manager: 'Mr. Christian Yaw Boateng', phone: '+233 544860573', email: 'ashanti@emeraldcapitalgh.com' },
                { region: 'Western North', manager: 'Mrs. Beatrice Bannor', phone: '+233 241737302', email: 'westernnorth@emeraldcapitalgh.com' },
                { region: 'Bono, Bono East & Ahafo', manager: 'Mrs. Helena Boamah', phone: '+233 247051745', email: 'bono@emeraldcapitalgh.com' },
                { region: 'Central & Western', manager: 'Ms. Amazing Nana Ekua Abbey', phone: '+233 591594248', email: 'central@emeraldcapitalgh.com' },
                { region: 'Greater Accra, Eastern & Volta', manager: 'Mr. Martin Jones-Arthur', phone: '+233 24317070', email: 'accra@emeraldcapitalgh.com' },
                { region: 'Volta, Oti & North East', manager: 'Ms. Esther Takyi', phone: '+233 557596494', email: 'volta@emeraldcapitalgh.com' },
                { region: 'Northern, Savanna, Upper East & Upper West', manager: 'Mrs. Salma Issah', phone: '+233 244525034', email: 'northern@emeraldcapitalgh.com' },
                { region: 'Diaspora', manager: 'Odiasempa Asamoah Koranteng', phone: '+44 7506181029', email: 'diaspora@emeraldcapitalgh.com' },
              ].map((office, index) => (
                <div key={index} className="bg-green-500 rounded-xl p-6 hover:bg-green-400 transition-colors">
                  <h4 className="font-bold text-lg mb-2">{office.region}</h4>
                  <p className="text-green-100 mb-3">{office.manager}</p>
                  <div className="space-y-1">
                    <p className="text-yellow-300 font-semibold">{office.phone}</p>
                    <a href={`mailto:${office.email}`} className="text-green-100 hover:text-white transition-colors text-sm">
                      {office.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Departments */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border-2 border-yellow-400">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Key Departments</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Finance / Accounts', email: 'finance@emeraldcapitalgh.com' },
                { name: 'Human Resources', email: 'hr@emeraldcapitalgh.com' },
                { name: 'Legal / Compliance', email: 'compliance@emeraldcapitalgh.com' },
                { name: 'Marketing & Business Development', email: 'marketing@emeraldcapitalgh.com' },
                { name: 'Digital & IT Support', email: 'techsupport@emeraldcapitalgh.com' },
              ].map((dept, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-yellow-50 transition-colors border border-gray-200">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">{dept.name}</h4>
                  <a href={`mailto:${dept.email}`} className="text-green-600 hover:text-green-800 font-semibold transition-colors">
                    {dept.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-8 text-white mb-16 shadow-2xl">
            <h3 className="text-2xl font-bold text-center mb-8">Social Media & Messaging</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { platform: 'LinkedIn', handle: 'linkedin.com/company/emeraldcapital', icon: '🔗' },
                { platform: 'Twitter', handle: '@EmeraldCapitalGH', icon: '🐦' },
                { platform: 'Facebook', handle: 'facebook.com/EmeraldCapitalGH', icon: '📘' },
                { platform: 'Instagram', handle: '@EmeraldCapital', icon: '📸' },
                { platform: 'WhatsApp', handle: '+233 208070000', icon: '💬' },
                { platform: 'TikTok', handle: 'Emeraldcapital', icon: '🎵' },
              ].map((social, index) => (
                <div key={index} className="bg-gray-700 rounded-xl p-6 text-center hover:bg-gray-600 transition-colors">
                  <div className="text-3xl mb-3">{social.icon}</div>
                  <p className="font-semibold mb-2">{social.platform}</p>
                  <p className="text-gray-300 text-sm">{social.handle}</p>
                </div>
              ))}
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912085787!2d-1.6319024!3d6.5248974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb93c6e7e7c7c3%3A0x4a4a4a4a4a4a4a4a!2sEmerald%20Capital%20Building%2C%20Barekese%20Rd%2C%20Amanfrom%2C%20Kumasi%2C%20Ghana!5e0!3m2!1sen!2s!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Emerald Capital Head Office Location"
            className="filter grayscale(0.3) contrast(1.1)"
          ></iframe>
          
          {/* Map Overlay Info */}
          <div className="absolute bottom-4 left-4 z-20 bg-white rounded-2xl p-4 shadow-2xl max-w-xs">
            <h3 className="font-bold text-green-700 mb-2">📍 Head Office Location</h3>
            <p className="text-sm text-gray-700">
              Emerald Capital Building<br/>
              Barekese Rd, Amanfrom<br/>
              Kumasi, Ghana<br/>
              <span className="text-yellow-600 font-semibold">Open Mon-Fri: 8:00 AM - 5:00 PM</span>
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
            Thank you for choosing Emerald Capital Microfinance. We're committed to your financial growth! 💫
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;