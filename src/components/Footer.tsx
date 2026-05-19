import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="LubGenX" className="h-10 w-auto grayscale opacity-80" />
              <span className="font-bold text-xl tracking-tight text-slate-800">LubGenX</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering garages with premium lubricants, fast delivery, and smart business management.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-lubgenx-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-lubgenx-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-lubgenx-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-lubgenx-primary transition-colors">Home</Link></li>
              <li><Link href="#features" className="hover:text-lubgenx-primary transition-colors">Features</Link></li>
              <li><Link href="#brands" className="hover:text-lubgenx-primary transition-colors">Brands</Link></li>
              <li><a href="#contact" className="hover:text-lubgenx-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/privacy-policy" className="hover:text-lubgenx-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-lubgenx-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="hover:text-lubgenx-primary transition-colors">Refund & Cancellation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-lubgenx-primary shrink-0 mt-0.5" />
                <span>Spectrum Lubricants<br />Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-lubgenx-primary shrink-0" />
                <a href="tel:+919000000000" className="hover:text-lubgenx-primary transition-colors">+91 90000 00000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-lubgenx-primary shrink-0" />
                <a href="mailto:support@lubgenx.com" className="hover:text-lubgenx-primary transition-colors">support@lubgenx.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Spectrum Lubricants. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Built for Ahmedabad Garages.
          </p>
        </div>
      </div>
    </footer>
  );
}
