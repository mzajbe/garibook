import React from 'react';
import newsImg1 from '../../assets/images/news_1.jpg';
import newsImg2 from '../../assets/images/news_2.jpg';
import newsImg3 from '../../assets/images/news_3.jpg';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const NewsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const articles = [
    {
      id: 1,
      image: newsImg1,
      platform: 'The Daily Star',
      date: language === 'bn' ? 'সেপ্টেম্বর ২০২৪' : 'Sep 2024',
      title: language === 'bn' ? 'কীভাবে গাড়িবুক বাংলাদেশে আন্তঃজেলা যাত্রায় বিপ্লব আনছে' : 'How Garibook is revolutionizing inter-district travel across Bangladesh',
      excerpt: language === 'bn' ? 'স্মার্ট বুকিং ও নির্ধারিত ভাড়া ব্যবস্থা হাইওয়ে যাত্রাকে করেছে আরও নিরাপদ ও সাশ্রয়ী।' : 'Smart booking and transparent pricing create a safer, hassle-free alternative for highway journeys.',
    },
    {
      id: 2,
      image: newsImg2,
      platform: 'The Business Standard',
      date: language === 'bn' ? 'আগস্ট ২০২৪' : 'Aug 2024',
      title: language === 'bn' ? 'দেশের ৬৪ জেলায় গাড়িবুকের স্মার্ট কার রেন্টাল ফ্লিট সম্প্রসারণ' : 'Garibook expands smart fleet management to 64 districts nationwide',
      excerpt: language === 'bn' ? '০% কমিশনে স্বাধীন ড্রাইভারদের ক্ষমতায়ন ও যাত্রীদের প্রিমিয়াম অভিজ্ঞতার প্রতিশ্রুতি।' : 'Empowering independent chauffeur partners with zero commission while elevating travel comfort.',
    },
    {
      id: 3,
      image: newsImg3,
      platform: 'Dhaka Tribune',
      date: language === 'bn' ? 'জুলাই ২০২৪' : 'Jul 2024',
      title: language === 'bn' ? 'নিরাপত্তা প্রথম: ২৪/৭ লাইভ জিপিএস ও ইমার্জেন্সি এসওএস প্রযুক্তি' : 'Safety first: Garibook implements 24/7 central GPS & emergency SOS monitoring',
      excerpt: language === 'bn' ? 'ঢাকা থেকে কক্সবাজার—প্রতিটি যাত্রায় পরিবার ও যাত্রীদের শতভাগ নিরাপত্তা নিশ্চিতকরণ।' : 'Ensuring absolute passenger and family peace of mind from Dhaka to Cox’s Bazar.',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28" id="news">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Arrows */}
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-slate-900 leading-snug lg:leading-[44px]">
            {t('news_title_1')}<br />
            {t('news_title_2')}
          </h2>

          <div className="flex gap-2.5">
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#0052FF] hover:border-[#0052FF] shadow-sm transition-all cursor-pointer"
              aria-label="Previous article"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#0052FF] hover:border-[#0052FF] shadow-sm transition-all cursor-pointer"
              aria-label="Next article"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 3 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item) => (
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

              <div className="p-5 sm:p-6 flex flex-col flex-1 gap-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0052FF]">
                  <span>{item.platform}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-400 font-normal">{item.date}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-normal leading-[22px] line-clamp-2 flex-grow">
                  {item.excerpt}
                </p>

                <div className="pt-3 border-t border-slate-100 mt-2">
                  <a href="#read" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052FF]">
                    <span>{t('news_read')}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
