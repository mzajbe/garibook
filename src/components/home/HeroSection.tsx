import React, { useEffect, useRef, useState } from 'react';
import { SearchWidget } from './SearchWidget';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('Your Journey Starts\nHere ...');
  const heroContentRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const headlines = [
    'Your Journey Starts\nHere ...',
    'Luxury Trips with\nComfort',
    'Assurance of\nEffortless Travel',
  ];

  // GSAP Headline Cycling Animation
  useEffect(() => {
    let currentIdx = 0;
    let isCancelled = false;

    // Blinking cursor with GSAP
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        duration: 0.5,
      });
    }

    // Hero entrance staggered animation
    if (heroContentRef.current) {
      gsap.fromTo(
        heroContentRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out' }
      );
    }

    const typeHeadline = (text: string, onComplete: () => void) => {
      let charIdx = 0;
      const interval = setInterval(() => {
        if (isCancelled) {
          clearInterval(interval);
          return;
        }
        charIdx++;
        setDisplayText(text.slice(0, charIdx));
        if (charIdx >= text.length) {
          clearInterval(interval);
          setTimeout(() => {
            if (!isCancelled) eraseHeadline(text, onComplete);
          }, 2400);
        }
      }, 55);
    };

    const eraseHeadline = (text: string, onComplete: () => void) => {
      let charIdx = text.length;
      const interval = setInterval(() => {
        if (isCancelled) {
          clearInterval(interval);
          return;
        }
        charIdx--;
        setDisplayText(text.slice(0, charIdx));
        if (charIdx <= 0) {
          clearInterval(interval);
          setTimeout(() => {
            if (!isCancelled) onComplete();
          }, 400);
        }
      }, 25);
    };

    const cycle = () => {
      if (isCancelled) return;
      currentIdx = (currentIdx + 1) % headlines.length;
      typeHeadline(headlines[currentIdx], cycle);
    };

    // Initial pause before cycling to next
    const initialTimer = setTimeout(() => {
      if (!isCancelled) {
        eraseHeadline(headlines[0], cycle);
      }
    }, 2800);

    return () => {
      isCancelled = true;
      clearTimeout(initialTimer);
    };
  }, []);

  return (
    <section className="bg-white pt-14 md:pt-20 pb-0 relative z-30" id="hero">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div
          ref={heroContentRef}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center justify-between gap-8 lg:gap-14 pb-10 min-h-[200px]"
        >
          {/* Left Title Column with GSAP Typing Text */}
          <div className="min-h-[140px] flex items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-slate-900 leading-[1.15] whitespace-pre-line">
              {displayText}
              <span
                ref={cursorRef}
                className="inline-block text-[#0052FF] font-black ml-1 select-none"
              >
                |
              </span>
            </h1>
          </div>

          {/* Right Subtitle & Yellow CTA Button */}
          <div className="flex flex-col items-start gap-4 lg:pl-10">
            <p className="text-lg sm:text-[24px] text-slate-500 font-normal leading-normal sm:leading-[36px] max-w-lg">
              Choose your city, pick your car and enjoy the journey with Garibook's best drivers.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#FFC107] text-slate-950 font-semibold hover:bg-[#EAA800] shadow-sm rounded-xl px-7 py-3.5 text-base flex items-center gap-2 transition-all cursor-pointer"
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
