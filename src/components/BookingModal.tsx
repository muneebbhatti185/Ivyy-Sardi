import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, ChevronRight, CheckCircle2, Award, ShieldAlert } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '30-39',
    commitment: '9',
    challenge: 'Stuck in start-stop loop',
  });

  const dates = [
    { day: 'Mon', date: 'Jul 6', full: 'Monday, July 6' },
    { day: 'Tue', date: 'Jul 7', full: 'Tuesday, July 7' },
    { day: 'Wed', date: 'Jul 8', full: 'Wednesday, July 8' },
    { day: 'Thu', date: 'Jul 9', full: 'Thursday, July 9' },
    { day: 'Fri', date: 'Jul 10', full: 'Friday, July 10' },
  ];

  const timeSlots = [
    '08:00 AM', '09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 1 && (!selectedDate || !selectedTime)) {
      alert('Please select an available date and time slot first.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out all contact details.');
      return;
    }
    setStep(3); // Go to confirmation
  };

  const resetModal = () => {
    setStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '30-39',
      commitment: '9',
      challenge: 'Stuck in start-stop loop',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-brand-gold/30 bg-[#161616] text-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">Elite Pre-Qualification</span>
              </div>
              <button 
                onClick={resetModal}
                className="rounded-full p-1.5 text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
                id="close-booking-modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Steps Progress */}
            <div className="grid grid-cols-3 border-b border-white/5 bg-black/20 text-center text-xs text-gray-400">
              <div className={`py-2 border-b-2 transition-all duration-300 ${step === 1 ? 'border-brand-gold text-brand-gold font-bold' : 'border-transparent'}`}>
                1. Select Time
              </div>
              <div className={`py-2 border-b-2 transition-all duration-300 ${step === 2 ? 'border-brand-gold text-brand-gold font-bold' : 'border-transparent'}`}>
                2. Application Info
              </div>
              <div className={`py-2 border-b-2 transition-all duration-300 ${step === 3 ? 'border-brand-gold text-brand-gold font-bold' : 'border-transparent'}`}>
                3. Confirmed
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center md:text-left">
                    <h3 className="font-bebas text-3xl tracking-wide text-white">Book Your Free Clarity Call</h3>
                    <p className="text-sm text-gray-400">Secure a private 1-on-1 strategy call directly with Ivy Sardi. Space is strictly limited.</p>
                  </div>

                  {/* Date Picker */}
                  <div className="space-y-3">
                    <label className="text-xs font-semibold tracking-wider text-gray-300 uppercase flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand-gold" /> Select A Date
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {dates.map((d) => (
                        <button
                          key={d.full}
                          type="button"
                          onClick={() => setSelectedDate(d.full)}
                          className={`flex flex-col items-center justify-center rounded-lg border py-3 transition-all ${
                            selectedDate === d.full
                              ? 'border-brand-gold bg-brand-gold/15 text-white shadow-[0_0_15px_rgba(212,136,42,0.1)]'
                              : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <span className="text-2xs uppercase tracking-wider">{d.day}</span>
                          <span className="text-base font-bold text-white mt-1">{d.date.split(' ')[1]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <label className="text-xs font-semibold tracking-wider text-gray-300 uppercase flex items-center gap-2">
                        <Clock className="h-4 w-4 text-brand-gold" /> Select Time Slot (Your Local Time)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`rounded-lg border py-2.5 text-sm transition-all text-center ${
                              selectedTime === time
                                ? 'border-brand-gold bg-brand-gold text-black font-bold'
                                : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="pt-4">
                    <button
                      onClick={handleNextStep}
                      disabled={!selectedDate || !selectedTime}
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${
                        selectedDate && selectedTime
                          ? 'bg-brand-gold text-black hover:bg-brand-gold/90 hover:scale-[1.01] cursor-pointer'
                          : 'bg-white/5 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Continue to Application <ChevronRight className="h-4 w-4" />
                    </button>
                    <p className="text-center text-3xs text-gray-500 mt-2">
                      *By proceeding, you commit to showing up. No-shows are permanently blacklisted from Ivy Sardi Coaching.
                    </p>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center md:text-left">
                    <h3 className="font-bebas text-3xl tracking-wide text-white">Pre-Qualification Application</h3>
                    <p className="text-sm text-gray-400">Fill in the short application below to confirm your slot for {selectedDate} at {selectedTime}.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-300 uppercase">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-brand-gold focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-300 uppercase">Age Range</label>
                      <select
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-white/10 bg-[#161616] px-4 py-2.5 text-sm text-white focus:border-brand-gold focus:outline-none"
                      >
                        <option value="30-39">30–39 Years Old</option>
                        <option value="40-49">40–49 Years Old</option>
                        <option value="50-55">50–55 Years Old</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-300 uppercase">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-brand-gold focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-300 uppercase">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-brand-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 uppercase">What is your biggest roadblock?</label>
                    <select
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-white/10 bg-[#161616] px-4 py-2.5 text-sm text-white focus:border-brand-gold focus:outline-none"
                    >
                      <option value="Stuck in start-stop loop">I start strong but stop after a few weeks (Start-stop loop)</option>
                      <option value="No structure">I lack a structured standard for my nutrition & fitness</option>
                      <option value="Low motivation">I have low energy and feel lost in my routine</option>
                      <option value="Time constrained">No time to balance training, business, and family</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-gray-300 uppercase">
                      <span>Commitment Level</span>
                      <span className="text-brand-gold font-bold">{formData.commitment}/10</span>
                    </div>
                    <input
                      type="range"
                      name="commitment"
                      min="1"
                      max="10"
                      value={formData.commitment}
                      onChange={handleInputChange}
                      className="w-full accent-brand-gold h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-3xs text-gray-400">1 = Just looking around | 10 = I am ready for absolute extreme accountability</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-brand-gold text-black font-bold uppercase tracking-wider text-sm hover:bg-brand-gold/90 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    Confirm & Complete Booking <CheckCircle2 className="h-4.5 w-4.5" />
                  </button>
                </form>
              )}

              {step === 3 && (
                <div className="text-center space-y-6 py-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bebas text-4xl tracking-wider text-white">Call Confirmed, {formData.name}!</h3>
                    <p className="text-brand-gold font-semibold text-sm">
                      {selectedDate} @ {selectedTime}
                    </p>
                    <p className="text-sm text-gray-400 max-w-md mx-auto">
                      Your application has been accepted. We have sent a calendar invite to <span className="text-white font-medium">{formData.email}</span> with video conference details.
                    </p>
                  </div>

                  {/* Warning / Standard Callout */}
                  <div className="mx-auto max-w-md rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-left flex gap-3">
                    <ShieldAlert className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider">A Personal Message from Ivy Sardi:</h4>
                      <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                        "I personally review every application. You have chosen to step up and book this call. If you cancel, do not show up, or make excuses, you will be permanently blacklisted from our workspace. Put this in your calendar as your first non-negotiable standard. See you on the call."
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={resetModal}
                    className="px-8 py-3 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-sm font-semibold transition-all uppercase tracking-wider"
                  >
                    Back to Landing Page
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
