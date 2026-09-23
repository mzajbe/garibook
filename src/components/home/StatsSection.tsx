import React, { useEffect, useRef } from 'react';
import sedanCarGif from '../../assets/images/Sedan_GiF.gif';
import frameCityPng from '../../assets/images/frame_city.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skylineRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  // Counter values refs for GSAP ScrollTrigger animation
  const tripsCountRef = useRef<HTMLSpanElement>(null);
  const customersCountRef = useRef<HTMLSpanElement>(null);
  const supportCountRef = useRef<HTMLSpanElement>(null);
  const citiesCountRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. GSAP Infinite City Skyline Track Translation
      if (skylineRef.current) {
        gsap.to(skylineRef.current, {
          xPercent: -50,
          duration: 30,
          ease: 'none',
          repeat: -1,
        });
      }

      // 2. GSAP Realistic Car Highway Driving Dynamics
      if (carRef.current) {
        // Subtle road vibration and suspension float
        gsap.to(carRef.current, {
          y: -2,
          duration: 0.35,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });

        // Gentle forward-backward cruising drift
        gsap.to(carRef.current, {
          x: 25,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        // ScrollTrigger: Car accelerates slightly when scrolling through section
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            if (carRef.current) {
              const velocityShift = self.getVelocity() / 300;
              gsap.to(carRef.current, {
                x: Math.max(0, Math.min(120, 25 + velocityShift)),
                duration: 0.6,
                ease: 'power2.out',
                overwrite: 'auto',
              });
            }
          },
        });
      }

      // 3. GSAP Animated Stat Numbers with ScrollTrigger
      const statTargets = { trips: 0, customers: 0, cities: 0 };

      ScrollTrigger.create({
        trigger: statsContainerRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          // Fade and slide in the stat boxes
          if (statsContainerRef.current) {
            gsap.fromTo(
              statsContainerRef.current.children,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
            );
          }

          // Count up numbers
          gsap.to(statTargets, {
            trips: 150000,
            customers: 99.9,
            cities: 50,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: () => {
              if (tripsCountRef.current) {
                tripsCountRef.current.innerText = `${Math.floor(statTargets.trips).toLocaleString()}+`;
              }
              if (customersCountRef.current) {
                customersCountRef.current.innerText = `${statTargets.customers.toFixed(1)}%`;
              }
              if (citiesCountRef.current) {
                citiesCountRef.current.innerText = `${Math.floor(statTargets.cities)}+`;
              }
            },
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-[#0E53FF] to-[#0038C4] text-white pt-28 md:pt-36 pb-0 relative z-10 overflow-hidden"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-9 relative z-10 pb-16 md:pb-20">
        {/* Title */}
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-tight">
            From Everyday Rides to Meaningful Journeys
          </h2>
        </div>

        {/* Stats Row with Animated Numbers */}
        <div
          ref={statsContainerRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-2"
        >
          {/* Stat 1 */}
          <div className="border-l-2 border-white/25 pl-5 flex flex-col gap-1.5">
            <span
              ref={tripsCountRef}
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white"
            >
              150,000+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-blue-100">
              Completed Trips
            </span>
          </div>

          {/* Stat 2 */}
          <div className="border-l-2 border-white/25 pl-5 flex flex-col gap-1.5">
            <span
              ref={customersCountRef}
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white"
            >
              99.9%
            </span>
            <span className="text-xs sm:text-sm font-semibold text-blue-100">
              Happy Customers
            </span>
          </div>

          {/* Stat 3 */}
          <div className="border-l-2 border-white/25 pl-5 flex flex-col gap-1.5">
            <span
              ref={supportCountRef}
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white"
            >
              24/7
            </span>
            <span className="text-xs sm:text-sm font-semibold text-blue-100">
              Live Support
            </span>
          </div>

          {/* Stat 4 */}
          <div className="border-l-2 border-white/25 pl-5 flex flex-col gap-1.5">
            <span
              ref={citiesCountRef}
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white"
            >
              50+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-blue-100">
              Cities Covered
            </span>
          </div>
        </div>
      </div>

      {/* Skyline & Driving Car Highway Track along bottom */}
      <div className="relative w-full h-[95px] overflow-hidden select-none" aria-hidden="true">
        {/* Infinite Moving City Skyline Background */}
        <div
          ref={skylineRef}
          className="absolute bottom-0 left-0 h-[78px] w-[200%] flex opacity-85 pointer-events-none"
          style={{
            backgroundImage: `url(${frameCityPng})`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%',
          }}
        />

        {/* Road baseline line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/40 z-10" />

        {/* Animated Moving Sedan Car */}
        <div
          ref={carRef}
          className="absolute bottom-[-10px] left-6 sm:left-14 w-[180px] sm:w-[220px] md:w-[234px] h-[85px] sm:h-[102px] md:h-[109px] z-20 transition-transform cursor-pointer"
          title="Garibook Chauffeur Drive"
        >
          <img
            src={sedanCarGif}
            alt="Garibook Moving Sedan Car"
            className="w-full h-full object-contain pointer-events-none drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
