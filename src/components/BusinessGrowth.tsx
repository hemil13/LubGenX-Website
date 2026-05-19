"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Store } from "lucide-react";

export default function BusinessGrowth() {
  const stats = [
    { icon: Users, value: "Salesman Network", label: "Dedicated field executives to assist you" },
    { icon: Store, value: "Garage Onboarding", label: "Instant digital KYC and account setup" },
    { icon: BarChart3, value: "Analytics Driven", label: "Track your buying patterns and savings" },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-lubgenx-primary opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Scale Your Operations with a <br/>
            <span className="text-lubgenx-primary">Smart Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg"
          >
            LubGenX isn't just an app; it's a dedicated distribution network. Our on-ground salesmen work hand-in-hand with our digital platform to ensure your garage never runs out of stock.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl text-center hover:bg-slate-800 transition-colors"
            >
              <div className="w-16 h-16 bg-slate-700 rounded-2xl mx-auto flex items-center justify-center text-lubgenx-primary mb-6">
                <stat.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
