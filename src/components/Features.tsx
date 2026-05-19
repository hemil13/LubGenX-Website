"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Wrench, Package, Smartphone, Layers, CheckCircle2, HeadphonesIcon } from "lucide-react";

const features = [
  { icon: Truck, title: "Same Day Delivery", desc: "Get your lubricants delivered across Gujarat on the very same day." },
  { icon: ShieldCheck, title: "Genuine Products", desc: "100% authentic products sourced directly from trusted manufacturers." },
  { icon: Wrench, title: "Garage Focused", desc: "Built exclusively for mechanics, workshops, and distribution businesses." },
  { icon: Package, title: "Bulk Ordering", desc: "Effortlessly manage wholesale purchases with transparent pricing." },
  { icon: Smartphone, title: "Smart Management", desc: "Track your orders, stock, and history seamlessly in the app." },
  { icon: Layers, title: "Multiple Brands", desc: "Access top global and local brands all under one roof." },
  { icon: CheckCircle2, title: "Easy Ordering", desc: "A smooth checkout experience tailored for fast-paced businesses." },
  { icon: HeadphonesIcon, title: "Fast Support", desc: "Dedicated WhatsApp and call support to resolve issues instantly." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Why Garages Choose <span className="text-lubgenx-primary">LubGenX</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            A powerful suite of features designed to keep your business running smoothly without friction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-lubgenx-light hover:shadow-lg transition-all group cursor-default"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-lubgenx-primary mb-4 group-hover:scale-110 transition-transform">
                <feat.icon size={24} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">{feat.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
