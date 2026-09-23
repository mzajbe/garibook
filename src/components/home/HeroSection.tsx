import React from 'react';
import { SearchWidget } from './SearchWidget';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-white pt-10 md:pt-14 pb-0 relative overflow-hidden" id="hero">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center justify-between gap-8 lg:gap-14 pb-6">
          {/* Left Title Column */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Your Journey Starts<br />
              Here ...
            </h1>
          </div>

          {/* Right Subtitle & Yellow CTA Button */}
          <div className="flex flex-col items-start gap-4 lg:pl-10">
            <p className="text-base sm:text-[17px] text-slate-500 font-normal leading-relaxed max-w-lg">
              Choose your city, pick your car and enjoy the journey with Garibook's best drivers.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#FFC107] text-slate-950 font-bold hover:bg-[#EAA800] shadow-sm rounded-xl px-7 py-3.5 text-sm flex items-center gap-2 transition-all"
            >
              <a href="#app">
                <span>Download App</span>
                <ArrowRight size={17} />
              </a>
            </Button>
          </div>
        </div>

        {/* Floating Search Widget */}
        <SearchWidget />
      </div>
    </section>
  );
};
