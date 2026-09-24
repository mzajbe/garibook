import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import carIcon from '../../assets/images/fi_9610434.svg';
import pickupDotIcon from '../../assets/images/Frame76.svg';
import dropoffPinIcon from '../../assets/images/fi_14910621.svg';
import calendarIcon from '../../assets/images/fi_12516022.svg';
import downArrowIcon from '../../assets/images/Down_Arrow_3_.png';

export const SearchWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'car' | 'airport'>('car');

  // Car Rental sub-mode
  const [carTripType, setCarTripType] = useState<'oneway' | 'roundway' | 'hourly'>('oneway');

  // Airport Rental sub-mode
  const [airportTripType, setAirportTripType] = useState<'to-airport' | 'from-airport'>('to-airport');

  // Car selection state
  const [carType, setCarType] = useState('Select Car Type');
  const [isCarDropdownOpen, setIsCarDropdownOpen] = useState(false);

  // Airport selection state
  const [selectedAirport, setSelectedAirport] = useState('Select Airport');
  const [isAirportDropdownOpen, setIsAirportDropdownOpen] = useState(false);

  // Field inputs
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [pickupDateTime, setPickupDateTime] = useState('');

  const carOptions = [
    { name: 'Sedan (Axio, Allion, Premio)', seats: '4 Seats' },
    { name: 'SUV / Crossover (X-Trail, Vezel, Harrier)', seats: '4 Seats' },
    { name: 'Microbus (Noah, Voxy, HiAce)', seats: '7 - 11 Seats' },
    { name: 'Luxury (Alphard, Mercedes-Benz, BMW)', seats: '4 Seats' },
    { name: 'Tourist Minibus / Coaster', seats: '28 Seats' },
  ];

  const airportOptions = [
    'Hazrat Shahjalal International Airport (DAC) - Dhaka',
    'Shah Amanat International Airport (CGP) - Chittagong',
    'Osmani International Airport (ZYL) - Sylhet',
    "Cox's Bazar Airport (CXB) - Cox's Bazar",
    'Saidpur Airport (SPD) - Nilphamari / Rangpur',
    'Shah Makhdum Airport (RJH) - Rajshahi',
    'Barisal Airport (BZL) - Barisal',
    'Jessore Airport (JSR) - Jessore / Khulna',
  ];

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    const summary = {
      service: activeTab === 'car' ? 'Car Rental' : 'Airport Rental',
      mode: activeTab === 'car' ? carTripType : airportTripType,
      car: carType !== 'Select Car Type' ? carType : 'Any Car',
      pickup: activeTab === 'airport' && airportTripType === 'from-airport' ? selectedAirport : pickup || 'Dhaka',
      dropoff: activeTab === 'airport' && airportTripType === 'to-airport' ? selectedAirport : dropoff || 'Destination',
      datetime: pickupDateTime || 'Immediate',
    };
    console.log('Booking request:', summary);
    const target = document.getElementById('services');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full relative z-40 mt-6 md:mt-8 -mb-20 sm:-mb-24" id="booking">
      {/* Top Tab Bar (Car Rental / Airport Rental) */}
      <div className="inline-flex items-center bg-white rounded-t-2xl px-3 sm:px-4 pt-3 pb-2 gap-2 shadow-sm border-t border-l border-r border-slate-100">
        {/* Car Rental Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('car')}
          className={`px-6 sm:px-7 py-2.5 text-base font-semibold rounded-xl transition-all cursor-pointer ${
            activeTab === 'car'
              ? 'bg-[#141518] text-white shadow-sm'
              : 'text-slate-800 hover:text-black bg-transparent'
          }`}
        >
          Car Rental
        </button>

        {/* Airport Rental Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('airport')}
          className={`px-6 sm:px-7 py-2.5 text-base font-semibold rounded-xl transition-all cursor-pointer ${
            activeTab === 'airport'
              ? 'bg-[#141518] text-white shadow-sm'
              : 'text-slate-800 hover:text-black bg-transparent'
          }`}
        >
          Airport Rental
        </button>
      </div>

      {/* Main Booking Card Container */}
      <div className="bg-white rounded-2xl sm:rounded-3xl rounded-tl-none shadow-2xl shadow-slate-900/10 border border-slate-100 p-6 sm:p-8 md:p-9">
        <form onSubmit={handleContinue}>
          {/* 4 Input Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-5 md:gap-0 pb-6 border-b border-slate-100">
            {/* Field 1: Choose a Car */}
            <div className="relative md:pr-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1.5">
                <img src={carIcon} alt="Car" className="w-5 h-5 object-contain shrink-0" />
                <label className="text-base font-semibold text-slate-900 flex items-center">
                  Choose a Car <span className="text-red-500 font-bold ml-1">*</span>
                </label>
              </div>

              <div
                className="flex items-center justify-between cursor-pointer py-1 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => {
                  setIsCarDropdownOpen(!isCarDropdownOpen);
                  setIsAirportDropdownOpen(false);
                }}
              >
                <span
                  className={`text-sm truncate ${
                    carType === 'Select Car Type' ? 'text-slate-400 font-normal' : 'text-slate-900 font-semibold'
                  }`}
                >
                  {carType}
                </span>
                <img
                  src={downArrowIcon}
                  alt=""
                  className={`w-3.5 h-auto object-contain opacity-75 transition-transform ${isCarDropdownOpen ? 'rotate-180' : ''}`}
                />
              </div>

              {/* Dropdown Menu */}
              {isCarDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95">
                  {carOptions.map((opt) => (
                    <button
                      key={opt.name}
                      type="button"
                      className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-slate-800 hover:bg-blue-50 hover:text-[#0052FF] flex items-center justify-between transition-colors cursor-pointer"
                      onClick={() => {
                        setCarType(opt.name);
                        setIsCarDropdownOpen(false);
                      }}
                    >
                      <span className="font-semibold">{opt.name}</span>
                      <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {opt.seats}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Divider 1 */}
            <div className="hidden md:block w-px h-10 bg-slate-200/80 shrink-0 self-center" />

            {/* Field 2: Pickup Location / Pickup Airport */}
            <div className="md:px-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1.5">
                <img src={pickupDotIcon} alt="Pickup" className="w-5 h-5 object-contain shrink-0" />
                <label htmlFor="pickup-input" className="text-base font-semibold text-slate-900 flex items-center">
                  {activeTab === 'airport' && airportTripType === 'from-airport' ? 'Pickup Airport' : 'Pickup Location'}
                  <span className="text-red-500 font-bold ml-1">*</span>
                </label>
              </div>

              {activeTab === 'airport' && airportTripType === 'from-airport' ? (
                /* Airport Dropdown */
                <div className="relative">
                  <div
                    className="flex items-center justify-between cursor-pointer py-1 hover:bg-slate-50 rounded-lg transition-colors"
                    onClick={() => {
                      setIsAirportDropdownOpen(!isAirportDropdownOpen);
                      setIsCarDropdownOpen(false);
                    }}
                  >
                    <span
                      className={`text-sm truncate ${
                        selectedAirport === 'Select Airport' ? 'text-slate-400 font-normal' : 'text-slate-900 font-semibold'
                      }`}
                    >
                      {selectedAirport}
                    </span>
                    <img src={downArrowIcon} alt="" className="w-3.5 h-auto object-contain opacity-75" />
                  </div>

                  {isAirportDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 max-h-60 overflow-y-auto">
                      {airportOptions.map((apt) => (
                        <button
                          key={apt}
                          type="button"
                          className="w-full text-left px-4 py-2 text-xs sm:text-sm text-slate-800 hover:bg-blue-50 hover:text-[#0052FF] font-medium"
                          onClick={() => {
                            setSelectedAirport(apt);
                            setIsAirportDropdownOpen(false);
                          }}
                        >
                          {apt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Regular Pickup Input */
                <input
                  id="pickup-input"
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Enter Pickup Location"
                  className="text-sm text-slate-900 placeholder:text-slate-400 font-normal bg-transparent outline-none w-full py-1 truncate"
                />
              )}
            </div>

            {/* Divider 2 */}
            <div className="hidden md:block w-px h-10 bg-slate-200/80 shrink-0 self-center" />

            {/* Field 3: Drop-off Location / Drop-off Airport */}
            <div className="md:px-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1.5">
                <img src={dropoffPinIcon} alt="Dropoff" className="w-5 h-5 object-contain shrink-0" />
                <label htmlFor="dropoff-input" className="text-base font-semibold text-slate-900 flex items-center">
                  {activeTab === 'airport' && airportTripType === 'to-airport' ? 'Drop-off Airport' : 'Drop-off Location'}
                  <span className="text-red-500 font-bold ml-1">*</span>
                </label>
              </div>

              {activeTab === 'airport' && airportTripType === 'to-airport' ? (
                /* Airport Dropdown */
                <div className="relative">
                  <div
                    className="flex items-center justify-between cursor-pointer py-1 hover:bg-slate-50 rounded-lg transition-colors"
                    onClick={() => {
                      setIsAirportDropdownOpen(!isAirportDropdownOpen);
                      setIsCarDropdownOpen(false);
                    }}
                  >
                    <span
                      className={`text-sm truncate ${
                        selectedAirport === 'Select Airport' ? 'text-slate-400 font-normal' : 'text-slate-900 font-semibold'
                      }`}
                    >
                      {selectedAirport}
                    </span>
                    <img src={downArrowIcon} alt="" className="w-3.5 h-auto object-contain opacity-75" />
                  </div>

                  {isAirportDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 max-h-60 overflow-y-auto">
                      {airportOptions.map((apt) => (
                        <button
                          key={apt}
                          type="button"
                          className="w-full text-left px-4 py-2 text-xs sm:text-sm text-slate-800 hover:bg-blue-50 hover:text-[#0052FF] font-medium"
                          onClick={() => {
                            setSelectedAirport(apt);
                            setIsAirportDropdownOpen(false);
                          }}
                        >
                          {apt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Regular Dropoff Input */
                <input
                  id="dropoff-input"
                  type="text"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  placeholder="Enter Drop-off Location"
                  className="text-sm text-slate-900 placeholder:text-slate-400 font-normal bg-transparent outline-none w-full py-1 truncate"
                />
              )}
            </div>

            {/* Divider 3 */}
            <div className="hidden md:block w-px h-10 bg-slate-200/80 shrink-0 self-center" />

            {/* Field 4: Pickup Date & Time */}
            <div className="md:pl-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1.5">
                <img src={calendarIcon} alt="Calendar" className="w-5 h-5 object-contain shrink-0" />
                <label htmlFor="datetime-input" className="text-base font-semibold text-slate-900 flex items-center">
                  Pickup Date & Time <span className="text-red-500 font-bold ml-1">*</span>
                </label>
              </div>
              <input
                id="datetime-input"
                type="text"
                value={pickupDateTime}
                onChange={(e) => setPickupDateTime(e.target.value)}
                placeholder="MM/DD/YYYY 00:00 PM"
                className="text-sm text-slate-900 placeholder:text-slate-400 font-normal bg-transparent outline-none w-full py-1 truncate"
              />
            </div>
          </div>

          {/* Bottom Bar: Radio choices on left, Continue CTA on right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6">
            {/* Left Sub-Mode Radio Options */}
            {activeTab === 'car' ? (
              /* Car Rental Options: One Way / Round Way / Hourly */
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 select-none">
                {/* One Way */}
                <button
                  type="button"
                  onClick={() => setCarTripType('oneway')}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                    carTripType === 'oneway'
                      ? 'bg-[#F0F3FF]'
                      : 'bg-transparent hover:bg-slate-50'
                  }`}
                >
                  {carTripType === 'oneway' ? (
                    <span className="w-[18px] h-[18px] rounded-full border-2 border-[#0052FF] flex items-center justify-center shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0052FF]" />
                    </span>
                  ) : (
                    <span className="w-[18px] h-[18px] rounded-full bg-[#E5E7EB] shrink-0" />
                  )}
                  <span className={`text-[15px] ${carTripType === 'oneway' ? 'font-semibold text-slate-900' : 'font-semibold text-slate-700'}`}>
                    One Way
                  </span>
                </button>

                {/* Round Way */}
                <button
                  type="button"
                  onClick={() => setCarTripType('roundway')}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                    carTripType === 'roundway'
                      ? 'bg-[#F0F3FF]'
                      : 'bg-transparent hover:bg-slate-50'
                  }`}
                >
                  {carTripType === 'roundway' ? (
                    <span className="w-[18px] h-[18px] rounded-full border-2 border-[#0052FF] flex items-center justify-center shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0052FF]" />
                    </span>
                  ) : (
                    <span className="w-[18px] h-[18px] rounded-full bg-[#E5E7EB] shrink-0" />
                  )}
                  <span className={`text-[15px] ${carTripType === 'roundway' ? 'font-semibold text-slate-900' : 'font-semibold text-slate-700'}`}>
                    Round Way
                  </span>
                </button>

                {/* Hourly */}
                <button
                  type="button"
                  onClick={() => setCarTripType('hourly')}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                    carTripType === 'hourly'
                      ? 'bg-[#F0F3FF]'
                      : 'bg-transparent hover:bg-slate-50'
                  }`}
                >
                  {carTripType === 'hourly' ? (
                    <span className="w-[18px] h-[18px] rounded-full border-2 border-[#0052FF] flex items-center justify-center shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0052FF]" />
                    </span>
                  ) : (
                    <span className="w-[18px] h-[18px] rounded-full bg-[#E5E7EB] shrink-0" />
                  )}
                  <span className={`text-[15px] ${carTripType === 'hourly' ? 'font-semibold text-slate-900' : 'font-semibold text-slate-700'}`}>
                    Hourly
                  </span>
                </button>
              </div>
            ) : (
              /* Airport Rental Options: To Airport / From Airport */
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 select-none">
                {/* To Airport */}
                <button
                  type="button"
                  onClick={() => setAirportTripType('to-airport')}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                    airportTripType === 'to-airport'
                      ? 'bg-[#F0F3FF]'
                      : 'bg-transparent hover:bg-slate-50'
                  }`}
                >
                  {airportTripType === 'to-airport' ? (
                    <span className="w-[18px] h-[18px] rounded-full border-2 border-[#0052FF] flex items-center justify-center shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0052FF]" />
                    </span>
                  ) : (
                    <span className="w-[18px] h-[18px] rounded-full bg-[#E5E7EB] shrink-0" />
                  )}
                  <span className={`text-[15px] ${airportTripType === 'to-airport' ? 'font-semibold text-slate-900' : 'font-semibold text-slate-700'}`}>
                    To Airport
                  </span>
                </button>

                {/* From Airport */}
                <button
                  type="button"
                  onClick={() => setAirportTripType('from-airport')}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                    airportTripType === 'from-airport'
                      ? 'bg-[#F0F3FF]'
                      : 'bg-transparent hover:bg-slate-50'
                  }`}
                >
                  {airportTripType === 'from-airport' ? (
                    <span className="w-[18px] h-[18px] rounded-full border-2 border-[#0052FF] flex items-center justify-center shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0052FF]" />
                    </span>
                  ) : (
                    <span className="w-[18px] h-[18px] rounded-full bg-[#E5E7EB] shrink-0" />
                  )}
                  <span className={`text-[15px] ${airportTripType === 'from-airport' ? 'font-semibold text-slate-900' : 'font-semibold text-slate-700'}`}>
                    From Airport
                  </span>
                </button>
              </div>
            )}

            {/* Continue CTA Button */}
            <Button
              type="submit"
              size="lg"
              className="bg-[#0052FF] text-white hover:bg-[#0045D8] px-10 py-3.5 text-[18px] font-semibold rounded-xl shadow-lg shadow-[#0052FF]/25 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Continue</span>
              <ArrowRight size={18} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
