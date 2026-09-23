import React from 'react';
import destImg1 from '../../assets/images/dest_1.jpg';
import destImg2 from '../../assets/images/dest_2.jpg';
import destImg3 from '../../assets/images/dest_3.jpg';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const BeyondDestinationsSection: React.FC = () => {
  const destinations = [
    {
      id: 1,
      image: destImg1,
      tag: 'Highway Guide • 5 min read',
      title: 'Dhaka to Chittagong Highway: Top Scenic Stops & Highway Food Hubs',
      desc: 'Discover the best highway diners, rest spots, and expressway driving tips for a comfortable intercity ride.',
    },
    {
      id: 2,
      image: destImg2,
      tag: 'Nature Escape • 7 min read',
      title: 'Exploring the Waters and Tea Gardens of Sylhet with Chauffeur Comfort',
      desc: 'Plan a serene getaway to Jaflong and Sreemangal tea estates without the stress of navigating local roads.',
    },
    {
      id: 3,
      image: destImg3,
      tag: 'Heritage Tour • 4 min read',
      title: 'Historical Landmarks of North Bengal: A Guided Road Trip Itinerary',
      desc: 'From Kantajew Temple to Mahasthangarh, explore ancient archaeological heritage in private comfort.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20" id="destinations">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Beyond Destinations
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Curated travel guides and scenic highway itineraries across Bangladesh.
            </p>
          </div>

          <a href="#destinations" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0052FF] hover:gap-2.5 transition-all">
            <span>View All Destinations</span>
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
                <span className="text-xs font-bold text-[#0052FF]">{item.tag}</span>
                <h3 className="text-base font-extrabold text-slate-900 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
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
