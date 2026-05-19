"use client";

import { motion } from "framer-motion";
import { Play, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-lubgenx-primary to-lubgenx-secondary rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Join LubGenX Today
            </h2>
            <p className="text-lg md:text-xl text-green-50 mb-10 max-w-2xl mx-auto">
              Upgrade your garage's lubricant sourcing. Get authentic products, wholesale pricing, and same-day delivery right at your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-lubgenx-primary hover:bg-slate-50 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Play size={24} fill="currentColor" />
                Get the App
              </button>
              
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-full text-lg font-bold transition-all">
                <Phone size={24} />
                Contact Sales
              </button>
            </div>
            
            <p className="mt-8 text-sm text-green-100/80">
              WhatsApp Support Available • Gujarat Wide Network
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
