"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary/10 to-transparent -z-10 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-accent/10 to-transparent -z-10 blur-3xl opacity-30" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="z-10">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/10"
                    >
                        Specialized Enterprise AI
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 dark:from-white dark:to-slate-500"
                    >
                        AI Solutions That Drive <br />
                        <span className="text-primary italic">Real Results.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-xl"
                    >
                        We build bespoke AI systems that bridge the gap between technical potential and practical business outcomes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/contact"
                            className="bg-primary hover:bg-primary-dark text-white px-8 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20 flex items-center justify-center gap-2 group"
                        >
                            Book a Consultation
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/case-studies"
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
                        >
                            View Our Work
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 flex items-center gap-6"
                    >
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by leading innovators</p>
                        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                    </motion.div>
                </div>

                <div className="relative order-first lg:order-last">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/3] bg-slate-200 dark:bg-slate-800"
                    >
                        <div className="absolute inset-0 bg-grid opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="w-[120%] h-[120%] bg-gradient-conic from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-50"
                            />
                        </div>
                        {/* Mock Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-12 h-2 bg-primary rounded-full" />
                                    <div className="w-24 h-2 bg-accent/30 rounded-full" />
                                </div>
                                <div className="h-4 bg-white/20 rounded-full w-full mb-2" />
                                <div className="h-4 bg-white/20 rounded-full w-3/4" />
                            </div>
                        </div>
                    </motion.div>
                    {/* Decorative elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
                    />
                </div>
            </div>
        </section>
    );
}
