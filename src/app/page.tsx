"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { STEALTH_MESSAGING } from '@/data/stealth';
import { useState, useRef } from 'react';
import FluidBackground from '@/components/home/FluidBackground';
import Image from 'next/image';

// Animation variants for initial load - smooth, no bounce
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as any, // Smooth ease-out
    },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as any, // Smooth ease-out
    },
  },
};

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  // Main hero scroll tracking - this controls both text transitions
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Smooth scroll progress without bounce
  const smoothProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
    ease: (t: number) => t // Linear, no bounce
  });

  // === Flower AI TEXT (First half of scroll) ===
  // Zooms in dramatically and fades out
  const FlowerScale = useTransform(smoothProgress, [0, 0.35], [1, 3]);
  const FlowerOpacity = useTransform(smoothProgress, [0, 0.25, 0.4], [1, 1, 0]);
  const FlowerY = useTransform(smoothProgress, [0, 0.4], [0, -50]);
  const FlowerBlurValue = useTransform(smoothProgress, [0.2, 0.4], [0, 30]);
  const FlowerBlur = useMotionTemplate`blur(${FlowerBlurValue}px)`;

  // === SOMETHING BIG IS COMING TEXT (Second half of scroll) ===
  // Fades in as Flower AI fades out, stays centered
  const comingScale = useTransform(smoothProgress, [0.3, 0.5, 0.8], [0.7, 1, 1]);
  const comingOpacity = useTransform(smoothProgress, [0.3, 0.5, 0.85, 1], [0, 1, 1, 0]);
  const comingY = useTransform(smoothProgress, [0.3, 0.5], [80, 0]);
  const comingBlurValue = useTransform(smoothProgress, [0.3, 0.45], [20, 0]);
  const comingBlur = useMotionTemplate`blur(${comingBlurValue}px)`;

  // Keep Scrolling indicator - fades out before reaching mission section
  const keepScrollingOpacity = useTransform(smoothProgress, [0.5, 0.7, 0.8], [0, 1, 0]);

  // Scroll indicator fades out early
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  // Mission section - dramatic entrance
  const { scrollYProgress: missionScrollProgress } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"]
  });

  // Dramatic scale entrance (no blur)
  const missionScale = useTransform(missionScrollProgress, [0, 0.25, 0.7, 1], [0.8, 1, 1, 0.95]);
  const missionY = useTransform(missionScrollProgress, [0, 0.25, 0.75, 1], [150, 0, 0, -50]);
  const missionOpacity = useTransform(missionScrollProgress, [0, 0.2, 0.75, 1], [0, 1, 1, 0]);

  // Background glow animation
  const glowScale = useTransform(missionScrollProgress, [0, 0.3, 0.7, 1], [0.5, 1.2, 1.2, 0.8]);
  const glowOpacity = useTransform(missionScrollProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <main className="min-h-screen bg-[#0F0A1F] relative">
      {/* Hero Section - Contains both Flower AI and Something Big is Coming */}
      <section ref={heroRef} className="relative min-h-[300vh]">
        {/* Fixed Background - Blue Wave stays throughout */}
        <div className="fixed inset-0 z-0">
          <FluidBackground />
        </div>

        {/* Fixed Content Container - Stays centered on screen */}
        <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
          {/* Flower AI Content */}
          <motion.div
            style={{
              scale: FlowerScale,
              opacity: FlowerOpacity,
              y: FlowerY,
              filter: FlowerBlur,
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-auto pt-16 sm:pt-20"
          >
            <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center justify-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center"
              >
                {/* Stealth Badge */}
                <motion.div variants={itemVariants} className="mb-4 sm:mb-5 md:mb-6">
                  <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.25em] text-white/40">
                    <span className="w-1 h-1 rounded-full bg-pink-400 animate-pulse" />
                    Stealth Mode
                  </span>
                </motion.div>

                {/* Main Logo/Title */}
                <motion.div variants={scaleVariants} className="mb-4 sm:mb-6 md:mb-8 flex flex-col items-center">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] leading-[0.9] uppercase">
                    <span className="block text-white">Flower</span>
                    <span className="block text-primary">AI</span>
                  </h1>
                </motion.div>

                {/* Divider Line */}
                <motion.div variants={itemVariants} className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                  <div className="h-px w-16 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>

                {/* Tagline */}
                <motion.h2
                  variants={itemVariants}
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wide mb-2 sm:mb-3 text-white/70 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto"
                >
                  {STEALTH_MESSAGING.tagline}
                </motion.h2>

                {/* Subtext */}
                <motion.p
                  variants={itemVariants}
                  className="text-[8px] sm:text-[10px] md:text-xs font-normal uppercase tracking-[0.3em] sm:tracking-[0.5em] text-white/30 mb-6 sm:mb-8 md:mb-10"
                >
                  Coming Soon
                </motion.p>

                {/* Email Signup */}
                <motion.div variants={itemVariants} className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  {!subscribed ? (
                    <form
                      onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
                      className="relative"
                    >
                      {/* Inline layout on all sizes */}
                      <div className="flex p-1 bg-white/[0.02] border border-white/[0.06] rounded-full focus-within:border-white/[0.12] transition-all duration-700 backdrop-blur-sm">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="bg-transparent px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none flex-1 font-light tracking-wide min-w-0 text-white/80"
                        />
                        <button
                          type="submit"
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          className="bg-white/90 hover:bg-white text-black text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.1em] px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-500 active:scale-[0.98] whitespace-nowrap"
                        >
                          Notify Me
                        </button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 bg-white/[0.02] border border-white/[0.06] rounded-full text-xs sm:text-sm font-light text-white/50 tracking-wide"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      You&apos;re on the list
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* SOMETHING BIG IS COMING Content */}
          <motion.div
            style={{
              scale: comingScale,
              opacity: comingOpacity,
              y: comingY,
              filter: comingBlur,
            }}
            className="absolute inset-0 flex items-center justify-center pt-16 sm:pt-20"
          >
            <div className="text-center px-4 sm:px-6 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
              {/* Phase Badge */}
              <div className="mb-6 sm:mb-8 md:mb-10">
                <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-primary/[0.06] border border-primary/[0.12] backdrop-blur-sm text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.2em] text-primary/80">
                  <span className="flex gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-primary/80 animate-pulse" />
                    <span className="w-1 h-1 rounded-full bg-primary/80 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1 h-1 rounded-full bg-primary/80 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </span>
                  Something Beautiful is Blooming
                </span>
              </div>

              {/* Main Headline */}
              <div className="relative mb-6 sm:mb-8 md:mb-12">
                {/* Shadow Glow Text */}
                <h2 className="absolute inset-0 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight text-pink-500/5 blur-3xl select-none pointer-events-none">
                  Something Big is Coming
                </h2>

                <h2 className="relative text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight leading-[0.95]">
                  <span className="block text-white/90 mb-1 sm:mb-2">Something</span>
                  <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary italic pr-2">Beautiful</span>
                    <span className="text-white/90"> is Blooming</span>
                  </span>
                </h2>
              </div>

              {/* Animated Line */}
              <div className="w-16 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent mx-auto mb-6 sm:mb-8 md:mb-12" />

              {/* Subtext */}
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-px h-10 sm:h-12 md:h-16 bg-gradient-to-b from-pink-500/50 to-transparent" />
                </motion.div>
                <p className="text-slate-500 font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[8px] sm:text-[10px] md:text-xs">
                  Wait for the announcement
                </p>
              </div>

              {/* Scroll Guide - fades out before mission section */}
              <motion.div
                style={{ opacity: keepScrollingOpacity }}
                className="fixed bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-20"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-2 sm:gap-3"
                >
                  <span className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/25">Keep Scrolling</span>
                  <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 sm:p-2">
                    <motion.div
                      animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-white/40 rounded-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator - Fixed at bottom */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="fixed bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="flex flex-col items-center gap-2 sm:gap-3"
            >
              <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/30">Scroll</span>
              <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Particles - Fixed position */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-primary/20 rounded-full"
              style={{
                left: `${(i * 10) % 100}%`,
                top: `${(i * 15) % 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 20 + (i % 5) * 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.8
              }}
            />
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="relative py-16 sm:py-24 md:py-32 lg:py-48 overflow-hidden z-10 bg-[#0F0A1F]">
        {/* Background Elements */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Animated Glow Background */}
        <motion.div
          style={{ scale: glowScale, opacity: glowOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] h-[300px] sm:h-[500px] md:h-[700px] lg:h-[1000px] bg-gradient-radial from-primary/10 via-pink-500/5 to-transparent rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"
        />

        {/* Secondary Glow */}
        <motion.div
          style={{ scale: glowScale, opacity: glowOpacity }}
          className="absolute top-1/3 right-1/4 w-[200px] sm:w-[400px] md:w-[600px] h-[200px] sm:h-[400px] md:h-[600px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"
        />

        <motion.div
          style={{
            y: missionY,
            opacity: missionOpacity,
            scale: missionScale,
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center relative z-10"
        >
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary mb-4 sm:mb-6"
            >
              Our Vision
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 sm:mb-6 md:mb-8 tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Building software that gives you{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 1.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-gradient-animate italic inline-block pr-2"
              >
                Superhuman
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                capabilities.
              </motion.span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-xl"
            >
              {STEALTH_MESSAGING.mission}
            </motion.p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card-hover p-4 sm:p-6 rounded-xl sm:rounded-2xl"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 sm:mb-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xs sm:text-sm tracking-wide mb-1 sm:mb-2">State-of-the-Art</h4>
                <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed">Leveraging the latest neural architectures to redefine interaction.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card-hover p-4 sm:p-6 rounded-xl sm:rounded-2xl"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 sm:mb-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xs sm:text-sm tracking-wide mb-1 sm:mb-2">Empowerment</h4>
                <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed">Scaling human potential through frictionless AI integration.</p>
              </motion.div>
            </div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] blur-2xl sm:blur-3xl" />
            <div className="glass-card p-1 relative aspect-square rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden group max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none mx-auto">
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-grid opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

              {/* Rotating Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 border border-white/5 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 border border-white/10 rounded-full flex items-center justify-center"
                  >
                    <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                      {/* Central Glow */}
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl sm:blur-2xl" />

                      {/* Logo - On top of glow, not blurred */}
                      <div className="relative z-10 w-full h-full p-3 sm:p-4">
                        <Image
                          src="/images/flower-ai/logo.png"
                          alt="Flower AI Logo"
                          fill
                          className="object-contain drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Status Card */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 p-3 sm:p-4 md:p-6 glass-card rounded-xl sm:rounded-2xl border-white/10">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] opacity-50">Operational Status</p>
                </div>
                <p className="text-xs sm:text-sm font-semibold tracking-wide">Stealth Deployment v1.0.4</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
