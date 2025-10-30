"use client";
import React from "react";

const TermsConditions = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-10 px-6 md:px-20 text-slate-800">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#19273A] mb-2">
          Terms & Conditions
        </h1>
        <p className="text-center text-sm text-slate-500 mb-8">
          Effective Date: [Insert Date]
        </p>

        <p className="mb-8 text-base leading-relaxed">
          Welcome to <span className="font-semibold">Kaarigar & Co.</span> By
          using our website{" "}
          <a
            href="https://www.kaarigarandco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7cc933] hover:underline"
          >
            www.kaarigarandco.com
          </a>
          , you agree to the following Terms and Conditions. Please read them
          carefully before using our services.
        </p>

        {/* 1. General Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            1. General Information
          </h2>
          <p className="text-slate-700 leading-relaxed">
            These Terms & Conditions govern your use of our website, products,
            and services. By accessing or purchasing from Kaarigar & Co., you
            agree to comply with all applicable laws and our policies. If you
            disagree with any part of these terms, you may not access or use our
            services.
          </p>
        </div>

        {/* 2. Products and Services */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            2. Products and Services
          </h2>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>
              All our products are handcrafted, and minor variations in color,
              shape, or texture may occur. This reflects the unique craftsmanship
              of our artisans and is not considered a defect.
            </li>
            <li>
              Product descriptions, images, and pricing are subject to change
              without prior notice.
            </li>
            <li>
              We reserve the right to discontinue or modify any product at any
              time.
            </li>
          </ul>
        </div>

        {/* 3. Orders & Payments */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            3. Orders & Payments
          </h2>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>Orders can be placed directly through our website.</li>
            <li>
              Prices are displayed in INR (₹) unless stated otherwise, and are
              exclusive of taxes and shipping charges, which are calculated at
              checkout.
            </li>
            <li>
              Payment must be completed at the time of purchase via our secure
              payment gateways.
            </li>
            <li>
              Once an order is placed, it cannot be modified or cancelled unless
              explicitly approved by our team.
            </li>
          </ul>
        </div>

        {/* 4. Shipping & Delivery */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            4. Shipping & Delivery
          </h2>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>
              We process and dispatch orders within 8–12 business days (unless
              specified otherwise).
            </li>
            <li>
              Delivery timelines may vary based on your location and courier
              partner.
            </li>
            <li>
              Kaarigar & Co. is not responsible for delays caused by external
              logistics partners or unforeseen events.
            </li>
            <li>
              Customers will receive tracking information once the order has been
              shipped.
            </li>
          </ul>
        </div>

        {/* 5. Returns, Refunds & Exchanges */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            5. Returns, Refunds & Exchanges
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Due to the handcrafted nature of our products, returns or exchanges
            will not be possible.
          </p>
        </div>

        {/* 7. Limitation of Liability */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            7. Limitation of Liability
          </h2>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>
              Any indirect, incidental, or consequential damages arising from the
              use or inability to use our products or website.
            </li>
            <li>
              Delays, losses, or damage caused by third-party shipping or payment
              providers.
            </li>
            <li>
              Minor variations in handcrafted products as described above.
            </li>
          </ul>
          <p className="mt-2 text-slate-700">
            All purchases are made at the customer’s discretion.
          </p>
        </div>

        {/* 8. User Conduct */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            8. User Conduct
          </h2>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>Use the website for lawful purposes only.</li>
            <li>
              Do not interfere with the website’s operation or attempt
              unauthorized access.
            </li>
            <li>
              Avoid uploading harmful code, viruses, or offensive content.
            </li>
          </ul>
          <p className="mt-2 text-slate-700">
            Violation of these terms may result in suspension or termination of
            your account.
          </p>
        </div>

        {/* 9. Privacy */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            9. Privacy & Data Protection
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy to
            understand how we collect, store, and protect your personal data in
            compliance with GDPR, CCPA, and Indian IT regulations.
          </p>
        </div>

        {/* 10. Governing Law */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            10. Governing Law & Jurisdiction
          </h2>
          <p className="text-slate-700 leading-relaxed">
            These Terms & Conditions are governed by the laws of India. Any
            disputes shall be subject to the exclusive jurisdiction of the courts
            in Indore, India.
          </p>
        </div>

        {/* 11. Contact */}
        <div>
          <h2 className="text-xl font-semibold text-[#19273A] mb-3">
            11. Contact Information
          </h2>
          <p className="text-slate-700 leading-relaxed mb-2">
            For questions, feedback, or concerns, please contact us at:
          </p>
          <p className="text-slate-700">
            📧{" "}
            <a
              href="mailto:thekaarigarandco@gmail.com"
              className="text-[#7cc933] hover:underline"
            >
              thekaarigarandco@gmail.com
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

export default TermsConditions;
