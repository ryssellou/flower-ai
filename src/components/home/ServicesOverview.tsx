"use client";

import { motion } from 'framer-motion';
import { SERVICES } from '@/data/website';
import SectionHeader from '../common/SectionHeader';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesOverview() {
    return (
        <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    tag="Expertise"
                    title="Bespoke AI Services"
                    subtitle="We don't do generic. We build specialized systems that adapt to your unique operational realities."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all group hover:border-primary/30"
                        >
                            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <Link
                                href={`/services#${service.id}`}
                                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group-hover:gap-3 transition-all"
                            >
                                Learn More
                                <ArrowUpRight size={14} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
