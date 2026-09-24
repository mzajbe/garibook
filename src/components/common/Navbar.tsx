import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Earn With Garibook', href: '#driver' },
    { name: 'Garibook Business', href: '#services' },
    { name: 'Garibook Club', href: '#club' },
    { name: 'Campaign', href: '#campaign' },
    { name: 'Blogs', href: '#news' },
  ];

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
        <a href="/" className="flex items-center text-decoration-none" aria-label="Garibook Home">
          <img
            src="/garibook-logo.svg"
            alt="Garibook Logo"
            className="h-[40px] md:h-[44px] w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 text-[16.5px] font-semibold text-black hover:text-[#0052FF] transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#0052FF] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
            </a>
          ))}
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
        <div className="xl:hidden border-t border-slate-100 bg-white px-6 py-5 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-black hover:text-[#0052FF] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a href="#login" className="text-sm font-semibold text-slate-900">Sign In</a>
            <Button className="w-full bg-[#0052FF]" onClick={() => setMobileMenuOpen(false)}>Book a Ride</Button>
          </div>
        </div>
      )}
    </header>
  );
};

