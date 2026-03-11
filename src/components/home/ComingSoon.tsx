"use client";

import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';

export default function ComingSoon() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    // Text starts zoomed out and scales to normal as you scroll into view
    const textScale = useTransform(smoothProgress, [0, 0.3, 0.5, 0.7, 1], [0.6, 0.9, 1, 1, 0.9]);
    const textOpacity = useTransform(smoothProgress, [0, 0.2, 0.4, 0.7, 1], [0, 0.5, 1, 1, 0]);
    const textY = useTransform(smoothProgress, [0, 0.3, 0.5, 0.7, 1], [150, 50, 0, 0, -100]);

    // Blur effect - starts blurry, becomes sharp, then blurs out
    const blurValue = useTransform(smoothProgress, [0, 0.25, 0.4, 0.7, 1], [15, 5, 0, 0, 10]);
    const textBlur = useMotionTemplate`blur(${blurValue}px)`;

    // Parallax for background elements
    const bgY1 = useTransform(smoothProgress, [0, 1], [-200, 200]);
    const bgY2 = useTransform(smoothProgress, [0, 1], [200, -200]);
    const bgScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

    // Background color intensity
    const bgIntensity = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0.5, 1, 1, 0.5]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[150vh] flex items-start justify-center bg-[#0F0A1F] overflow-hidden"
        >
            {/* Animated Fluid Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {/* Primary Pink Fluid */}
                <motion.div
                    style={{ y: bgY1, scale: bgScale, opacity: bgIntensity }}
                    className="absolute top-[-30%] left-[-20%] w-[100%] h-[100%] bg-pink-600/20 rounded-full blur-[180px]"
                />

                {/* Deep Purple Fluid */}
                <motion.div
                    style={{ y: bgY2, scale: bgScale, opacity: bgIntensity }}
                    className="absolute bottom-[-30%] right-[-20%] w-[110%] h-[110%] bg-purple-900/30 rounded-full blur-[200px]"
                />

                {/* Accent Rose Glow - pulses */}
                <motion.div
                    style={{ opacity: bgIntensity }}
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-rose-500/10 rounded-full blur-[150px]"
                />
            </div>

            {/* Sticky Content Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-grid opacity-10" />

                {/* Content */}
                <motion.div
                    style={{
                        scale: textScale,
                        opacity: textOpacity,
                        y: textY,
                        filter: textBlur,
                    }}
                    className="relative z-10 text-center px-6 max-w-6xl mx-auto"
                >
                    {/* Phase Badge */}
                    <motion.div className="mb-16">
                        <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-pink-500/5 border border-pink-500/20 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-pink-400">
                            <span className="flex gap-1">
                                <span className="w-1 h-1 rounded-full bg-pink-400 animate-pulse" />
                                <span className="w-1 h-1 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                                <span className="w-1 h-1 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                            </span>
                            Phase Zero Complete
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <div className="relative mb-16">
                        {/* Shadow Glow Text */}
                        <h2 className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-pink-500/5 blur-3xl select-none">
                            Something Beautiful is Blooming
                        </h2>

                        <h2 className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95]">
                            <span className="block text-white/90 mb-2">
                                Something
                            </span>
                            <span className="block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-rose-500 italic">
                                    Beautiful
                                </span>
                                <span className="text-white/90"> is Blooming</span>
                            </span>
                        </h2>
                    </div>

                    {/* Animated Line */}
                    <motion.div
                        style={{
                            scaleX: useTransform(smoothProgress, [0.2, 0.5], [0, 1]),
                            opacity: textOpacity
                        }}
                        className="w-32 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent mx-auto mb-16 origin-center"
                    />

                    {/* Scroll Prompt */}
                    <motion.div
                        style={{ opacity: useTransform(smoothProgress, [0.3, 0.5, 0.7], [0, 1, 0]) }}
                        className="flex flex-col items-center gap-6"
                    >
                        <motion.div
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <div className="w-px h-16 bg-gradient-to-b from-pink-500/50 to-transparent" />
                        </motion.div>
                        <p className="text-slate-500 font-semibold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                            Wait for the bloom
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Edge Glows */}
            <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/10 to-transparent z-10 pointer-events-none" />
            <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/10 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
