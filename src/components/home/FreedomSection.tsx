import React from 'react';
import freedomImg from '../../assets/images/freedom_couple.jpg';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const FreedomSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck size={24} className="text-[#3B82F6]" />,
      title: 'Verified Drivers',
      subtitle: 'Chauffeurs background-checked & trained',
    },
    {
      icon: <Lock size={24} className="text-[#FFB800]" />,
      title: 'Guaranteed Safety',
      subtitle: '24/7 live GPS monitoring & emergency SOS',
    },
    {
      icon: <CheckCircle2 size={24} className="text-[#10B981]" />,
      title: 'Transparent Pricing',
      subtitle: 'Fixed toll & fuel inclusive, no hidden fees',
    },
  ];

  return (
    <section className="bg-[#08080A] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-9">
        {/* Section Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Freedom in Every Journey
          </h2>
        </div>

        {/* Cinematic Car Interior Image */}
        <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/80 max-h-[480px]">
          <img
            src={freedomImg}
            alt="Smiling couple in luxury car using smartphone"
            className="w-full h-full max-h-[480px] object-cover block"
          />
        </div>

        {/* 3 Feature Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-2">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/10 shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs sm:text-[13.5px] text-slate-400 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
