import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  Youtube, 
  ArrowRight, 
  Check, 
  X, 
  ShieldCheck, 
  Menu, 
  ChevronRight, 
  Lock,
  CalendarCheck2,
  Shield, 
  Beef, 
  Dumbbell, 
  BarChart2, 
  CheckCircle, 
  XCircle, 
  Star, 
  Play
} from 'lucide-react';
import BookingModal from './components/BookingModal';
import TestimonialSection from './components/TestimonialSection';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  // Scroll animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white selection:bg-brand-gold selection:text-black">
      
      {/* SECTION 1 — Attention Bar */}
      <div 
        className="w-full bg-[#D4882A] text-black text-center py-3.5 px-4 font-extrabold tracking-widest text-xs sm:text-sm uppercase sticky top-0 z-40 shadow-md"
        id="attention-bar"
      >
        <span>ATTENTION: MEN 30–55 STUCK IN THE START-STOP LOOP</span>
      </div>

      {/* Header/Mini-Navbar to make it look premium and authentic */}
      <header className="w-full border-b border-white/5 bg-[#0F0F0F]/90 backdrop-blur-md py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bebas text-2xl tracking-wider text-white">IVY SARDI</span>
            <span className="text-3xs bg-brand-gold/10 text-brand-gold font-bold px-2 py-0.5 rounded border border-brand-gold/20 uppercase tracking-widest">COACHING</span>
          </div>
          
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 hover:border-brand-gold hover:bg-brand-gold/10 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <CalendarCheck2 className="h-4 w-4 text-brand-gold" />
            Apply Now
          </button>
        </div>
      </header>

      {/* SECTION 2 — Hero */}
      <section id="hero" className="py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle Ambient Background Glowing Accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          
          {/* Header Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
          >
            <Lock className="h-3.5 w-3.5 text-brand-gold" />
            <span>THE 180-DAY IDENTITY SHIFT METHOD</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wide text-white font-extrabold uppercase leading-tight max-w-3xl mx-auto"
          >
            Stop Restarting. Start Rebuilding Your Physique & Identity For Good.
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            A proven 180-day system for men ready to stop tolerating a lower version of themselves.
          </motion.p>

          {/* YouTube Video IFrame Embed */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[700px] mx-auto w-full rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black"
          >
            <div className="aspect-video w-full relative">
              <iframe
                id="vsl-iframe"
                className="w-full h-full"
                src="https://www.youtube.com/embed/Iw76UOZKJj8?rel=0"
                title="Ivy Sardi Coaching VSL"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-4"
          >
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-[#D4882A] text-white font-extrabold uppercase tracking-wider text-base sm:text-lg px-8 py-4.5 rounded-lg hover:bg-[#c37a23] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_25px_rgba(212,136,42,0.25)] cursor-pointer"
              id="cta-hero"
            >
              Book My Free Clarity Call <ArrowRight className="h-5 w-5 stroke-[2.5]" />
            </button>
            <p className="text-3xs text-gray-500 uppercase tracking-widest mt-3">
              No pressure. No fluff. 15 minutes that will shift your perspective.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3 — Results */}
      <section id="results-gallery" className="py-20 border-t border-white/5 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide text-white">Real Men. Real Rebuilds.</h2>
            <div className="h-1 w-16 bg-[#D4882A] mx-auto mt-4 rounded-full" />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* JJ */}
            <motion.div 
              variants={fadeInVariant}
              className="group relative rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                {/* Background image */}
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600" 
                  alt="JJ transformation" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Visual Dark Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Information badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-2xs font-extrabold text-[#D4882A] uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded border border-brand-gold/20">
                    100% STANDARDS MET
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2.5">JJ</h3>
                  <p className="text-sm text-[#A0A0A0] mt-0.5">Lost 20kg in 12 months</p>
                </div>
              </div>
            </motion.div>

            {/* Kenny */}
            <motion.div 
              variants={fadeInVariant}
              className="group relative rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600" 
                  alt="Kenny transformation" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-2xs font-extrabold text-[#D4882A] uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded border border-brand-gold/20">
                    FATHER & ROLE MODEL
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2.5">Kenny</h3>
                  <p className="text-sm text-[#A0A0A0] mt-0.5">Lean, strong, present father</p>
                </div>
              </div>
            </motion.div>

            {/* Riley */}
            <motion.div 
              variants={fadeInVariant}
              className="group relative rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600" 
                  alt="Riley transformation" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-2xs font-extrabold text-[#D4882A] uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded border border-brand-gold/20">
                    MENTAL OPTIMIZATION
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2.5">Riley</h3>
                  <p className="text-sm text-[#A0A0A0] mt-0.5">Body recomp, mental clarity</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — Testimonial (Render detailed TestimonialSection component) */}
      <TestimonialSection />

      {/* SECTION 5 — About Ivy */}
      <section id="about" className="py-20 border-t border-white/5 bg-black/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-xl"
            >
              <img 
                src="https://raw.githubusercontent.com/muneebbhatti185/Ivyy-Image/main/Ivy%20Sardi.png" 
                alt="Ivy Sardi background" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Bottom gradient overlay to make text integration pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-[#D4882A] text-black text-[10px] uppercase font-black px-3 py-1.5 rounded tracking-widest">
                IVY SARDI — FOUNDER
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4882A]">THE MAN BEHIND THE SYSTEM</span>
              <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide text-white leading-tight">
                From Prison Cell To 1% Man
              </h2>
              <div className="h-0.5 w-16 bg-[#D4882A]" />
              
              <div className="space-y-4 text-base text-[#A0A0A0] leading-relaxed">
                <p>
                  10 years ago I was lost, depressed, and ended up in prison. I didn't change because of motivation — I changed because I built non-negotiable standards.
                </p>
                <p>
                  Today I help men aged 30–55 rebuild their body and identity using the same system that changed my life.
                </p>
                <p className="text-white font-medium italic">
                  "Motivation gets you started. But standard structure is the only thing that survives when life hits you hard. You do not need another routine — you need an identity rebuild."
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider text-xs border-b border-[#D4882A] pb-1 hover:text-[#D4882A] hover:border-white transition-all duration-300"
                >
                  Apply For Direct Coaching Direct Access <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — 4 Pillars */}
      <section id="pillars" className="py-20 border-t border-white/5 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4882A]">ENGINEERED CONSISTENCY</span>
            <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide text-white">The System That Works</h2>
            <p className="text-[#A0A0A0] text-sm max-w-xl mx-auto">4 pillars engineered to replace decision fatigue with results.</p>
            <div className="h-0.5 w-16 bg-[#D4882A] mx-auto mt-4" />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Pillar 1 */}
            <motion.div 
              variants={fadeInVariant}
              className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 hover:border-[#D4882A]/30 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#D4882A]/30 transition-colors">
                <Shield size={32} color="#D4882A" />
              </div>
              <h3 className="text-lg font-bold text-white mt-5">Standards & Structure</h3>
              <p className="text-sm text-[#A0A0A0] mt-2.5 leading-relaxed">
                Daily non-negotiables that work on good days and bad days.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              variants={fadeInVariant}
              className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 hover:border-[#D4882A]/30 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#D4882A]/30 transition-colors">
                <Beef size={32} color="#D4882A" />
              </div>
              <h3 className="text-lg font-bold text-white mt-5">Nutrition Simplified</h3>
              <p className="text-sm text-[#A0A0A0] mt-2.5 leading-relaxed">
                Animal-based eating that removes chaos and builds consistency.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              variants={fadeInVariant}
              className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 hover:border-[#D4882A]/30 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#D4882A]/30 transition-colors">
                <Dumbbell size={32} color="#D4882A" />
              </div>
              <h3 className="text-lg font-bold text-white mt-5">Training That Builds Strength</h3>
              <p className="text-sm text-[#A0A0A0] mt-2.5 leading-relaxed">
                Progressive routines that give you undeniable proof of progress.
              </p>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div 
              variants={fadeInVariant}
              className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 hover:border-[#D4882A]/30 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#D4882A]/30 transition-colors">
                <BarChart2 size={32} color="#D4882A" />
              </div>
              <h3 className="text-lg font-bold text-white mt-5">Accountability & KPIs</h3>
              <p className="text-sm text-[#A0A0A0] mt-2.5 leading-relaxed">
                Weekly check-ins so you never drift or go silent again.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — Who This Is For */}
      <section id="qualification" className="py-20 border-t border-white/5 bg-black/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide text-white">Is This You?</h2>
            <p className="text-xs font-semibold text-[#D4882A] uppercase tracking-widest mt-2">Filter Yourself before we filter you.</p>
            <div className="h-0.5 w-16 bg-[#D4882A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column — This IS for you */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1A1A1A] border-l-4 border-emerald-500 rounded-r-xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-center gap-3">
                <CheckCircle size={20} color="#D4882A" />
                <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">This IS for you:</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Men aged 30–55</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Stuck in the start-stop loop</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Ready for extreme accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Want lasting change, not a 6-week fix</span>
                </li>
              </ul>
            </motion.div>

            {/* Right Column — This is NOT for you */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#1A1A1A] border-l-4 border-red-500 rounded-r-xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-center gap-3">
                <XCircle size={20} color="#6B6B6B" />
                <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">This is NOT for you:</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Looking for quick motivation</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Want a 6-week shred</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Not ready to face hard truths</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 8 — Final CTA */}
      <section id="cta-section" className="py-20 bg-[#D4882A] text-black relative overflow-hidden">
        {/* Pattern styling inside final CTA */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide text-black font-extrabold uppercase">
            Ready To Rebuild? Let's See If You're A Fit.
          </h2>
          <p className="text-black/80 font-medium text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Book a free clarity call. No pressure, no pitch — just an honest conversation.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-black text-white hover:bg-black/90 hover:scale-[1.02] active:scale-[0.98] font-extrabold uppercase tracking-wider text-sm sm:text-base px-8 py-4 rounded-lg transition-all shadow-xl cursor-pointer"
              id="cta-bottom"
            >
              Book My Free Clarity Call →
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 text-xs font-bold text-black/60 pt-2 uppercase tracking-widest">
            <ShieldCheck className="h-4 w-4" /> Strictly private, 100% confidential
          </div>
        </div>
      </section>

      {/* SECTION 9 — Footer */}
      <footer className="py-12 bg-[#0F0F0F] border-t border-white/5 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
            
            {/* Logo/Brand */}
            <div className="text-center md:text-left">
              <span className="font-bebas text-2xl tracking-wider text-white uppercase">Ivy Sardi Coaching</span>
              <p className="text-3xs text-gray-500 uppercase tracking-widest mt-1">Identity over motivation.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer noopener"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-brand-gold transition-all"
                title="Follow on Instagram"
                id="social-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer noopener"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-brand-gold transition-all"
                title="Subscribe on YouTube"
                id="social-youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>

          </div>

          {/* Copyright */}
          <div className="pt-8 text-center text-xs text-gray-500">
            <p>© 2025 Ivy Sardi Coaching. All Rights Reserved.</p>
          </div>

        </div>
      </footer>

      {/* High Converting Application/Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

    </div>
  );
}
