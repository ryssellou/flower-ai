"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/team', label: 'Team' },
        { href: '/contact', label: 'Contact' },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    const handleHomeClick = (e: React.MouseEvent) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };


    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-50 py-4 sm:py-5 md:py-6"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    {/* Floating Pill Container */}
                    <div className="relative flex items-center justify-between px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                        {/* Subtle top highlight */}
                        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent rounded-full" />

                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                        {/* Logo */}
                        <Link href="/" className="relative z-10 flex items-center gap-2 group" onClick={handleHomeClick}>
                            <div className="relative w-6 h-6 sm:w-7 sm:h-7 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/flower-ai/logo.png"
                                    alt="Flower AI Logo"
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <span className="text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white">
                                Flower<span className="text-primary">AI</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation - Center */}
                        <nav className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={link.href === '/' ? handleHomeClick : undefined}
                                        className={`text-[11px] font-normal tracking-wider transition-all duration-500 ${isActive(link.href)
                                            ? 'text-white'
                                            : 'text-white/40 hover:text-white/90'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3 sm:gap-5 relative z-10">
                            {/* PocketPA Link - Fancy Entry Point */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="animate-float-small hidden sm:flex"
                            >
                                <Link
                                    href="/contact"
                                    className="fancy-shimmer-pill group flex items-center gap-2 px-3 py-1.5 rounded-full"
                                >
                                    {/* Animated Glow Backdrop */}
                                    <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-700" />

                                    <span className="relative flex items-center gap-2 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500">
                                        <motion.div
                                            animate={{ rotate: [0, 15, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="group-hover:rotate-[360deg] transition-transform duration-1000"
                                        >
                                            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                                        </motion.div>

                                        <span className="bg-gradient-to-r from-white/60 via-white to-white/60 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-500">
                                            Contact Us
                                        </span>

                                        <span className="flex h-1.5 w-1.5 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                                        </span>
                                    </span>
                                </Link>
                            </motion.div>



                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden relative w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
                                aria-label="Toggle menu"
                            >
                                <div className="relative w-4 h-3 flex flex-col justify-between">
                                    <motion.span
                                        animate={{
                                            rotate: mobileMenuOpen ? 45 : 0,
                                            y: mobileMenuOpen ? 5 : 0,
                                        }}
                                        className="w-full h-0.5 bg-white rounded-full origin-center transition-colors"
                                    />
                                    <motion.span
                                        animate={{
                                            opacity: mobileMenuOpen ? 0 : 1,
                                            scaleX: mobileMenuOpen ? 0 : 1,
                                        }}
                                        className="w-full h-0.5 bg-white rounded-full"
                                    />
                                    <motion.span
                                        animate={{
                                            rotate: mobileMenuOpen ? -45 : 0,
                                            y: mobileMenuOpen ? -5 : 0,
                                        }}
                                        className="w-full h-0.5 bg-white rounded-full origin-center transition-colors"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#0F0A1F]/95 backdrop-blur-xl"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="relative h-full flex flex-col items-center justify-center gap-6 sm:gap-8 p-6 sm:p-8"
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={link.href === '/' ? handleHomeClick : () => setMobileMenuOpen(false)}
                                        className={`text-xl sm:text-2xl font-bold tracking-widest uppercase transition-colors ${isActive(link.href)
                                            ? 'text-white'
                                            : 'text-white/50 hover:text-white'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className="flex flex-col items-center gap-4 mt-6 sm:mt-8"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="fancy-shimmer-pill group flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.05] border border-white/10"
                                >
                                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                                    <span className="text-sm font-bold tracking-[0.2em] uppercase text-white">
                                        Contact Us
                                    </span>
                                    <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                </Link>

                                <span className="flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary px-4 sm:px-6 py-2.5 sm:py-3 border border-primary/30 rounded-full bg-primary/10">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
                                    Stealth Mode
                                </span>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
