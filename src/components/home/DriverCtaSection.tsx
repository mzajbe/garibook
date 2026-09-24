import React from 'react';
import smartDriverImg from '../../assets/images/smart_driver.jpg';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const DriverCtaSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28" id="driver">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-slate-900 leading-snug lg:leading-[44px] mb-6">
          Be a Smart Driver
        </h2>

        {/* Yellow Banner Card */}
        <div className="bg-[#FFB800] rounded-2xl md:rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-[1.15fr_1fr] items-center shadow-xl shadow-[#FFB800]/20 min-h-[290px]">
          <div className="p-8 sm:p-12 flex flex-col gap-4 items-start">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight tracking-tight">
              0% Commission<br />
              100% Freedom
            </h3>
            <p className="text-sm sm:text-base font-normal text-slate-900/80 max-w-md leading-[26px]">
              Keep 100% of what you earn. Receive guaranteed long-distance trips, daily payouts, and 24/7 dedicated support.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#0052FF] text-white hover:bg-[#0045D8] px-7 py-3 rounded-xl font-semibold text-base shadow-lg shadow-[#0052FF]/30 mt-1"
            >
              <a href="#partner">
                <span>Join as a Driver</span>
                <ArrowRight size={17} />
              </a>
            </Button>
          </div>

          <div className="h-full flex justify-center md:justify-end items-end overflow-hidden">
            <img
              src={smartDriverImg}
              alt="Smiling Bangladeshi driver holding smartphone"
              className="max-h-72 md:max-h-80 w-auto object-contain block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
