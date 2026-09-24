import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Plane, Clock, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilterKey, setActiveFilterKey] = useState<'all' | 'intercity' | 'airport' | 'daily'>('all');

  const filters = [
    { key: 'all', label: t('filter_all') },
    { key: 'intercity', label: t('filter_intercity') },
    { key: 'airport', label: t('filter_airport') },
    { key: 'daily', label: t('filter_daily') },
  ];

  const services = [
    {
      id: 'intercity',
      title: t('service_intercity_title'),
      description: t('service_intercity_desc'),
      icon: <Car size={22} />,
      isFeatured: true,
      badge: t('badge_popular'),
    },
    {
      id: 'airport',
      title: t('service_airport_title'),
      description: t('service_airport_desc'),
      icon: <Plane size={22} />,
      isFeatured: false,
      badge: t('badge_247'),
    },
    {
      id: 'hourly',
      title: t('service_hourly_title'),
      description: t('service_hourly_desc'),
      icon: <Clock size={22} />,
      isFeatured: false,
      badge: t('badge_flexible'),
    },
    {
      id: 'wedding',
      title: t('service_wedding_title'),
      description: t('service_wedding_desc'),
      icon: <Sparkles size={22} />,
      isFeatured: false,
      badge: t('badge_luxury'),
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28" id="services">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Filter Pills */}
        <div className="flex mb-4">
          <div className="inline-flex bg-slate-100 p-1 rounded-full gap-1">
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all cursor-pointer ${
                  activeFilterKey === filter.key
                    ? 'bg-[#0052FF] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 bg-transparent'
                }`}
                onClick={() => setActiveFilterKey(filter.key as any)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-slate-900 leading-snug lg:leading-[44px]">
            {t('services_title')}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item) => (
            <Card
              key={item.id}
              className={`rounded-2xl transition-all duration-300 p-6 flex flex-col justify-between gap-6 cursor-pointer ${
                item.isFeatured
                  ? 'bg-[#0052FF] text-white border-[#0052FF] shadow-xl shadow-[#0052FF]/25 hover:-translate-y-1'
                  : 'bg-slate-50 border-slate-200/90 text-slate-900 hover:-translate-y-1 hover:shadow-md hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-sm ${
                    item.isFeatured ? 'bg-white text-[#0052FF]' : 'bg-white text-[#0052FF] border border-slate-100'
                  }`}
                >
                  {item.icon}
                </div>
                <Badge
                  variant={item.isFeatured ? 'default' : 'secondary'}
                  className={
                    item.isFeatured
                      ? 'bg-white/20 text-white font-semibold text-xs'
                      : 'bg-slate-200/80 text-slate-700 font-semibold text-xs'
                  }
                >
                  {item.badge}
                </Badge>
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className={`text-xl font-bold tracking-tight ${
                    item.isFeatured ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm sm:text-base font-normal leading-[24px] ${
                    item.isFeatured ? 'text-blue-100' : 'text-slate-500'
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-current/10">
                <a
                  href="#booking"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                    item.isFeatured ? 'text-white' : 'text-[#0052FF]'
                  }`}
                >
                  <span>{t('service_explore')}</span>
                  {item.isFeatured ? <ArrowRight size={15} /> : <ArrowUpRight size={15} />}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
