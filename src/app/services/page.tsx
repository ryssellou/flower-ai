"use client";

import { motion } from 'framer-motion';
import { SERVICES } from '@/data/website';
import SectionHeader from '@/components/common/SectionHeader';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex justify-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-12 h-12 sm:w-16 sm:h-16 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                    >
                        <Image
                            src="/images/flower-ai/logo.png"
                            alt="Flower AI Logo"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </div>
                <SectionHeader
                    tag="Our Capabilities"
                    title="Specialized AI Ecosystems"
                    subtitle="From standalone LLM integrations to autonomous multi-agent systems, we architect for scale."
                />

                <div className="space-y-32 mt-24">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            id={service.id}
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
                        >
                            <div className="lg:w-1/2">
                                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8">
                                    <service.icon size={40} />
                                </div>
                                <h2 className="text-4xl font-black mb-6 tracking-tight">{service.title}</h2>
                                <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                                    {service.benefits.map((benefit) => (
                                        <div key={benefit} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                                <Check size={12} className="text-primary" />
                                            </div>
                                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Use Cases</h4>
                                    <ul className="space-y-3">
                                        {service.useCases.map((uc) => (
                                            <li key={uc} className="text-sm font-medium text-slate-500">• {uc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full h-[400px] bg-slate-100 dark:bg-slate-800 rounded-[3rem] relative overflow-hidden group">
                                <div className="absolute inset-0 bg-grid opacity-10" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            rotate: [0, 2, 0]
                                        }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                        className="w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Tech Stack Showcase */}
            <section className="mt-32 py-24 bg-black">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-12">Our Technology DNA</p>
                    <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50">
                        {['PYTHON', 'CLAUDE_3.5', 'LLAMA_3', 'LANGCHAIN', 'SUPABASE', 'FASTAPI', 'CREW_AI'].map(tech => (
                            <span key={tech} className="text-xl md:text-3xl font-black italic tracking-tighter text-white">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
