import React from 'react';
import newsImg1 from '../../assets/images/news_1.jpg';
import newsImg2 from '../../assets/images/news_2.jpg';
import newsImg3 from '../../assets/images/news_3.jpg';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const articles = [
    {
      id: 1,
      image: newsImg1,
      platform: 'The Daily Star',
      date: 'Sep 2024',
      title: 'How Garibook is revolutionizing inter-district travel across Bangladesh',
      excerpt: 'Smart booking and transparent pricing create a safer, hassle-free alternative for highway journeys.',
    },
    {
      id: 2,
      image: newsImg2,
      platform: 'The Business Standard',
      date: 'Aug 2024',
      title: 'Garibook expands smart fleet management to 64 districts nationwide',
      excerpt: 'Empowering independent chauffeur partners with zero commission while elevating travel comfort.',
    },
    {
      id: 3,
      image: newsImg3,
      platform: 'Dhaka Tribune',
      date: 'Jul 2024',
      title: 'Safety first: Garibook implements 24/7 central GPS & emergency SOS monitoring',
      excerpt: 'Ensuring absolute passenger and family peace of mind from Dhaka to Cox’s Bazar.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20" id="news">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Navigation Arrows */}
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            We Featured by Top news<br />
            Platforms
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
                <div className="flex items-center gap-2 text-xs font-bold text-[#0052FF]">
                  <span>{item.platform}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-400 font-medium">{item.date}</span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2 flex-grow">
                  {item.excerpt}
                </p>

                <div className="pt-3 border-t border-slate-100 mt-2">
                  <a href="#read" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052FF]">
                    <span>Read Article</span>
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
