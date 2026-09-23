import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Car, MapPin, Calendar, ChevronDown, ArrowRight } from 'lucide-react';

export const SearchWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'car' | 'airport'>('car');
  const [tripType, setTripType] = useState<'oneway' | 'roundway' | 'hourly'>('oneway');
  const [carType, setCarType] = useState('Select Car Type');
  const [isCarDropdownOpen, setIsCarDropdownOpen] = useState(false);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [pickupDateTime, setPickupDateTime] = useState('');

  const carOptions = [
    'Sedan (Axio, Allion, Premio)',
    'SUV / Crossover (X-Trail, Vezel, Harrier)',
    'Microbus (Noah, Voxy, HiAce)',
    'Luxury (Alphard, Mercedes-Benz, BMW)',
    'Tourist Bus / Minibus'
  ];

  return (
    <div className="w-full relative z-30 mt-6 md:mt-8 -mb-20 sm:-mb-24" id="booking">
      {/* Top Tabs: Car Rental & Airport Rental */}
      <div className="flex items-center gap-1.5 ml-2 sm:ml-4">
        <button
          type="button"
          onClick={() => setActiveTab('car')}
          className={`px-6 sm:px-8 py-3.5 text-sm sm:text-[15px] font-bold rounded-t-2xl transition-all cursor-pointer ${
            activeTab === 'car'
              ? 'bg-[#181A20] text-white shadow-sm'
              : 'bg-white/80 hover:bg-white text-slate-700 font-semibold'
          }`}
        >
          Car Rental
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('airport')}
          className={`px-6 sm:px-8 py-3.5 text-sm sm:text-[15px] font-bold rounded-t-2xl transition-all cursor-pointer ${
            activeTab === 'airport'
              ? 'bg-[#181A20] text-white shadow-sm'
              : 'bg-white/80 hover:bg-white text-slate-700 font-semibold'
          }`}
        >
          Airport Rental
        </button>
      </div>

      {/* Main Booking Card Container */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-900/15 border border-slate-100 p-6 sm:p-8 md:p-9">
        {/* 4 Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-200/80 pb-6 border-b border-slate-100">
          {/* Field 1: Choose a Car */}
          <div className="relative md:pr-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Car size={16} className="text-slate-900" />
              <label className="text-xs sm:text-[13px] font-bold text-slate-900 flex items-center gap-1">
                Choose a Car <span className="text-red-500 font-bold">*</span>
              </label>
            </div>
            <div
              className="flex items-center justify-between cursor-pointer py-1.5 px-1 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setIsCarDropdownOpen(!isCarDropdownOpen)}
            >
              <span className={`text-xs sm:text-[13.5px] truncate ${carType === 'Select Car Type' ? 'text-slate-400 font-normal' : 'text-slate-900 font-semibold'}`}>
                {carType}
              </span>
              <ChevronDown size={16} className={`text-slate-500 transition-transform ${isCarDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown Menu */}
            {isCarDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95">
                {carOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0052FF] font-medium transition-colors"
                    onClick={() => {
                      setCarType(opt);
                      setIsCarDropdownOpen(false);
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Field 2: Pickup Location */}
          <div className="md:px-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-amber-400/30 inline-block" />
              <label htmlFor="pickup-loc" className="text-xs sm:text-[13px] font-bold text-slate-900 flex items-center gap-1">
                Pickup Location <span className="text-red-500 font-bold">*</span>
              </label>
            </div>
            <input
              id="pickup-loc"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter Pickup Location"
              className="text-xs sm:text-[13.5px] text-slate-900 placeholder:text-slate-400 font-medium bg-transparent outline-none w-full py-1.5 px-1 truncate"
            />
          </div>

          {/* Field 3: Drop-off Location */}
          <div className="md:px-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={16} className="text-[#0052FF]" />
              <label htmlFor="drop-loc" className="text-xs sm:text-[13px] font-bold text-slate-900 flex items-center gap-1">
                Drop-off Location <span className="text-red-500 font-bold">*</span>
              </label>
            </div>
            <input
              id="drop-loc"
              type="text"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Enter Drop-off Location"
              className="text-xs sm:text-[13.5px] text-slate-900 placeholder:text-slate-400 font-medium bg-transparent outline-none w-full py-1.5 px-1 truncate"
            />
          </div>

          {/* Field 4: Pickup Date & Time */}
          <div className="md:pl-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} className="text-slate-800" />
              <label htmlFor="pickup-datetime" className="text-xs sm:text-[13px] font-bold text-slate-900 flex items-center gap-1">
                Pickup Date & Time <span className="text-red-500 font-bold">*</span>
              </label>
            </div>
            <input
              id="pickup-datetime"
              type="text"
              value={pickupDateTime}
              onChange={(e) => setPickupDateTime(e.target.value)}
              placeholder="MM/DD/YYYY 00:00 PM"
              className="text-xs sm:text-[13.5px] text-slate-900 placeholder:text-slate-400 font-medium bg-transparent outline-none w-full py-1.5 px-1 truncate"
            />
          </div>
        </div>

        {/* Bottom Options Row: Radio choices on left, Continue CTA on right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {/* One Way */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none group">
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                  tripType === 'oneway' ? 'border-[#0052FF] bg-[#0052FF]' : 'border-slate-300 group-hover:border-slate-400 bg-white'
                }`}
              >
                {tripType === 'oneway' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </span>
              <input
                type="radio"
                name="trip-direction"
                checked={tripType === 'oneway'}
                onChange={() => setTripType('oneway')}
                className="sr-only"
              />
              <span className={`text-sm ${tripType === 'oneway' ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>
                One Way
              </span>
            </label>

            {/* Round Way */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none group">
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                  tripType === 'roundway' ? 'border-[#0052FF] bg-[#0052FF]' : 'border-slate-300 group-hover:border-slate-400 bg-white'
                }`}
              >
                {tripType === 'roundway' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </span>
              <input
                type="radio"
                name="trip-direction"
                checked={tripType === 'roundway'}
                onChange={() => setTripType('roundway')}
                className="sr-only"
              />
              <span className={`text-sm ${tripType === 'roundway' ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>
                Round Way
              </span>
            </label>

            {/* Hourly */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none group">
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                  tripType === 'hourly' ? 'border-[#0052FF] bg-[#0052FF]' : 'border-slate-300 group-hover:border-slate-400 bg-white'
                }`}
              >
                {tripType === 'hourly' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </span>
              <input
                type="radio"
                name="trip-direction"
                checked={tripType === 'hourly'}
                onChange={() => setTripType('hourly')}
                className="sr-only"
              />
              <span className={`text-sm ${tripType === 'hourly' ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>
                Hourly
              </span>
            </label>
          </div>

          <Button
            size="lg"
            className="bg-[#0052FF] text-white hover:bg-[#0045D8] px-9 py-3.5 text-sm sm:text-[15px] font-bold rounded-xl shadow-lg shadow-[#0052FF]/25 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <span>Continue</span>
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};
