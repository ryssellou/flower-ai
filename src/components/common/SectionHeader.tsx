"use client";

import { motion } from 'framer-motion';

interface SectionHeaderProps {
    tag?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeader({ tag, title, subtitle, centered = true }: SectionHeaderProps) {
    return (
        <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
            {tag && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-4"
                >
                    {tag}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
