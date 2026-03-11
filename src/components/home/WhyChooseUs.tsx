"use client";

import { motion } from 'framer-motion';
import { DIFFERENTIATORS } from '@/data/website';
import SectionHeader from '../common/SectionHeader';

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    tag="Differentiation"
                    title="Built for the Enterprise"
                    subtitle="Why leading companies choose Flower AI as their strategic technology Flower."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {DIFFERENTIATORS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-primary/10 group"
                        >
                            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <item.icon size={30} />
                            </div>
                            <h3 className="text-xl font-black mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
