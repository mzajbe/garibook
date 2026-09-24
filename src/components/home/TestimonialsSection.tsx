import React from 'react';
import testImg1 from '../../assets/images/testimonial_1.jpg';
import testImg2 from '../../assets/images/testimonial_2.jpg';
import testImg3 from '../../assets/images/testimonial_3.jpg';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      image: testImg1,
      name: 'Tanvir Ahmed',
      route: 'Dhaka to Sylhet Road Trip',
      quote: '"The driver was right on time and extremely polite. The car was spotless, making our 6-hour family journey effortless."',
    },
    {
      id: 2,
      image: testImg2,
      name: 'Mahmudul Hasan',
      route: 'Weekly Airport Commuter',
      quote: '"Garibook airport transfer is dependable. No last minute cancellations, and flight delay adjustments are seamless."',
    },
    {
      id: 3,
      image: testImg3,
      name: 'Dr. Farhana & Family',
      route: 'Dhaka to Cox\'s Bazar Vacation',
      quote: '"Traveling with elderly parents and children felt so secure. The live GPS tracking kept everyone at ease."',
    },
  ];

  return (
    <section className="bg-[#F3F5FA] py-20 md:py-28" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-slate-900 leading-snug lg:leading-[44px]">
              Our Passengers Speak For Us
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-normal mt-2 leading-[28px]">
              Hear authentic experiences from travelers who rely on Garibook for safe, premium journeys.
            </p>
          </div>

          <div className="flex gap-2.5">
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#0052FF] hover:border-[#0052FF] shadow-sm transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#0052FF] hover:border-[#0052FF] shadow-sm transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 3 Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <Card
              key={item.id}
              className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-full aspect-[16/10] relative overflow-hidden bg-slate-950 group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
                />

                {/* Central Red Circular Play Button */}
                <button
                  type="button"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-13 h-13 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg shadow-red-500/50 group-hover:scale-110 transition-transform cursor-pointer"
                  aria-label={`Play testimonial from ${item.name}`}
                >
                  <Play size={20} className="fill-white ml-0.5" />
                </button>

                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-bold text-white">
                  <span>Garibook Speaks</span>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-1">
                <h4 className="text-lg font-semibold text-slate-900">{item.name}</h4>
                <p className="text-sm font-normal text-slate-500">{item.route}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
