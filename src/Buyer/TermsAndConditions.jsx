import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-20 lg:px-32 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">Terms and Conditions</h1>
      <p className="mb-6 text-sm text-gray-600 text-center">
       
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-black mb-2">1. Introduction</h2>
          <p>
            Welcome to our platform. By accessing or using our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-2">2. User Responsibilities</h2>
          <p>
            Users must provide accurate information and use the platform in a lawful manner. Any misuse, fraud, or abuse will result in account termination.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-2">3. Purchases and Payments</h2>
          <p>
            All purchases are final. No refunds will be issued after unlocking a lead unless there's a valid technical error from our side.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-2">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and data on this website are the property of the company and are protected by applicable laws.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-2">5. Changes to the Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be posted on this page and your continued use of the platform constitutes acceptance.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-2">6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, you can contact us at <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
