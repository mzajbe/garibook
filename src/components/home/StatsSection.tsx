import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    { value: '150,000+', label: 'Completed Trips' },
    { value: '99.9%', label: 'Happy Customers' },
    { value: '24/7', label: 'Live Support' },
    { value: '50+', label: 'Cities Covered' },
  ];

  return (
    <section className="bg-[#0052FF] text-white pt-28 md:pt-36 pb-0 relative overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-9 relative z-10 pb-12">
        {/* Title */}
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-white leading-tight">
            From Everyday Rides to Meaningful Journeys
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {stats.map((item, idx) => (
            <div key={idx} className="border-l border-white/30 pl-5 flex flex-col gap-1.5">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-blue-100">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skyline & Driving Car Graphic along bottom */}
      <div className="relative w-full h-[90px] overflow-hidden" aria-hidden="true">
        {/* Car Silhouette Driving */}
        <div className="absolute bottom-2 left-6 w-24 h-8 z-10 drop-shadow-md">
          <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 28C10 25 14 23 20 23L32 23L44 14C48 10 54 8 62 8L86 8C94 8 99 12 103 16L112 23C116 24 118 26 118 29V32H10V28Z"
              fill="white"
            />
            <path d="M47 16L38 22H64V12C57 12 51 13 47 16Z" fill="#0052FF" />
            <path d="M68 12V22H98L92 14C89 12 85 12 80 12H68Z" fill="#0052FF" />
            <circle cx="28" cy="32" r="7" fill="#0052FF" stroke="white" strokeWidth="2.5" />
            <circle cx="94" cy="32" r="7" fill="#0052FF" stroke="white" strokeWidth="2.5" />
          </svg>
        </div>

        {/* City Skyline Outline SVG */}
        <svg
          className="w-full h-[90px] block"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 90V75H20V60H35V75H55V45H75V75H90V55H110V75H130V35H150V75H170V50H185V75H210V62H230V75H250V30H270V75H285V58H305V75H325V42H345V75H365V65H380V75H400V38H420V75H440V52H460V75H480V25H505V75H525V55H545V75H565V45H585V75H605V60H620V75H645V35H670V75H690V50H710V75H730V28H755V75H775V58H795V75H815V40H835V75H855V62H875V75H895V32H920V75H940V50H960V75H980V45H1000V75H1020V60H1040V75H1060V35H1085V75H1105V52H1125V75H1145V25H1170V75H1190V55H1210V75H1230V42H1250V75H1270V60H1290V75H1310V38H1335V75H1355V50H1375V75H1395V30H1415V75H1440V90H0Z"
            fill="rgba(255, 255, 255, 0.2)"
          />
          <path
            d="M0 90V80H40V68H60V80H100V52H125V80H160V64H190V80H235V45H260V80H300V70H330V80H370V55H400V80H450V60H480V80H520V40H550V80H590V65H620V80H665V50H695V80H740V62H770V80H810V45H840V80H885V66H915V80H960V52H990V80H1030V65H1060V80H1105V48H1135V80H1180V60H1210V80H1255V42H1285V80H1330V68H1360V80H1400V55H1440V90H0Z"
            fill="rgba(255, 255, 255, 0.4)"
          />
          <line x1="0" y1="88" x2="1440" y2="88" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
};
