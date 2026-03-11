"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 border-t border-white/[0.04] bg-[#0A0714]">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group transition-all duration-500">
                        <div className="relative w-5 h-5 overflow-hidden rounded-md opacity-70 group-hover:opacity-100 transition-opacity">
                            <Image
                                src="/images/flower-ai/logo.png"
                                alt="Flower AI Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-white/80 group-hover:text-white">
                            Flower<span className="text-primary">AI</span>
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-8 md:gap-10">
                        {[
                            { href: '/team', label: 'Team' },
                            { href: '/contact', label: 'Contact' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[10px] sm:text-[11px] font-normal tracking-wider text-white/30 hover:text-white/60 transition-all duration-500"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-[10px] sm:text-[11px] font-light tracking-wide text-white/20">
                        © {currentYear} Flower AI
                    </p>
                </div>
            </div>
        </footer>
    );
}
