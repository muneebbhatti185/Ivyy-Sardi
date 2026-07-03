import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  tabLabel: string;
  subtitle: string;
  badge: string;
  quote: string;
  highlights: string[];
  avatarUrl: string;
  role: string;
}

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isHoveredPlay, setIsHoveredPlay] = useState<boolean>(false);

  const testimonials: Testimonial[] = [
    {
      name: 'JJ',
      tabLabel: 'JJ — Corporate VP',
      subtitle: 'Corporate VP & Father • Age 42',
      badge: '✓ Lost 20kg & restored absolute standard',
      quote: "Before finding Ivy's program, I was in a perpetual loop of starting fresh on Mondays and crashing by Friday. Ivy helped me build routines that don't depend on my mood. Lost 20kg and saved my marriage.",
      highlights: ['✓ Dropped 20kg', '✓ Restored morning energy', '✓ Extreme accountability'],
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      role: 'Corporate VP'
    },
    {
      name: 'Kenny',
      tabLabel: 'Kenny — Business Owner',
      subtitle: 'Business Owner • Age 38',
      badge: '✓ From chronically tired to present elite father',
      quote: "My health was taking a back seat to my business. I rationalized it. But truth is, I was lazy. Ivy's standards-based approach changed everything. No complex meal plans — just simple, animal-based eating and progressive strength training. My boys have a real role model now.",
      highlights: ['✓ 12% Body fat achieved', '✓ Doubled squat weight', '✓ No decision fatigue'],
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      role: 'Business Owner'
    },
    {
      name: 'Riley',
      tabLabel: 'Riley — Tech Consultant',
      subtitle: 'Tech Consultant • Age 49',
      badge: '✓ Complete body recomp & absolute mental clarity',
      quote: "I thought at 49, my prime was behind me. Ivy showed me that my age was an excuse. The system works because of the weekly KPIs. You cannot hide, you cannot drift. If you want a soft coach, look elsewhere. Ivy is demanding, and that's why it works.",
      highlights: ['✓ Lean body recomp', '✓ Eliminated brain fog', '✓ 7-day streak tracking'],
      avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100',
      role: 'Tech Consultant'
    }
  ];

  const current = testimonials[activeTab];

  return (
    <section id="results" className="py-20 border-t border-white/5 bg-[#0F0F0F]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide text-white font-bold">
            Real Men. Real Results.
          </h2>
          <p className="text-[#A0A0A0] mt-3 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            These are normal men with families and high-pressure jobs who realized motivation is a lie, and standards are everything.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Play Button & Tabs */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 flex flex-col justify-between border border-white/5 shadow-xl relative min-h-[460px]">
            
            {/* Center Play Button Area */}
            <div className="flex-1 flex flex-col items-center justify-center my-8 text-center">
              <button 
                onMouseEnter={() => setIsHoveredPlay(true)}
                onMouseLeave={() => setIsHoveredPlay(false)}
                className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#D4882A] text-white transition-transform duration-300 hover:scale-110 shadow-[0_0_20px_rgba(212,136,42,0.3)] cursor-pointer"
                title="Play Case Study Reel"
                id="play-reel-btn"
              >
                {/* Visual ripple effect on hover */}
                {isHoveredPlay && (
                  <span className="absolute inset-0 rounded-full bg-[#D4882A]/30 animate-ping" />
                )}
                <Play className="h-8 w-8 fill-white text-white translate-x-0.5" />
              </button>
              
              <span className="text-white font-bold uppercase tracking-widest text-sm mt-5">
                PLAY CASE STUDY REEL
              </span>
            </div>

            {/* Bottom: 3 Client cards side-by-side */}
            <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-6 mt-auto">
              {testimonials.map((t, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={t.name}
                    onClick={() => setActiveTab(idx)}
                    className={`flex flex-col items-center justify-center text-center bg-[#1A1A1A] rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border-2 border-[#D4882A]'
                        : 'border-2 border-[#2A2A2A] hover:border-[#D4882A]/30'
                    }`}
                  >
                    {/* Circle image top center */}
                    <div className="relative h-[60px] w-[60px] shrink-0 mb-3">
                      <img 
                        src={t.avatarUrl} 
                        alt={t.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover rounded-full border-2 border-[#D4882A]"
                      />
                    </div>
                    {/* Name */}
                    <span className={`text-sm font-bold block leading-tight transition-colors ${
                      isActive ? 'text-[#D4882A]' : 'text-white'
                    }`}>
                      {t.name}
                    </span>
                    {/* Role */}
                    <span className="text-xs text-[#A0A0A0] mt-1 block leading-tight truncate max-w-full">
                      {t.role}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Card: Client Quote Details */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 flex flex-col justify-between border border-white/5 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  {/* Top row with 5 gold stars & faded quote symbol */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 text-[#D4882A]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-6xl font-serif text-[#D4882A]/10 leading-none select-none">❝</span>
                  </div>

                  {/* Client Info */}
                  <div className="space-y-3">
                    <h3 className="text-[28px] font-bold text-white tracking-tight leading-none">
                      {current.name}
                    </h3>
                    <p className="text-sm text-[#A0A0A0]">
                      {current.subtitle}
                    </p>
                    
                    {/* Gold Badge */}
                    <div className="inline-block rounded-lg border border-[#D4882A] px-3.5 py-1.5 bg-[#D4882A]/5">
                      <span className="text-xs font-semibold text-[#D4882A] tracking-wide uppercase">
                        {current.badge}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-base text-[#A0A0A0] italic leading-relaxed pt-3">
                      "{current.quote}"
                    </p>
                  </div>
                </div>

                {/* KPI Metrics */}
                <div className="mt-8">
                  {/* Divider line */}
                  <div className="h-px bg-[#2A2A2A] w-full mb-6" />

                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#A0A0A0] block mb-4">
                    MILESTONE KPIs MET:
                  </span>
                  
                  <div className="flex flex-wrap gap-2">
                    {current.highlights.map((h, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-semibold border border-[#D4882A] text-[#D4882A] px-3.5 py-1.5 rounded-lg bg-[#D4882A]/5"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
