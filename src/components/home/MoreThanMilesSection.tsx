import React from 'react';
import familyImg from '../../assets/images/family_travel.jpg';
import roadTripImg from '../../assets/images/road_trip_kids.jpg';
import friendsImg from '../../assets/images/friends_beach.jpg';
import { Users, Compass, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const MoreThanMilesSection: React.FC = () => {
  const { t } = useLanguage();

  const stories = [
    {
      id: 'family',
      image: familyImg,
      tag: t('tag_family'),
      icon: <Heart size={14} className="text-[#0052FF]" />,
      alt: 'Bangladeshi family with luggage by car',
    },
    {
      id: 'roadtrip',
      image: roadTripImg,
      tag: t('tag_roadtrip'),
      icon: <Compass size={14} className="text-[#0052FF]" />,
      alt: 'Father and smiling kids enjoying road trip in car',
    },
    {
      id: 'group',
      image: friendsImg,
      tag: t('tag_group'),
      icon: <Users size={14} className="text-[#0052FF]" />,
      alt: 'Friends enjoying beach vacation with car',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-slate-900 leading-snug lg:leading-[44px]">
            {t('miles_title')}
          </h2>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="rounded-2xl overflow-hidden relative group aspect-[4/3] shadow-md shadow-slate-200/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={story.image}
                alt={story.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="flex items-center">{story.icon}</span>
                <span className="text-sm font-semibold text-slate-900">{story.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
