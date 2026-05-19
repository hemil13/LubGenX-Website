"use client";

import { motion } from "framer-motion";
import { Play, Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-lubgenx-light blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-green-100 blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lubgenx-light text-lubgenx-primary font-medium text-sm w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lubgenx-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lubgenx-primary"></span>
              </span>
              Gujarat's Premium B2B Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Performance Lubricants <br/>
              <span className="text-gradient">Delivered Faster.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Empowering garages, mechanics, and workshops with genuine products, smart management, and same-day delivery. Join the revolution in lubricant sourcing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="flex items-center justify-center gap-2 bg-lubgenx-primary hover:bg-lubgenx-secondary text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Play size={20} fill="currentColor" />
                Download App
              </button>
              
              <button className="flex items-center justify-center gap-2 bg-white text-slate-800 border-2 border-slate-200 hover:border-lubgenx-primary hover:text-lubgenx-primary px-8 py-4 rounded-full text-base font-bold transition-all">
                <Phone size={20} />
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Abstract App Mockup / Visual */}
              <div className="absolute inset-0 bg-gradient-to-tr from-lubgenx-secondary to-lubgenx-primary rounded-[2.5rem] shadow-2xl overflow-hidden transform rotate-3">
                <div className="absolute inset-2 bg-white rounded-[2rem] overflow-hidden flex flex-col p-6">
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="font-bold text-slate-800">Good Morning,</h3>
                      <p className="text-sm text-slate-500">Super Garage</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-lubgenx-light flex items-center justify-center">
                      <img src="/logo.svg" alt="Icon" className="w-6 h-6 object-contain" />
                    </div>
                  </div>
                  
                  {/* Mockup Content Cards */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-4 shadow-sm"
                  >
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-slate-500 font-medium mb-1">Recent Order</p>
                        <p className="font-bold text-slate-800 text-sm">LubGenX PREMIUM</p>
                        <p className="text-sm font-medium text-lubgenx-primary mt-1">Delivering Today</p>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-amber-400 opacity-50" />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="bg-lubgenx-primary rounded-2xl p-4 text-white shadow-md flex justify-between items-center"
                  >
                    <div>
                      <p className="text-xs opacity-80 mb-1">Total Savings</p>
                      <p className="text-xl font-bold">₹2,450</p>
                    </div>
                    <ArrowRight size={20} className="opacity-80" />
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Element */}
              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl flex items-center gap-4 z-10"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-lubgenx-primary font-bold text-xl">
                  ⚡
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Same Day</p>
                  <p className="text-xs text-slate-500">Delivery Guaranteed</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
