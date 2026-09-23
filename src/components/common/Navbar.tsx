import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
      {/* Top utility bar if language toggle is positioned top-right */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-0 hidden md:flex justify-end">
        <button
          type="button"
          className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#0052FF] hover:bg-[#0045D8] px-3 py-1.5 rounded-lg shadow-sm cursor-pointer transition-colors"
        >
          <Globe size={13} className="text-white" />
          <span>English</span>
        </button>
      </div>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 h-[74px] flex items-center justify-between">
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
        <nav className="hidden xl:flex items-center gap-7" aria-label="Main Navigation">
          <a href="#about" className="text-[14.5px] font-medium text-slate-700 hover:text-[#0052FF] transition-colors">About Us</a>
          <a href="#driver" className="text-[14.5px] font-medium text-slate-700 hover:text-[#0052FF] transition-colors">Earn With Garibook</a>
          <a href="#services" className="text-[14.5px] font-medium text-slate-700 hover:text-[#0052FF] transition-colors">Garibook Business</a>
          <a href="#club" className="text-[14.5px] font-medium text-slate-700 hover:text-[#0052FF] transition-colors">Garibook Club</a>
          <a href="#campaign" className="text-[14.5px] font-medium text-slate-700 hover:text-[#0052FF] transition-colors">Campaign</a>
          <a href="#news" className="text-[14.5px] font-medium text-slate-700 hover:text-[#0052FF] transition-colors">Blogs</a>
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className="bg-[#0052FF] text-white hover:bg-[#0045D8] px-6 py-2 rounded-lg text-sm font-semibold shadow-sm"
          >
            login
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="xl:hidden p-2 text-slate-900 hover:text-[#0052FF]"
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
