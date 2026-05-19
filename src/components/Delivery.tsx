"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Route } from "lucide-react";

export default function Delivery() {
  const cards = [
    {
      icon: Zap,
      title: "Same-Day Delivery",
      desc: "Get your lubricants delivered anywhere in Gujarat the same day, whenever you order.",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      desc: "Monitor your order status instantly right from the LubGenX app.",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: Route,
      title: "Optimized Dispatch",
      desc: "Our smart logistics ensure the fastest route to your garage, minimizing downtime.",
      color: "text-lubgenx-primary",
      bg: "bg-lubgenx-light",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Speed that Powers Your Business
          </h2>
          <p className="text-slate-600 text-lg">
            We know that an idle bay costs money. That's why we've built a logistics network designed for maximum speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative z-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-6`}>
                <card.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-slate-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
