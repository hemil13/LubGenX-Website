import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

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
              <a href="#" className="hover:text-lubgenx-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-lubgenx-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-lubgenx-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
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
