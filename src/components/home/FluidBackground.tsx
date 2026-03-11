"use client";

import { motion } from 'framer-motion';

export default function FluidBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#0F0A1F]">
            {/* Grain Overlay for texture */}
            <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Exaggerated stroke-based wave */}
            <div className="absolute inset-0 flex items-center justify-center blur-[2px] sm:blur-[3px]">
                <svg
                    className="w-[500%] sm:w-[450%] md:w-[400%] h-[800px] sm:h-[1000px] md:h-[1200px] opacity-60 sm:opacity-70"
                    viewBox="0 0 2000 1000"
                    fill="none"
                    preserveAspectRatio="none"
                    style={{ shapeRendering: 'geometricPrecision' }}
                >
                    {/* Wave layer 1 - deepest, most blurred, biggest motion */}
                    <motion.path
                        animate={{
                            d: [
                                "M-500,500 C0,50 400,950 800,500 C1200,50 1600,950 2000,500 C2400,50 2800,950 3200,500",
                                "M-500,500 C0,950 400,50 800,500 C1200,950 1600,50 2000,500 C2400,950 2800,50 3200,500",
                                "M-500,500 C0,50 400,950 800,500 C1200,50 1600,950 2000,500 C2400,50 2800,950 3200,500",
                            ]
                        }}
                        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                        stroke="url(#wave-gradient-1)"
                        strokeWidth="250"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#blur-deep)"
                    />

                    {/* Wave layer 2 */}
                    <motion.path
                        animate={{
                            d: [
                                "M-500,500 C0,100 400,900 800,500 C1200,100 1600,900 2000,500 C2400,100 2800,900 3200,500",
                                "M-500,500 C0,900 400,100 800,500 C1200,900 1600,100 2000,500 C2400,900 2800,100 3200,500",
                                "M-500,500 C0,100 400,900 800,500 C1200,100 1600,900 2000,500 C2400,100 2800,900 3200,500",
                            ]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        stroke="url(#wave-gradient-2)"
                        strokeWidth="180"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#blur-medium)"
                    />

                    {/* Wave layer 3 */}
                    <motion.path
                        animate={{
                            d: [
                                "M-500,500 C0,150 400,850 800,500 C1200,150 1600,850 2000,500 C2400,150 2800,850 3200,500",
                                "M-500,500 C0,850 400,150 800,500 C1200,850 1600,150 2000,500 C2400,850 2800,150 3200,500",
                                "M-500,500 C0,150 400,850 800,500 C1200,150 1600,850 2000,500 C2400,150 2800,850 3200,500",
                            ]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        stroke="url(#wave-gradient-3)"
                        strokeWidth="100"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#blur-soft)"
                    />

                    {/* Wave layer 4 - brightest, sharpest */}
                    <motion.path
                        animate={{
                            d: [
                                "M-500,500 C0,200 400,800 800,500 C1200,200 1600,800 2000,500 C2400,200 2800,800 3200,500",
                                "M-500,500 C0,800 400,200 800,500 C1200,800 1600,200 2000,500 C2400,800 2800,200 3200,500",
                                "M-500,500 C0,200 400,800 800,500 C1200,200 1600,800 2000,500 C2400,200 2800,800 3200,500",
                            ]
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        stroke="url(#wave-gradient-4)"
                        strokeWidth="50"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#blur-subtle)"
                    />

                    <defs>
                        {/* Blur filters with color interpolation for smoother gradients */}
                        <filter id="blur-deep" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation="40" />
                        </filter>
                        <filter id="blur-medium" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation="25" />
                        </filter>
                        <filter id="blur-soft" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation="15" />
                        </filter>
                        <filter id="blur-subtle" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation="8" />
                        </filter>

                        {/* Scattered gradient 1 - deep pink/purple */}
                        <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="8%" stopColor="#BE185D" stopOpacity="0.35" />
                            <stop offset="20%" stopColor="transparent" />
                            <stop offset="32%" stopColor="#701A75" stopOpacity="0.3" />
                            <stop offset="45%" stopColor="transparent" />
                            <stop offset="58%" stopColor="#9D174D" stopOpacity="0.35" />
                            <stop offset="72%" stopColor="transparent" />
                            <stop offset="85%" stopColor="#BE185D" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>

                        {/* Scattered gradient 2 - medium pink/fuchsia */}
                        <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="12%" stopColor="#EC4899" stopOpacity="0.28" />
                            <stop offset="28%" stopColor="transparent" />
                            <stop offset="42%" stopColor="#A21CAF" stopOpacity="0.24" />
                            <stop offset="55%" stopColor="transparent" />
                            <stop offset="68%" stopColor="#EC4899" stopOpacity="0.28" />
                            <stop offset="82%" stopColor="transparent" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>

                        {/* Scattered gradient 3 - bright pink */}
                        <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="15%" stopColor="#F472B6" stopOpacity="0.22" />
                            <stop offset="30%" stopColor="transparent" />
                            <stop offset="45%" stopColor="#D946EF" stopOpacity="0.18" />
                            <stop offset="58%" stopColor="transparent" />
                            <stop offset="72%" stopColor="#F472B6" stopOpacity="0.22" />
                            <stop offset="88%" stopColor="transparent" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>

                        {/* Scattered gradient 4 - lightest fuchsia */}
                        <linearGradient id="wave-gradient-4" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="18%" stopColor="#FBCFE8" stopOpacity="0.18" />
                            <stop offset="35%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#F5D0FE" stopOpacity="0.14" />
                            <stop offset="65%" stopColor="transparent" />
                            <stop offset="80%" stopColor="#FBCFE8" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Subtle edge fades */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0F0A1F] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F0A1F] to-transparent" />
        </div>
    );
}
