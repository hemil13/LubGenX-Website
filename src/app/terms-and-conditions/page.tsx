import React from "react";

export const metadata = {
  title: "Terms & Conditions | LubGenX",
  description: "Terms and Conditions for using the LubGenX mobile application.",
};

export default function TermsAndConditions() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="mb-10 pb-8 border-b border-slate-100">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Terms & Conditions</h1>
            <p className="text-slate-500">Effective Date: May 2025 | Last Updated: May 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                By downloading, registering or using the LubGenX mobile application, you agree to be bound by these Terms & Conditions. If you do not agree, do not use the app.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                These Terms constitute a legally binding agreement between you (“User”, “Garage Owner”) and Spectrum Lubricants (“LubGenX”, “Company”).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Eligibility</h2>
              <p className="text-slate-600 mb-4">To use LubGenX you must:</p>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Be 18 years of age or older</li>
                <li>Be a registered garage owner, mechanic, or automotive service business</li>
                <li>Have a valid mobile number in India</li>
                <li>Agree to these Terms & Conditions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Account Registration</h2>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>You must provide accurate and complete information during registration</li>
                <li>You are responsible for keeping your login credentials secure</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>One account per garage/business</li>
                <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Products & Ordering</h2>
              
              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">4.1 Product Availability</h3>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>All products listed are subject to availability</li>
                <li>We reserve the right to limit quantities</li>
                <li>Product images are for reference only — actual product may vary slightly in packaging</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">4.2 Pricing</h3>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>All prices are in Indian Rupees (₹)</li>
                <li>Prices include applicable GST unless stated otherwise</li>
                <li>We reserve the right to change prices at any time</li>
                <li>Price at time of order confirmation is the final price</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">4.3 Order Confirmation</h3>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>An order is confirmed only after you receive a confirmation message on WhatsApp or in-app</li>
                <li>We reserve the right to cancel orders due to stock unavailability or pricing errors</li>
                <li>In case of cancellation by us — full refund will be issued within 24 hours</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Delivery</h2>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>We offer same-day delivery in Ahmedabad for orders placed before 4:00 PM</li>
                <li>Delivery is free on all orders</li>
                <li>Delivery times are estimates — we are not liable for delays caused by traffic, weather or other factors outside our control</li>
                <li>You must ensure someone is available at the delivery address to receive the order</li>
                <li>If delivery fails due to unavailability at address — redelivery will be attempted once. After that order may be cancelled.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Genuine Products Guarantee</h2>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>LubGenX guarantees all branded products (Castrol, HP, Servo, Mobil) are 100% genuine sourced directly from authorised distributors</li>
                <li>LubGenX own-brand products are manufactured by Spectrum Lubricants, Ahmedabad</li>
                <li>If you suspect a product is counterfeit — contact us immediately with photos and batch number</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Prohibited Uses</h2>
              <p className="text-slate-600 mb-4">You must not:</p>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Use the app for any illegal purpose</li>
                <li>Place fake or fraudulent orders</li>
                <li>Resell products purchased through LubGenX commercially without our written permission</li>
                <li>Attempt to hack, reverse engineer or damage our app or systems</li>
                <li>Use another person’s account without permission</li>
                <li>Provide false registration information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Intellectual Property</h2>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>The LubGenX name, logo, app design and content are owned by Spectrum Lubricants</li>
                <li>You may not copy, reproduce or use our branding without written permission</li>
                <li>Branded product names (Castrol, HP, Servo, Mobil) belong to their respective owners</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Limitation of Liability</h2>
              <p className="text-slate-600 mb-4">LubGenX shall not be liable for:</p>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Any indirect or consequential loss arising from use of our app</li>
                <li>Loss of business or revenue due to delayed delivery</li>
                <li>Damage caused by products used incorrectly</li>
                <li>Technical issues with the app beyond our reasonable control</li>
              </ul>
              <p className="text-slate-600 font-semibold mt-4">
                Our maximum liability to you shall not exceed the value of your last order.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Governing Law</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Ahmedabad, Gujarat.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Changes To Terms</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We may update these Terms at any time. Continued use of the app after changes constitutes acceptance of the new Terms. We will notify you of major changes via WhatsApp or push notification.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">12. Contact Us</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                For any queries regarding these Terms:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="font-bold text-slate-800">Harsh Brahmbhatt</p>
                <p className="text-slate-600">Co-Founder & CEO, LubGenX</p>
                <p className="text-slate-600">Spectrum Lubricants, Ahmedabad, Gujarat, India</p>
                <p className="text-lubgenx-primary mt-2">brahmbhattharsh2@gmail.com</p>
                <p className="text-lubgenx-primary">+91 90546 92226</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
