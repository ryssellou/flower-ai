"use client";

import { motion } from 'framer-motion';
import { TEAM } from '@/data/website';
import SectionHeader from '@/components/common/SectionHeader';
import Image from 'next/image';
import { Linkedin, Github } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="pt-32 pb-24 min-h-screen">
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
                    tag="Our Mission"
                    title="Bridging the AI Gap"
                    subtitle="Flower AI was founded to move AI beyond the curiosity phase and into the core of enterprise operations."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-24">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 rounded-[4rem] rotate-3 -z-10" />
                        <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-800 rounded-[3.5rem] relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <p className="text-sm font-medium text-slate-500 italic">&quot;Our goal isn&apos;t to build the most complex systems, but the ones that save the most time and drive the most value.&quot;</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-black mb-8 tracking-tight">Our Story</h3>
                        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>We began in 2024 as a small group of UK-based engineers frustrated by the disconnect between cutting-edge LLM research and practical business needs. We saw companies wasting millions on &quot;AI experiments&quot; that never reached production.</p>
                            <p>Flower AI was built on a simple premise: <span className="font-bold">AI should be invisible, autonomous, and ROI-driven.</span> We focus on the plumbing&mdash;the data pipelines, the multi-agent coordination, and the security guardrails that make AI actually work in a high-stakes environment.</p>
                            <p>Today, we help industries ranging from healthcare to finance automate their most complex workflows with bespoke, private, and secure intelligence.</p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div id="team" className="mt-40">
                    <SectionHeader
                        tag="The Experts"
                        title="The Minds Behind the AI"
                        subtitle="A multidisciplinary team dedicated to creating secure, production-grade intelligence."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TEAM.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[2.5rem] text-center transition-all hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-primary/10 group"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-primary rounded-full group-hover:scale-105 transition-transform" />
                                    <div className="absolute inset-1 bg-white dark:bg-slate-900 rounded-full" />
                                    <div className="absolute inset-1 overflow-hidden rounded-full">
                                        <Image src={member.image} alt={member.name} fill className="object-cover" />
                                    </div>
                                </div>

                                <h4 className="text-xl font-black mb-1 tracking-tight">{member.name}</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">{member.role}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                    {member.bio}
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {member.skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-[10px] font-bold text-slate-500">{skill}</span>
                                    ))}
                                </div>

                                <div className="flex justify-center gap-4">
                                    <a href={member.links.linkedin} className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={18} /></a>
                                    <a href={member.links.github} className="text-slate-400 hover:text-black dark:hover:text-white transition-colors"><Github size={18} /></a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
