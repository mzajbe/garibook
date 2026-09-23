import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Plane, Clock, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'City to City', 'Airport Taxi', 'Daily Rental'];

  const services = [
    {
      id: 'intercity',
      title: 'Inter-City Rides',
      description: 'Safe and comfortable rides between cities with fixed transparent pricing and zero surge fees.',
      icon: <Car size={22} />,
      isFeatured: true,
      badge: 'Popular',
    },
    {
      id: 'airport',
      title: 'Airport Transfer',
      description: 'Never miss a flight with guaranteed on-time airport pickups and professional luggage assistance.',
      icon: <Plane size={22} />,
      isFeatured: false,
      badge: '24/7',
    },
    {
      id: 'hourly',
      title: 'Hourly Rental',
      description: 'Flexible car hire with vetted chauffeur for business meetings, family shopping, and daily city runs.',
      icon: <Clock size={22} />,
      isFeatured: false,
      badge: 'Flexible',
    },
    {
      id: 'wedding',
      title: 'Wedding & Events',
      description: 'Premium luxury fleet including Mercedes, Prado, and Allion for weddings and corporate delegates.',
      icon: <Sparkles size={22} />,
      isFeatured: false,
      badge: 'Luxury',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Eyebrow Filter Pills */}
        <div className="flex mb-4">
          <div className="inline-flex bg-slate-100 p-1 rounded-full gap-1">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#0052FF] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 bg-transparent'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Every Ride, One Platform
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
                      ? 'bg-white/20 text-white font-bold'
                      : 'bg-slate-200/80 text-slate-700 font-bold'
                  }
                >
                  {item.badge}
                </Badge>
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className={`text-xl font-extrabold tracking-tight ${
                    item.isFeatured ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
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
                  <span>Explore details</span>
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
