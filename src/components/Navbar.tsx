"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Brands", href: "#brands" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms-and-conditions" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <img src="/logo.svg" alt="LubGenX Logo" className="h-10 w-auto" />
          <span className="font-bold text-xl tracking-tight text-slate-900">LubGenX</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-lubgenx-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="text-sm font-medium text-lubgenx-primary hover:text-lubgenx-secondary transition-colors"
          >
            WhatsApp Support
          </a>
          <button className="flex items-center gap-2 bg-lubgenx-primary hover:bg-lubgenx-secondary text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            <Play size={16} fill="currentColor" />
            Play Store
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white pt-24 px-6 flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-semibold text-slate-800 hover:text-lubgenx-primary"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <button className="flex items-center justify-center gap-2 bg-lubgenx-primary text-white w-full py-4 rounded-xl text-lg font-bold shadow-md">
                <Play size={20} fill="currentColor" />
                Get the App
              </button>
              <a
                href="#contact"
                className="text-center font-medium text-lubgenx-primary mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
