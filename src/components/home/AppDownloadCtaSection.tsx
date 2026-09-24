import React from 'react';
import phoneHandImg from '../../assets/images/phone_in_hand.jpg';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const AppDownloadCtaSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28" id="download">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0052FF] rounded-2xl md:rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center min-h-[320px] shadow-2xl shadow-[#0052FF]/30 relative">
          {/* Left Text Column */}
          <div className="p-8 sm:p-12 flex flex-col gap-4 items-start z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight">
              Download Garibook<br />
              Mobile App
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-md leading-relaxed">
              Book rides in seconds, track your chauffeur live on the map, and enjoy exclusive discounts on every journey.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <Button
                asChild
                size="lg"
                className="bg-[#FFB800] text-slate-950 font-bold hover:bg-[#EAA800] px-7 py-3 rounded-xl shadow-lg shadow-black/20"
              >
                <a href="#download">
                  <span>Download App</span>
                  <ArrowRight size={17} />
                </a>
              </Button>

              <div>
                <span className="text-xs font-semibold text-blue-200">
                  Available on iOS & Android
                </span>
              </div>
            </div>
          </div>

          {/* Right Smartphone Hand Mockup */}
          <div className="h-full flex justify-center md:justify-end items-end overflow-hidden">
            <img
              src={phoneHandImg}
              alt="Person holding smartphone with Garibook App"
              className="max-h-72 md:max-h-84 w-auto object-cover rounded-t-2xl md:rounded-tr-none md:rounded-tl-2xl block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
