"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { TEAM_STEALTH, STEALTH_MESSAGING } from '@/data/stealth';
import Image from 'next/image';

export default function TeamPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.1, 0.2, 0.4]);
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const blurAmount = useTransform(scrollYProgress, [0, 0.8, 1], [120, 80, 40]);

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const textY = useTransform(smoothProgress, [0.8, 1], [100, 0]);
    const textScale = useTransform(smoothProgress, [0.8, 1], [0.8, 1]);
    const textOpacity = useTransform(smoothProgress, [0.8, 0.9, 1], [0, 0.5, 1]);

    return (
        <main ref={containerRef} className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-0 min-h-screen bg-[#0F0A1F] overflow-hidden">
            {/* Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Mesmerizing Fluid Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ opacity: backgroundOpacity, scale: backgroundScale }}
                    className="absolute inset-0"
                >
                    {/* Primary Pink Fluid */}
                    <motion.div
                        animate={{
                            x: [-100, 100, -50],
                            y: [-50, 50, -20],
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-primary/20 rounded-full blur-[150px]"
                    />

                    {/* Deep Purple Fluid */}
                    <motion.div
                        animate={{
                            x: [100, -100, 50],
                            y: [50, -50, 20],
                            scale: [1.2, 1, 1.1],
                            rotate: [0, -15, 15, 0],
                        }}
                        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[-20%] right-[-10%] w-[90%] h-[90%] bg-accent/30 rounded-full blur-[180px]"
                    />

                    {/* Rose Accent Fluid */}
                    <motion.div
                        animate={{
                            x: [-200, 200],
                            y: [100, -100],
                            scale: [0.8, 1.1],
                        }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-pink-500/10 rounded-full blur-[120px]"
                    />
                </motion.div>

                {/* Animated Wave Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 800" preserveAspectRatio="none">
                    <motion.path
                        animate={{
                            d: [
                                "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128V800H0V160Z",
                                "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224V800H0V160Z",
                                "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128V800H0V160Z"
                            ]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        fill="rgba(59, 130, 246, 0.05)"
                    />
                </svg>
            </div>

            {/* Dynamic White-Removal Filter */}
            <svg className="absolute w-0 h-0 invisible">
                <defs>
                    <filter id="remove-white" colorInterpolationFilters="sRGB">
                        {/* 
                            This matrix calculates Alpha based on luminance.
                            Pure white (1,1,1) becomes transparent.
                            Darker subjects stay opaque.
                        */}
                        <feColorMatrix type="matrix" values="
                            1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            -1.1 -1.1 -1.1 3.5 0
                        " />
                    </filter>
                </defs>
            </svg>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <header className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-pink-500 mb-4 block">
                            Our Team
                        </span>
                    </motion.div>

                    <div className="mb-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
                        >
                            The Minds Behind <br />
                            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic pr-2">Flower AI</span>
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-16 h-1 bg-primary/50 mb-8" />
                        <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-light max-w-2xl text-center">
                            {STEALTH_MESSAGING.mission.split('natural').map((part, i, arr) => (
                                <span key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic font-semibold px-1">natural</span>
                                    )}
                                </span>
                            ))}
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {TEAM_STEALTH.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-[#0D1117]/80 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-500"
                        >
                            <div className="flex flex-row h-48 sm:h-56">
                                {/* Image Section */}
                                <div className="relative w-1/3 sm:w-2/5 h-full overflow-hidden bg-gradient-to-b from-[#0A0C14] to-black flex items-center justify-center">
                                    {/* Subject Glow Aura */}
                                    <div className="absolute inset-x-[10%] inset-y-[20%] bg-pink-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-1000" />

                                    <div className="relative z-10 w-full h-full flex items-end justify-center">
                                        <div className="relative w-full h-[95%] flex items-end justify-center overflow-visible px-2">
                                            <motion.img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-contain grayscale brightness-[1.05] contrast-[1.1] transition-all duration-[800ms] cubic-bezier(0.23, 1, 0.32, 1) z-10 group-hover:grayscale-0 group-hover:brightness-[1.1] group-hover:contrast-[1.2]"
                                                style={{
                                                    filter: 'url(#remove-white) drop-shadow(0 0 2px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))'
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    filter: 'url(#remove-white) drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))'
                                                }}
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = `https://ui-avatars.com/api/?name=${member.name}&background=0D1117&color=ffffff&bold=true`;
                                                }}
                                            />
                                        </div>

                                        {/* Sophisticated Glow behind the subject */}
                                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                                            <div className="absolute inset-x-[15%] inset-y-[20%] bg-pink-500/5 blur-[50px] rounded-full" />
                                        </div>

                                        {/* Bottom Fade Gradient to blend silhouette */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/60 to-transparent z-20 pointer-events-none" />
                                    </div>

                                    {/* Subtle Scanline/Tech Overlay */}
                                    <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none z-30 opacity-20" />
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                                    <div className="mb-0">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-accent text-xs sm:text-sm font-semibold tracking-wider uppercase">
                                            {member.role}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <div className="w-8 h-[2px] bg-primary/50 rounded-full" />
                                        <div className="w-2 h-[2px] bg-accent/30 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>


        </main>
    );
}
