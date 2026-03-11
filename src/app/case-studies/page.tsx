"use client";

import { motion } from 'framer-motion';
import { CASE_STUDIES } from '@/data/website';
import SectionHeader from '@/components/common/SectionHeader';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudiesPage() {
    return (
        <main className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    tag="Portfolio"
                    title="Turning AI into ROI"
                    subtitle="Real examples of how our agents and models have transformed business operations."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                    {CASE_STUDIES.map((study, index) => (
                        <motion.div
                            key={study.client}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-10 flex flex-col group hover:border-primary/50 transition-colors shadow-2xl shadow-primary/5"
                        >
                            <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden mb-8">
                                <Image src={study.thumbnail} alt={study.client} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-xs font-black text-primary uppercase tracking-widest">{study.industry}</span>
                                        <h3 className="text-3xl font-black mt-2 tracking-tight">{study.client}</h3>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-4xl font-black italic tracking-tighter text-slate-800 dark:text-white uppercase leading-none">{study.result.split(' ')[0]}</p>
                                        <p className="text-[10px] font-black uppercase text-slate-400 mt-1">{study.result.split(' ').slice(1).join(' ')}</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">The Problem</h5>
                                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">{study.problem}</p>
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">The Solution</h5>
                                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed italic">&quot;{study.solution}&quot;</p>
                                    </div>
                                </div>
                            </div>

                            <Link href="/contact" className="mt-10 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl text-center text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                                Request Similar Solution
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
