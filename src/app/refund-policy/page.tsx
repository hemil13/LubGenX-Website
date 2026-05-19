import React from "react";

export const metadata = {
  title: "Refund & Cancellation Policy | LubGenX",
  description: "Refund and Cancellation Policy for the LubGenX mobile application.",
};

export default function RefundPolicy() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="mb-10 pb-8 border-b border-slate-100">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Refund & Cancellation Policy</h1>
            <p className="text-slate-500">Effective Date: May 2025 | Last Updated: May 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Cancellation Policy</h2>
              
              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">1.1 Cancellation By Customer</h3>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Orders can be cancelled <strong>before dispatch only</strong></li>
                <li>Once order is dispatched — cancellation is not possible</li>
                <li>To cancel: call us on +91 90546 92226 or WhatsApp immediately after placing order</li>
                <li>Full refund issued within 24 hours for cancelled orders</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">1.2 Cancellation By LubGenX</h3>
              <p className="text-slate-600 mb-4">We may cancel your order if:</p>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Product is out of stock</li>
                <li>Delivery address is outside our serviceable area</li>
                <li>Pricing error on the app</li>
                <li>Payment not confirmed</li>
              </ul>
              <p className="text-slate-600 mt-2 font-semibold">
                In all above cases — full refund issued within 24 hours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Return Policy</h2>
              
              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">2.1 Eligible For Return</h3>
              <p className="text-slate-600 mb-4">You can return a product if:</p>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Wrong product delivered (different brand/grade/quantity than ordered)</li>
                <li>Product is visibly damaged or leaking on delivery</li>
                <li>Sealed product has been tampered with</li>
                <li>Product is expired</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">2.2 Not Eligible For Return</h3>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Products that have been opened or partially used</li>
                <li>Products damaged due to incorrect storage by customer</li>
                <li>Change of mind after delivery</li>
                <li>Products ordered incorrectly by customer (wrong grade selected)</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">2.3 How To Raise A Return</h3>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Contact us within <strong>24 hours of delivery</strong></li>
                <li>WhatsApp photos of the product and issue to +91 90546 92226</li>
                <li>Our team will review within 4 hours</li>
                <li>If approved — pickup arranged from your garage within 24 hours</li>
                <li>Replacement or refund issued within 48 hours of pickup</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Refund Policy</h2>
              
              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">3.1 Refund Timeline</h3>
              <div className="overflow-x-auto mt-4 mb-6">
                <table className="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Situation</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Refund Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="px-6 py-4 text-slate-800">Order cancelled before dispatch</td>
                      <td className="px-6 py-4 text-slate-600">Within 24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-800">Order cancelled by LubGenX</td>
                      <td className="px-6 py-4 text-slate-600">Within 24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-800">Return approved</td>
                      <td className="px-6 py-4 text-slate-600">Within 48 hours of product pickup</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-800">Payment failed but amount deducted</td>
                      <td className="px-6 py-4 text-slate-600">Within 24-48 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">3.2 Refund Method</h3>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Refunds issued to original payment method only</li>
                <li>UPI payments — refunded to same UPI ID</li>
                <li>Bank transfer — refunded to same bank account</li>
                <li>Cash on delivery — refunded via bank transfer or UPI</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-700 mb-3 mt-6">3.3 Partial Refunds</h3>
              <p className="text-slate-600 mb-4">
                In cases where only part of the order is returned — refund will be proportional to returned items only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Damaged In Transit</h2>
              <p className="text-slate-600 mb-4">If product is damaged during delivery:</p>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Refuse to accept the delivery</li>
                <li>Take photo of damaged product</li>
                <li>Send photo to +91 90546 92226 immediately</li>
                <li>Replacement dispatched same day if stock available</li>
                <li>Full refund if replacement not available — within 24 hours</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Quality Complaints</h2>
              <p className="text-slate-600 mb-4">If you believe a product is not genuine or is of poor quality:</p>
              <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-2">
                <li>Do not use the product</li>
                <li>Contact us within 48 hours of delivery</li>
                <li>Provide batch number and photos</li>
                <li>We will investigate with our supplier</li>
                <li>Full refund or replacement issued if complaint is verified</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Contact For Refunds & Returns</h2>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="font-bold text-slate-800">LubGenX Customer Support</p>
                <p className="text-slate-600">+91 90546 92226 (WhatsApp preferred)</p>
                <p className="text-slate-600">spectrumlubs@gmail.com</p>
                <p className="text-slate-600 mt-2">Monday to Saturday, 9:00 AM to 7:00 PM</p>
                <p className="text-slate-600 mt-2">
                  Spectrum Lubricants<br/>
                  Anny Petroleum, Vatva, Ahmedabad, Gujarat<br/>
                  Universal Lube Agency, Sarkhej, Ahmedabad, Gujarat
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
