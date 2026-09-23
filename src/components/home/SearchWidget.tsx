import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

export const SearchWidget: React.FC = () => {
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip'>('oneway');
  const [bookingMode, setBookingMode] = useState<'day' | 'hour' | 'airport'>('day');
  const [pickup, setPickup] = useState('Dhaka (All Areas)');
  const [destination, setDestination] = useState('Chittagong, Cox\'s Bazar...');
  const [pickupDate, setPickupDate] = useState('24 Sep, 10:00 AM');
  const [returnDate, setReturnDate] = useState('Add Return Date');

  return (
    <div className="w-full max-w-[1180px] mx-auto relative z-30 mt-8 -mb-16 px-4 md:px-0" id="booking">
      <div className="bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200/80 p-5 md:p-7">
        {/* Top Trip Type Mode Toggle */}
        <div className="flex gap-2 mb-5">
          <button
            type="button"
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition-all cursor-pointer ${
              tripType === 'oneway'
                ? 'bg-[#0F172A] text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-900 bg-transparent'
            }`}
            onClick={() => setTripType('oneway')}
          >
            One Way
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition-all cursor-pointer ${
              tripType === 'roundtrip'
                ? 'bg-[#0F172A] text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-900 bg-transparent'
            }`}
            onClick={() => setTripType('roundtrip')}
          >
            Round Trip
          </button>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center bg-slate-50/90 border border-slate-200/90 rounded-xl p-2.5 md:p-3 gap-2 md:gap-3">
          {/* Pickup Field */}
          <div className="flex items-center gap-3 px-2 py-1 flex-1">
            <div className="text-[#0052FF] flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <label htmlFor="pickup-input" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Pick-up Location
              </label>
              <input
                id="pickup-input"
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="From City or Address"
                className="text-sm font-bold text-slate-900 bg-transparent outline-none w-full truncate"
              />
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200 shrink-0" />

          {/* Destination Field */}
          <div className="flex items-center gap-3 px-2 py-1 flex-1">
            <div className="text-[#FFB800] flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <label htmlFor="dest-input" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Destination
              </label>
              <input
                id="dest-input"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="To City or Address"
                className="text-sm font-bold text-slate-900 bg-transparent outline-none w-full truncate"
              />
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200 shrink-0" />

          {/* Pickup Date Field */}
          <div className="flex items-center gap-3 px-2 py-1 flex-1">
            <div className="text-[#0052FF] flex items-center justify-center shrink-0">
              <Calendar size={18} />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <label htmlFor="date-input" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Pick-up Date & Time
              </label>
              <input
                id="date-input"
                type="text"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="text-sm font-bold text-slate-900 bg-transparent outline-none w-full truncate"
              />
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200 shrink-0" />

          {/* Return Date / Duration */}
          <div className="flex items-center gap-3 px-2 py-1 flex-1">
            <div className="text-slate-400 flex items-center justify-center shrink-0">
              <Clock size={18} />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <label htmlFor="return-input" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Return Date
              </label>
              <input
                id="return-input"
                type="text"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="text-sm font-semibold text-slate-600 bg-transparent outline-none w-full truncate"
              />
            </div>
          </div>
        </div>

        {/* Bottom Options and Action CTA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-5 pt-1">
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="radio"
                name="booking-mode"
                checked={bookingMode === 'day'}
                onChange={() => setBookingMode('day')}
                className="accent-[#0052FF] w-4 h-4 cursor-pointer"
              />
              <span className={`text-[13.5px] ${bookingMode === 'day' ? 'font-bold text-slate-900' : 'font-medium text-slate-600'}`}>
                By Day
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="radio"
                name="booking-mode"
                checked={bookingMode === 'hour'}
                onChange={() => setBookingMode('hour')}
                className="accent-[#0052FF] w-4 h-4 cursor-pointer"
              />
              <span className={`text-[13.5px] ${bookingMode === 'hour' ? 'font-bold text-slate-900' : 'font-medium text-slate-600'}`}>
                By Hr
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="radio"
                name="booking-mode"
                checked={bookingMode === 'airport'}
                onChange={() => setBookingMode('airport')}
                className="accent-[#0052FF] w-4 h-4 cursor-pointer"
              />
              <span className={`text-[13.5px] ${bookingMode === 'airport' ? 'font-bold text-slate-900' : 'font-medium text-slate-600'}`}>
                Airport
              </span>
            </label>
          </div>

          <Button
            size="lg"
            className="bg-[#0052FF] text-white hover:bg-[#0045D8] px-7 py-3 text-sm font-bold shadow-lg shadow-[#0052FF]/30 w-full sm:w-auto"
          >
            <span>Search Rides</span>
            <ArrowRight size={17} />
          </Button>
        </div>
      </div>
    </div>
  );
};
