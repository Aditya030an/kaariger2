"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-10 px-6 md:px-20 text-slate-800">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#19273A] mb-2">
          Privacy Policy
        </h1>
        {/* <p className="text-center text-sm text-slate-500 mb-8">
          Effective Date: [Insert Date]
        </p> */}

        <p className="mb-8 text-base leading-relaxed">
          At <span className="font-semibold">Kaarigar & Co.</span>, we value your
          privacy and are committed to protecting your personal data. This
          Privacy Policy explains how we collect, use, share, and protect your
          information when you visit{" "}
          <a
            href="https://www.kaarigarandco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7cc933] hover:underline"
          >
            www.kaarigarandco.com
          </a>
          , interact with us on social media, or make a purchase through our
          platform.
        </p>

        {/* 1. Information We Collect */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            1. Information We Collect
          </h2>
          <h3 className="font-medium text-slate-700 mb-1">A. Personal Information</h3>
          <ul className="list-disc ml-6 text-slate-700 space-y-1 mb-3">
            <li>Name, email address, phone number</li>
            <li>Billing and shipping address</li>
            <li>Payment details (processed securely via third-party gateways)</li>
          </ul>

          <h3 className="font-medium text-slate-700 mb-1">B. Non-Personal Information</h3>
          <ul className="list-disc ml-6 text-slate-700 space-y-1 mb-3">
            <li>Browser type, device information, IP address</li>
            <li>Cookies and tracking data for analytics and personalized experience</li>
          </ul>

          <h3 className="font-medium text-slate-700 mb-1">C. Optional Data</h3>
          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>Feedback, product reviews, or social media interactions</li>
          </ul>
        </div>

        {/* 2. Legal Basis for Processing */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            2. Legal Basis for Processing (GDPR Compliance)
          </h2>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>
              <span className="font-medium">Consent:</span> When you agree to receive
              newsletters or marketing updates
            </li>
            <li>
              <span className="font-medium">Contractual Necessity:</span> To fulfill your
              order or service request
            </li>
            <li>
              <span className="font-medium">Legitimate Interests:</span> To improve our
              website, services, and customer experience
            </li>
            <li>
              <span className="font-medium">Legal Obligation:</span> To comply with
              applicable laws and regulations
            </li>
          </ul>
        </div>

        {/* 3. How We Use Your Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>Process and deliver your orders securely</li>
            <li>Send order updates, receipts, or promotional offers</li>
            <li>Personalize your browsing experience and improve our services</li>
            <li>Maintain records for tax, compliance, or legal purposes</li>
          </ul>
        </div>

        {/* 4. Sharing and Disclosure */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            4. Sharing and Disclosure
          </h2>
          <p className="text-slate-700 mb-3">
            We do not sell or rent your personal data. We may share limited data
            with:
          </p>
          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>
              <span className="font-medium">Service Providers:</span> Payment
              processors, logistics partners, analytics, and marketing tools
            </li>
            <li>
              <span className="font-medium">Legal Authorities:</span> Only when required
              by law or to protect our rights
            </li>
          </ul>
          <p className="text-slate-700 mt-2">
            All third-party partners comply with data protection laws and sign
            confidentiality agreements.
          </p>
        </div>

        {/* 5. Data Retention Policy */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            5. Data Retention Policy
          </h2>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>Order & Transaction Data: 5 years for accounting/legal compliance</li>
            <li>Marketing Data: Until you unsubscribe or withdraw consent</li>
            <li>Cookies & Analytics Data: Automatically deleted after a fixed duration</li>
          </ul>
          <p className="mt-2 text-slate-700">
            You can request deletion of your data anytime at{" "}
            <a
              href="mailto:support@kaarigarandco.com"
              className="text-[#7cc933] hover:underline"
            >
              support@kaarigarandco.com
            </a>
            .
          </p>
        </div>

        {/* 6. User Rights */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">6. User Rights</h2>
          <p className="text-slate-700 mb-2">
            Under GDPR, CCPA, and Indian IT Rules, you have the right to:
          </p>
          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>Access and obtain a copy of your data</li>
            <li>Request correction or deletion of inaccurate data</li>
            <li>Withdraw consent for marketing or data processing</li>
            <li>Object to automated profiling or targeted advertising</li>
          </ul>
          <p className="mt-2 text-slate-700">
            To exercise these rights, email us at{" "}
            <a
              href="mailto:support@kaarigarandco.com"
              className="text-[#7cc933] hover:underline"
            >
              support@kaarigarandco.com
            </a>
            .
          </p>
        </div>

        {/* 7. Cookies & Tracking */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            7. Cookies & Tracking Technologies
          </h2>
          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>Remember your preferences and cart items</li>
            <li>Analyze website traffic and improve performance</li>
            <li>Provide a personalized shopping experience</li>
          </ul>
          <p className="mt-2 text-slate-700">
            You can disable cookies in your browser settings, though certain site
            functions may be affected.
          </p>
        </div>

        {/* 8. Data Security */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            8. Data Security
          </h2>
          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>SSL encryption for data transmission</li>
            <li>Secure servers and limited staff access</li>
            <li>Compliance with PCI-DSS for payment security</li>
          </ul>
          <p className="mt-2 text-slate-700">
            Despite these measures, no online transmission is 100% secure. Use our
            services at your discretion.
          </p>
        </div>

        {/* 9. International Data Transfers */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            9. International Data Transfers
          </h2>
          <p className="text-slate-700 leading-relaxed">
            If you access our website from outside India, your information may be
            transferred to and processed in India. By using our site, you consent to
            such transfers in compliance with applicable data protection laws.
          </p>
        </div>

        {/* 10. Updates to This Policy */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            10. Updates to This Policy
          </h2>
          <p className="text-slate-700 leading-relaxed">
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with the revised “Effective Date.” Continued use of
            our website after changes means you accept the updated terms.
          </p>
        </div>

        {/* 11. Contact Us */}
        <div>
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">11. Contact Us</h2>
          <p className="text-slate-700 mb-2">
            For any questions, concerns, or data requests, please contact:
          </p>
          <p className="text-slate-700">
            📧{" "}
            <a
              href="mailto:support@kaarigarandco.com"
              className="text-[#7cc933] hover:underline"
            >
              support@kaarigarandco.com
            </a>
          </p>
          <p className="text-slate-700">
            🌐{" "}
            <a
              href="https://www.kaarigarandco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7cc933] hover:underline"
            >
              www.kaarigarandco.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
