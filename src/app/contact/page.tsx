"use client";

import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <main className="pt-40 pb-24 min-h-screen mesh-gradient">
            <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full text-center mb-20"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">Communication</span>
                    <h1 className="text-4xl md:text-7xl font-bold mb-8">Get in Touch</h1>
                    <p className="text-lg text-slate-400 mb-12">
                        Interested in learning more about what we&apos;re building? Whether you&apos;re an investor, potential partner, or a future team member, we&apos;d love to hear from you.
                    </p>
                </motion.div>

                {!submitted ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full max-w-xl glass-card p-12 rounded-[3.5rem]"
                    >
                        <form
                            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                            className="space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Full Name</label>
                                    <input type="text" required placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Email</label>
                                    <input type="email" required placeholder="email@address.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Inquiry Type</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium appearance-none">
                                    <option className="bg-background">Investor Relations</option>
                                    <option className="bg-background">Strategic Partnership</option>
                                    <option className="bg-background">Talent Inquiry</option>
                                    <option className="bg-background">General Interest</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Message</label>
                                <textarea rows={5} required placeholder="Your message..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium resize-none shadow-none" />
                            </div>
                            <button type="submit" className="group w-full py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3">
                                Send Message
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                    >
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20">
                            <MessageCircle size={32} className="text-primary" />
                        </div>
                        <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Transmission Received</h2>
                        <p className="text-slate-400 max-w-xs mx-auto text-sm leading-relaxed">
                            Our team has received your inquiry. Given our stealth status, we are selective with our communications but will get back to you if there is an alignment.
                        </p>
                    </motion.div>
                )}

                <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 text-center opacity-30">
                    <div className="p-8 border-r border-white/10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Email</h4>
                        <p className="text-sm font-bold tracking-widest">hello@flowerai.ai</p>
                    </div>
                    <div className="p-8">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Location</h4>
                        <p className="text-sm font-bold tracking-widest">Global Distributed</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
