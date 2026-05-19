import React from "react";

export const metadata = {
  title: "Privacy Policy | LubGenX",
  description: "Privacy Policy for LubGenX mobile application.",
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="mb-10 pb-8 border-b border-slate-100">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">Effective Date: May 2025 | Last Updated: May 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Welcome to LubGenX (“we”, “our ”, “us”). LubGenX is operated by Spectrum Lubricants, Ahmedabad, Gujarat, India. This Privacy Policy explains how we collect, use, store and protect your information when you use our mobile application and services. By downloading or using the LubGenX app, you agree to the terms of this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">2.1 Information You Provide</h3>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Full name of garage owner / business</li>
                <li>Garage name and address</li>
                <li>Mobile number</li>
                <li>Email address (if provided)</li>
                <li>GST number (optional)</li>
                <li>Payment information (processed securely via Razorpay — we do not store card details)</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Device type and model</li>
                <li>Operating system version</li>
                <li>App usage data and session information</li>
                <li>IP address</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">2.3 Information From Third Parties</h3>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Payment verification from Razorpay</li>
                <li>Google Maps data for delivery routing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">We use your information to:</p>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Process and deliver your orders</li>
                <li>Send order confirmations and delivery updates via WhatsApp and push notifications</li>
                <li>Verify your garage registration</li>
                <li>Improve our app and services</li>
                <li>Resolve disputes and troubleshoot problems</li>
                <li>Send promotional offers and deals (you can opt out anytime)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. How We Share Your Information</h2>
              <p className="text-slate-600 mb-4 font-semibold text-lubgenx-primary">We do not sell your personal information to anyone. Ever.</p>
              <p className="text-slate-600 mb-4">We share your information only with:</p>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li><strong>Delivery partners:</strong> your address and phone number shared with delivery person for order fulfillment only</li>
                <li><strong>Razorpay:</strong> payment processing only</li>
                <li><strong>Google Maps:</strong> delivery routing only</li>
                <li><strong>Law enforcement:</strong> only if required by Indian law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Data Storage & Security</h2>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>All data stored on secure cloud servers</li>
                <li>Payment data encrypted using industry standard SSL</li>
                <li>We retain your data as long as your account is active</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Your Rights</h2>
              <p className="text-slate-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-slate-600 mt-4">
                To exercise any of these rights contact us at <strong>spectrumlubs@gmail.com</strong>. You can request deletion of your account and data at any time by emailing us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Location Data</h2>
              <p className="text-slate-600 mb-4">We collect your location only for:</p>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Confirming delivery address</li>
                <li>Calculating delivery time</li>
                <li>Routing delivery person to your garage</li>
              </ul>
              <p className="text-slate-600 mt-4 font-semibold">We do not track your location when app is closed.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Children’s Privacy</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                LubGenX is a B2B business app intended for adults (18+) only. We do not knowingly collect data from anyone under 18 years of age.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Changes To This Policy</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes via app notification or WhatsApp. Continued use of the app after changes means you accept the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Contact Us</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                For any privacy concerns:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="font-bold text-slate-800">Harsh Brahmbhatt</p>
                <p className="text-slate-600">Co-Founder & CEO, LubGenX</p>
                <p className="text-slate-600">Spectrum Lubricants, Ahmedabad, Gujarat, India</p>
                <p className="text-lubgenx-primary mt-2">spectrumlubs@gmail.com</p>
                <p className="text-lubgenx-primary">+91 90546 92226</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
