import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-[74px] flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 text-decoration-none" aria-label="Garibook Home">
          <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="9" fill="#0052FF" />
            <path d="M9 22L12.5 13.5H23.5L27 22H9Z" fill="white" fillOpacity="0.2" />
            <path d="M10 21C10 20.4477 10.4477 20 11 20H25C25.5523 20 26 20.4477 26 21V23.5C26 24.3284 25.3284 25 24.5 25H23C23 25.8284 22.3284 26.5 21.5 26.5C20.6716 26.5 20 25.8284 20 25H16C16 25.8284 15.3284 26.5 14.5 26.5C13.6716 26.5 13 25.8284 13 25H11.5C10.6716 25 10 24.3284 10 23.5V21Z" fill="white" />
            <circle cx="13.5" cy="22.5" r="1.5" fill="#0052FF" />
            <circle cx="22.5" cy="22.5" r="1.5" fill="#0052FF" />
            <path d="M12.5 16H23.5L24.5 19H11.5L12.5 16Z" fill="white" />
          </svg>
          <span className="text-2xl font-extrabold tracking-tight text-[#0052FF]">garibook</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          <a href="#hero" className="text-[14.5px] font-semibold text-[#0052FF] relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0052FF] after:rounded-full">Home</a>
          <a href="#services" className="text-[14.5px] font-semibold text-slate-700 hover:text-[#0052FF] transition-colors">Intercity</a>
          <a href="#services" className="text-[14.5px] font-semibold text-slate-700 hover:text-[#0052FF] transition-colors">Airport</a>
          <a href="#services" className="text-[14.5px] font-semibold text-slate-700 hover:text-[#0052FF] transition-colors">Daily Rental</a>
          <a href="#about" className="text-[14.5px] font-semibold text-slate-700 hover:text-[#0052FF] transition-colors">About Us</a>
          <a href="#contact" className="text-[14.5px] font-semibold text-slate-700 hover:text-[#0052FF] transition-colors">Contact</a>
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-md cursor-pointer transition-colors">
            <Globe size={14} className="text-slate-500" />
            <span>EN</span>
            <ChevronDown size={13} className="text-slate-400" />
          </div>

          <a href="#login" className="hidden sm:inline-block text-sm font-semibold text-slate-900 hover:text-[#0052FF] transition-colors">Sign In</a>

          <Button size="pill" className="bg-[#0052FF] text-white hover:bg-[#0045D8] px-5 text-[13.5px] shadow-md shadow-[#0052FF]/20">
            Book a Ride
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-slate-900 hover:text-[#0052FF]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-5 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-[#0052FF]">Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800">Intercity</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800">Airport</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800">Daily Rental</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800">About Us</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800">Contact</a>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a href="#login" className="text-sm font-semibold text-slate-900">Sign In</a>
            <Button className="w-full bg-[#0052FF]" onClick={() => setMobileMenuOpen(false)}>Book a Ride</Button>
          </div>
        </div>
      )}
    </header>
  );
};
