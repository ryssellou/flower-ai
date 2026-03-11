"use client";

import { motion } from 'framer-motion';
import { INDUSTRIES } from '@/data/website';
import SectionHeader from '@/components/common/SectionHeader';
import { useState } from 'react';

export default function SolutionsPage() {
    const [activeTab, setActiveTab] = useState(INDUSTRIES[0].name);

    return (
        <main className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    tag="Custom Solutions"
                    title="AI for Every Industry"
                    subtitle="Specific business problems require specific AI architectures. Here's how we help across sectors."
                />

                {/* Industry Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-20 bg-slate-100 dark:bg-slate-900 p-2 rounded-full w-fit mx-auto">
                    {INDUSTRIES.map((industry) => (
                        <button
                            key={industry.name}
                            onClick={() => setActiveTab(industry.name)}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === industry.name
                                    ? 'bg-white dark:bg-slate-800 text-primary shadow-sm'
                                    : 'text-slate-500 hover:text-primary'
                                }`}
                        >
                            {industry.name}
                        </button>
                    ))}
                </div>

                {/* Solution Detail */}
                {INDUSTRIES.filter(ind => ind.name === activeTab).map(industry => (
                    <motion.div
                        key={industry.name}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                        <div className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-700 shadow-xl shadow-primary/5">
                            <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-8">The Challenge</h3>
                            <div className="space-y-6">
                                {industry.problems.map((p, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                                        <p className="font-medium text-slate-700 dark:text-slate-300">{p}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-xl shadow-primary/20">
                            <h3 className="text-sm font-black text-accent-light uppercase tracking-[0.3em] mb-8">Our AI Approach</h3>
                            <div className="space-y-6 mb-12">
                                {industry.solutions.map((s, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-2 h-2 rounded-full bg-accent-light mt-2 shrink-0" />
                                        <p className="font-bold">{s}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-2">Proven Result</p>
                                <p className="text-4xl font-black italic tracking-tighter text-accent-light">{industry.results}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
