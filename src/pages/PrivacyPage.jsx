import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-sm rounded-lg p-8 md:p-12">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-gray-700">Privacy </span>
          <span className="text-red-600">Policy</span>
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-700">
          {/* Introduction */}
          <p className="leading-relaxed">
            At Emerald Capital (hereinafter referred to as Emerald Capital), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Emerald Capital and how we use it. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Emerald Capital. This policy does not apply to any information collected offline or via channels other than this website.
          </p>

          {/* Consent Section */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Consent</h2>
            <p className="leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Information we collect</h2>
            <p className="leading-relaxed">
              The personal information you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account with us, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">How we use your information</h2>
            <p className="leading-relaxed mb-2">
              We use the information we collect in various ways, including:
            </p>
            <div className="space-y-1">
              <p className="leading-relaxed">Provide, operate, and maintain our website</p>
              <p className="leading-relaxed">Improve, personalize, and expand our website</p>
              <p className="leading-relaxed">Understand and analyze how you use our website</p>
              <p className="leading-relaxed">Develop new products, services, features, and functionality</p>
              <p className="leading-relaxed">
                Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
              </p>
              <p className="leading-relaxed">Send you emails</p>
              <p className="leading-relaxed">Find and prevent fraud</p>
            </div>
          </div>

          {/* Children's Information */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Children's Information</h2>
            <p className="leading-relaxed">
              Another part of our priority is added protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activities. Emerald Capital does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </div>

          {/* Where We Store Your Information */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Where We Store Your Information</h2>
            <p className="leading-relaxed">
              All Personal Information you provide to us has been stored on our secure servers as well as secure physical locations and cloud infrastructure (where applicable). The data that we collect from you may be transferred to and stored at a destination outside Nigeria. Whenever your information is transferred to another location, we will take all necessary steps to ensure that your data is handled securely and by this privacy policy.
            </p>
          </div>

          {/* Maintaining Accurate Information */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Maintaining Accurate Information</h2>
            <p className="leading-relaxed">
              Keeping your account information accurate and up to date is very important. You have access to your account information, which includes your contact information, account balances, transactions, and similar information through various means, such as account statements, SMS Banking, Social Media Banking, and Internet Banking. If you discover any inaccuracies in your personal information, please promptly notify us, via our branch network or Contact Centre, and provide the required documentary evidence, to enable us to implement the necessary updates or changes.
            </p>
          </div>

          {/* Promotional Messages */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Promotional Messages</h2>
            <p className="leading-relaxed">
              Emerald Capital may sometimes contact you with products or services that we think may be of interest to you. If you don't want to receive such promotional materials from us, you can opt-out at any time by sending an email to info@emeraldcapital.com
            </p>
          </div>

          {/* Privacy Policy Changes */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Privacy Policy Changes</h2>
            <p className="leading-relaxed">
              This policy may be revised on an ad-hoc basis to reflect the legal, regulatory and operating environment and such revised versions will automatically become applicable to you. We will post any revisions we make to our Privacy Policy on this page and such a revised policy becomes effective at the time it is posted. We also encourage you to check this page from time to time for updates to this policy.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">CONTACT</h2>
            <p className="leading-relaxed">
              If you have additional questions, comments, or require more information about our Privacy Policy, you are welcome to address such to
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;