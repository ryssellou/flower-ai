"use client";

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const CHALLENGES = [
    "Experiments that never scale to production.",
    "Data siloed in unstructured documents.",
    "Generic chatbots that frustrate customers.",
    "Manual document processing draining time."
];

const SOLUTIONS = [
    "Enterprise-grade scaling from day one.",
    "Intelligent RAG data processing pipelines.",
    "High-accuracy conversational interfaces.",
    "Autonomous agents managing workflows."
];

export default function ProblemSolution() {
    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-8 tracking-tighter"
                    >
                        AI is everywhere. <br />
                        <span className="text-slate-400">Practical value isn't.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500 mb-12 max-w-lg"
                    >
                        Most businesses are suffering from &quot;AI fatigue&quot;&mdash;POCs that fail, data that remains siloed, and high-noise automation.
                    </motion.p>

                    <div className="space-y-4">
                        {CHALLENGES.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                            >
                                <AlertCircle className="text-red-500 shrink-0 mt-1" size={20} />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -z-10 animate-pulse" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary p-12 rounded-[3.5rem] shadow-2xl shadow-primary/30"
                    >
                        <h3 className="text-3xl font-black text-white mb-8 tracking-tight">The Flower Way</h3>
                        <div className="space-y-6">
                            {SOLUTIONS.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-center gap-4 text-white"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={16} className="text-accent-light" />
                                    </div>
                                    <span className="text-sm md:text-base font-bold text-white/90">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <button className="mt-12 w-full py-5 bg-white text-primary rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-colors shadow-lg shadow-black/10">
                            Explore Our Process
                        </button>
                    </motion.div>

                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
                </div>
            </div>
        </section>
    );
}
