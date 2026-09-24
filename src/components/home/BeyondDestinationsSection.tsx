import React from 'react';
import destImg1 from '../../assets/images/dest_1.jpg';
import destImg2 from '../../assets/images/dest_2.jpg';
import destImg3 from '../../assets/images/dest_3.jpg';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const BeyondDestinationsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const destinations = [
    {
      id: 1,
      image: destImg1,
      tag: language === 'bn' ? 'হাইওয়ে গাইড • ৫ মিনিট পড়া' : 'Highway Guide • 5 min read',
      title: language === 'bn' ? 'ঢাকা-চট্টগ্রাম হাইওয়ে: বিরতি স্থান ও খাবারের সেরা ঠিকানা' : 'Dhaka to Chittagong Highway: Top Scenic Stops & Highway Food Hubs',
      desc: language === 'bn' ? 'আরামদায়ক আন্তঃজেলা ভ্রমণের জন্য সেরা রেস্টুরেন্ট, বিশ্রামাগার ও হাইওয়ে টিপস।' : 'Discover the best highway diners, rest spots, and expressway driving tips for a comfortable intercity ride.',
    },
    {
      id: 2,
      image: destImg2,
      tag: language === 'bn' ? 'প্রকৃতি ভ্রমণ • ৭ মিনিট পড়া' : 'Nature Escape • 7 min read',
      title: language === 'bn' ? 'সিলেটের চা বাগান ও ঝরনা ঘুরে দেখার পূর্ণাঙ্গ গাইড' : 'Exploring the Waters and Tea Gardens of Sylhet with Chauffeur Comfort',
      desc: language === 'bn' ? 'জাফলং ও শ্রীমঙ্গলের সবুজ চা বাগানে ঘুরে আসার সেরা পরিকল্পনা।' : 'Plan a serene getaway to Jaflong and Sreemangal tea estates without the stress of navigating local roads.',
    },
    {
      id: 3,
      image: destImg3,
      tag: language === 'bn' ? 'ঐতিহ্য ভ্রমণ • ৪ মিনিট পড়া' : 'Heritage Tour • 4 min read',
      title: language === 'bn' ? 'উত্তরবঙ্গের প্রাচীন প্রত্নতাত্ত্বিক নিদর্শন ভ্রমণের রোড ম্যাপ' : 'Historical Landmarks of North Bengal: A Guided Road Trip Itinerary',
      desc: language === 'bn' ? 'কান্তজিউ মন্দির থেকে মহাস্থানগড়—প্রাইভেট গাড়িতে ঐতিহ্যময় ভ্রমণ।' : 'From Kantajew Temple to Mahasthangarh, explore ancient archaeological heritage in private comfort.',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28" id="destinations">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-slate-900 leading-snug lg:leading-[44px]">
              {t('dest_title')}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-normal mt-2 leading-[28px]">
              {t('dest_subtitle')}
            </p>
          </div>

          <a href="#destinations" className="inline-flex items-center gap-1.5 text-base font-semibold text-[#0052FF] hover:gap-2.5 transition-all">
            <span>{t('dest_btn')}</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 3 Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((item) => (
            <Card
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col gap-2.5 flex-1">
                <span className="text-xs font-semibold text-[#0052FF]">{item.tag}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-normal leading-[22px] line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
