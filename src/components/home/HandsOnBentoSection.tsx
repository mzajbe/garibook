import React from 'react';
import phoneInHandImg from '../../assets/images/phone_in_hand.jpg';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, Shield, ArrowRight, TrendingUp } from 'lucide-react';

export const HandsOnBentoSection: React.FC = () => {
  return (
    <section className="bg-[#0A0A0C] text-white py-16 md:py-20">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-9">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            From Booking to Arrival<br />
            It's All In Your Hands
          </h2>
          <Button
            asChild
            className="bg-[#0052FF] hover:bg-[#0045D8] text-white font-bold px-6 py-2.5 rounded-lg shadow-md shadow-[#0052FF]/30 w-fit"
          >
            <a href="#download">
              <span>Get the App</span>
              <ArrowRight size={17} />
            </a>
          </Button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Top-Left Large Blue Card (Mobile App Showcase) */}
          <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#0052FF] to-[#0070FF] rounded-2xl p-7 md:p-9 relative overflow-hidden flex flex-col justify-between min-h-[360px] shadow-xl shadow-[#0052FF]/20">
            <div className="flex flex-col gap-2.5 max-w-sm relative z-10">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white px-2.5 py-1 rounded-md w-fit">
                Mobile Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Smart Booking in 3 Taps
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Real-time GPS tracking, chauffeur verification, and seamless digital payments right at your fingertips.
              </p>
            </div>

            {/* In-Card Phone Mockup Frame */}
            <div className="hidden sm:block absolute right-8 -bottom-6 w-56 h-80 bg-white rounded-t-[32px] p-3 shadow-2xl border-4 border-slate-900 border-b-0">
              <div className="bg-slate-50 h-full rounded-t-[24px] p-3 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                  <span>9:41</span>
                  <div className="w-12 h-2.5 bg-slate-900 rounded-b-md" />
                  <span>●●●</span>
                </div>
                <div className="bg-white p-2 rounded-lg text-[10px] font-bold text-slate-900 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
                  <span>Airport ➔ Gulshan 1</span>
                </div>
                <div className="bg-slate-200 rounded-lg flex-1 relative overflow-hidden flex items-center justify-center">
                  <div className="w-4/5 h-0.5 bg-[#0052FF]" />
                  <span className="text-sm">🚖</span>
                </div>
                <div className="bg-white p-2 rounded-lg flex flex-col gap-1.5 shadow-sm">
                  <div className="flex justify-between text-[10px] font-bold text-slate-900">
                    <span>Sedan Premium</span>
                    <span className="text-[#0052FF]">৳ 1,450</span>
                  </div>
                  <div className="bg-[#0052FF] text-white text-[10px] font-bold py-1 text-center rounded">
                    Book Instantly
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Top-Right Driver Profile Card */}
          <Card className="col-span-1 bg-white rounded-2xl p-6 text-slate-900 flex flex-col justify-between gap-5 border-slate-200">
            <div className="flex items-center gap-3.5 relative">
              <div className="relative w-13 h-13 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
                  alt="Driver Rafiqul"
                  className="w-13 h-13 rounded-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-extrabold text-slate-900">Kabir Ahmed</h4>
                <div className="flex items-center gap-1 text-xs font-bold text-[#FFB800]">
                  <Star size={13} className="fill-[#FFB800]" />
                  <span>5.0 (480+ rides)</span>
                </div>
              </div>
              <span className="ml-auto text-xs font-bold text-[#0052FF] bg-blue-50 px-2.5 py-1 rounded-md">
                4 mins away
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Vehicle</span>
                <span className="font-bold text-slate-900">Toyota Allion (White)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Plate Number</span>
                <span className="font-bold text-slate-900">Dhaka Metro-Ga 24-8921</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
              <Shield size={14} />
              <span>Garibook Verified Chauffeur & Sanitized</span>
            </div>
          </Card>

          {/* Card 3: Bottom-Left Analytics */}
          <Card className="col-span-1 bg-white rounded-2xl p-6 text-slate-900 flex flex-col justify-between gap-4 border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <TrendingUp size={18} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Fare Transparency
                </span>
                <h4 className="text-sm font-extrabold text-slate-900">No Surge, Exact Estimates</h4>
              </div>
            </div>

            {/* SVG Visual Graph */}
            <div className="py-2">
              <svg viewBox="0 0 200 60" className="w-full h-14" fill="none">
                <path
                  d="M0 45 Q 35 25, 70 38 T 140 18 T 200 24"
                  stroke="#10B981"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M0 45 Q 35 25, 70 38 T 140 18 T 200 24 L 200 60 L 0 60 Z"
                  fill="rgba(16, 185, 129, 0.08)"
                />
                <circle cx="140" cy="18" r="4" fill="#10B981" />
              </svg>
            </div>

            <div className="flex justify-between items-baseline pt-2 border-t border-slate-100">
              <span className="text-2xl font-black text-[#0052FF]">৳ 3,200</span>
              <span className="text-xs font-semibold text-slate-500">Fixed Dhaka to Ctg Rate</span>
            </div>
          </Card>

          {/* Card 4: Bottom-Middle Vehicle Chooser */}
          <Card className="col-span-1 bg-white rounded-2xl p-6 text-slate-900 flex flex-col gap-3.5 border-slate-200">
            <h4 className="text-sm font-extrabold text-slate-900">Choose how you ride</h4>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-blue-50/80 border border-[#0052FF]/30">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">Sedan (4 Seats)</span>
                  <span className="text-[11px] text-slate-500">Premio / Axio</span>
                </div>
                <span className="text-xs font-bold text-[#0052FF]">৳ 3,200</span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">Microbus (8-11 Seats)</span>
                  <span className="text-[11px] text-slate-500">Toyota HiAce</span>
                </div>
                <span className="text-xs font-bold text-[#0052FF]">৳ 5,800</span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">Luxury SUV (7 Seats)</span>
                  <span className="text-[11px] text-slate-500">Prado / Fortuner</span>
                </div>
                <span className="text-xs font-bold text-[#0052FF]">৳ 9,500</span>
              </div>
            </div>
          </Card>

          {/* Card 5: Bottom-Right Yellow Hand Mockup */}
          <div className="col-span-1 bg-[#FFB800] rounded-2xl p-6 pb-0 text-slate-900 flex flex-col justify-between overflow-hidden shadow-lg shadow-[#FFB800]/20">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900/60">
                24/7 Connectivity
              </span>
              <h4 className="text-lg font-extrabold text-slate-950">Live in Your Palm</h4>
            </div>
            <div className="w-full max-h-40 overflow-hidden flex justify-center mt-3">
              <img
                src={phoneInHandImg}
                alt="Smartphone with Garibook app in hand"
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
