"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Castrol", highlight: false },
  { name: "Mobil", highlight: false },
  { name: "LubGenX", highlight: true },
  { name: "Servo", highlight: false },
  { name: "HP", highlight: false },
];

export default function Brands() {
  return (
    <section id="brands" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Supported Brands</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Premium Lubricants for Every Need
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              className={`
                flex items-center justify-center px-8 py-6 rounded-2xl transition-all cursor-default
                ${brand.highlight 
                  ? 'bg-lubgenx-primary text-white shadow-lg shadow-lubgenx-primary/20 scale-110 z-10' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
                }
              `}
            >
              {brand.highlight ? (
                <div className="flex items-center gap-2">
                  <img src="/logo.svg" alt="LubGenX" className="w-8 h-8 brightness-0 invert" />
                  <span className="text-2xl font-black tracking-tight">{brand.name}</span>
                </div>
              ) : (
                <span className="text-xl font-bold">{brand.name}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
