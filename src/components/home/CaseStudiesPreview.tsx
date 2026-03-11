"use client";

import { motion } from 'framer-motion';
import { CASE_STUDIES } from '@/data/website';
import SectionHeader from '../common/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesPreview() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <SectionHeader
                        tag="Success Stories"
                        title="Measurable Impact"
                        centered={false}
                    />
                    <Link
                        href="/case-studies"
                        className="flex items-center gap-2 font-bold text-primary group transition-all mb-4"
                    >
                        All Case Studies
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {CASE_STUDIES.map((study, index) => (
                        <motion.div
                            key={study.client}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col md:flex-row group"
                        >
                            <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                                <Image
                                    src={study.thumbnail}
                                    alt={study.client}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                            </div>
                            <div className="p-10 md:w-3/5 flex flex-col justify-center">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 block">
                                    {study.industry}
                                </span>
                                <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight">
                                    {study.client}
                                </h3>
                                <div className="mb-6 p-4 bg-primary/5 rounded-2xl border-l-4 border-primary">
                                    <p className="text-primary font-black text-2xl tracking-tighter">
                                        {study.result}
                                    </p>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm italic mb-8">
                                    &quot;{study.solution}&quot;
                                </p>
                                <Link
                                    href="/case-studies"
                                    className="text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors"
                                >
                                    View Case Study
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
