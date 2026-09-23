import React from 'react';
import { SearchWidget } from './SearchWidget';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-white pt-12 md:pt-14 pb-6 relative overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-6 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] items-center gap-8 lg:gap-14">
          {/* Left Title Column */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Luxury Trips with<br />
              Comfort<span className="text-[#0052FF] font-black animate-pulse ml-1">|</span>
            </h1>
          </div>

          {/* Right Subtitle & Yellow CTA Button */}
          <div className="flex flex-col items-start gap-5">
            <p className="text-[15px] text-slate-500 leading-relaxed max-w-lg">
              Chauffeur-driven private car rental across Bangladesh. Enjoy intercity rides, airport transfers, and hourly rentals with transparent pricing and verified drivers.
            </p>
            <Button
              asChild
              variant="yellow"
              size="lg"
              className="bg-[#FFB800] text-slate-950 font-bold hover:bg-[#EAA800] shadow-md shadow-[#FFB800]/30 rounded-xl px-7 text-sm"
            >
              <a href="#booking">
                <span>Book Now</span>
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
