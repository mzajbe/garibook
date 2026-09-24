import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_driver'), href: '#driver' },
    { name: t('nav_business'), href: '#services' },
    { name: t('nav_club'), href: '#club' },
    { name: t('nav_campaign'), href: '#campaign' },
    { name: t('nav_blogs'), href: '#news' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md shadow-slate-900/5 border-b border-slate-200/80 py-0'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100'
      }`}
    >
      {/* Top utility bar with Language Switcher */}
      <div
        className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 flex justify-end overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-12 opacity-100 pt-2 pb-0'
        }`}
      >
        <button
          type="button"
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#0052FF] hover:bg-[#0045D8] px-3.5 py-1.5 rounded-lg shadow-sm cursor-pointer transition-all hover:scale-105"
          title="Change language / ভাষা পরিবর্তন করুন"
        >
          <Globe size={14} className="text-white shrink-0" />
          <span>{language === 'en' ? 'English' : 'বাংলা'}</span>
          <span className="text-[10px] opacity-75 font-normal ml-0.5">
            ({language === 'en' ? 'বাংলা করতে ক্লিক করুন' : 'Switch to English'})
          </span>
        </button>
      </div>

      <div
        className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 flex items-center justify-between ${
          isScrolled ? 'h-[66px]' : 'h-[74px]'
        }`}
      >
        {/* Brand Logo */}
        <a href="/" className="flex items-center text-decoration-none" aria-label="Garibook Home">
          <img
            src="/garibook-logo.svg"
            alt="Garibook Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-[36px] md:h-[38px]' : 'h-[40px] md:h-[44px]'
            }`}
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
            className="bg-[#0052FF] text-white hover:bg-[#0045D8] px-6 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {t('nav_login')}
          </Button>

          {/* Mobile Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="xl:hidden flex items-center gap-1 text-xs font-bold text-[#0052FF] bg-blue-50 px-2.5 py-1.5 rounded-md"
          >
            <Globe size={14} />
            <span>{language === 'en' ? 'বাংলা' : 'EN'}</span>
          </button>

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
            <a href="#login" className="text-sm font-semibold text-slate-900">{t('nav_signin')}</a>
            <Button className="w-full bg-[#0052FF]" onClick={() => setMobileMenuOpen(false)}>{t('nav_book_ride')}</Button>
          </div>
        </div>
      )}
    </header>
  );
};
