import React from 'react';
import freedomImg from '../../assets/images/freedom_couple.jpg';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const FreedomSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <ShieldCheck size={24} className="text-[#3B82F6]" />,
      title: t('freedom_feat_1_title'),
      subtitle: t('freedom_feat_1_sub'),
    },
    {
      icon: <Lock size={24} className="text-[#FFB800]" />,
      title: t('freedom_feat_2_title'),
      subtitle: t('freedom_feat_2_sub'),
    },
    {
      icon: <CheckCircle2 size={24} className="text-[#10B981]" />,
      title: t('freedom_feat_3_title'),
      subtitle: t('freedom_feat_3_sub'),
    },
  ];

  return (
    <section className="bg-[#08080A] text-white py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-9">
        {/* Section Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-white leading-snug lg:leading-[44px]">
            {t('freedom_title')}
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
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="text-sm sm:text-base font-normal text-slate-400 leading-[26px]">
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
