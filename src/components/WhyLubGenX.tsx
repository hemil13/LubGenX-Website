"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhyLubGenX() {
  const points = [
    "Trusted B2B lubricant sourcing ecosystem",
    "Tailored app experience for easy ordering",
    "Streamlined wholesale and bulk order support",
    "Wide variety of premium local and global brands",
  ];

  return (
    <section className="py-24 bg-lubgenx-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative z-10 bg-white rounded-3xl p-2 shadow-xl border border-slate-100">
              <div className="w-full h-full bg-slate-100 rounded-2xl overflow-hidden relative">
                {/* Abstract graphic representing B2B network */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-lubgenx-light flex items-center justify-center p-8">
                  <div className="w-full h-full border-2 border-dashed border-lubgenx-primary/30 rounded-full flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
                    <div className="w-32 h-32 bg-white rounded-full shadow-md flex items-center justify-center absolute -top-16">
                      <span className="text-lubgenx-primary font-bold">Castrol</span>
                    </div>
                    <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center absolute -bottom-12 -left-4">
                      <span className="text-lubgenx-primary font-bold">Mobil</span>
                    </div>
                    <div className="w-28 h-28 bg-white rounded-full shadow-md flex items-center justify-center absolute -bottom-8 -right-8">
                      <span className="text-lubgenx-primary font-bold">Servo</span>
                    </div>
                  </div>
                  <div className="w-32 h-32 bg-lubgenx-primary rounded-full absolute shadow-xl flex items-center justify-center">
                    <img src="/logo.svg" alt="LubGenX" className="w-16 h-16 brightness-0 invert" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-lubgenx-primary/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A Garage-Focused <br />
              <span className="text-lubgenx-primary">Business Ecosystem</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We understand the challenges mechanics and garage owners face. 
              LubGenX bridges the gap between manufacturers and workshops, 
              providing a seamless digital platform to manage stock, 
              track orders, and discover new products efficiently.
            </p>

            <ul className="space-y-4">
              {points.map((point, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-lubgenx-primary shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
