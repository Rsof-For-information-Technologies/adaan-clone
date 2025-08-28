"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const navItems = [
    { label: "About us", href: "/en/about-us" },
    { label: "What we do", href: "/en/what-we-do" },
    { label: "Sustainability", href: "/en/sustainability" },
    { label: "Investors", href: "/en/investors" },
    { label: "News & Media", href: "/en/news-media" },
    { label: "Careers", href: "/en/careers" },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeMobile = () => setMobileOpen(false);

    return (
        <header className="fixed inset-x-0 z-50">
            {/* Main sticky header */}
            <motion.div
                animate={{ backgroundColor: scrolled ? "rgba(34, 34, 34, 1)" : "rgba(0, 0, 0, 0)" }}
                transition={{ duration: 0.25 }}
                className="backdrop-blur-sm"
            >
                <div className="max-w-[1400px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between text-white">
                    <div className="flex flex-row gap-4 items-center">
                        {/* Left: Search icon */}
                        <button
                            title="Search the website"
                            aria-label="Search the website"
                            className="p-2 rounded-full hover:bg-white/10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.98 25.98" focusable="false" className="chakra-icon css-12qnb82" aria-hidden="true" width="25.98" height="25.98"><path d="m17.5,11.25c0,3.45-2.8,6.25-6.25,6.25s-6.25-2.8-6.25-6.25,2.8-6.25,6.25-6.25,6.25,2.8,6.25,6.25Zm-2.44,0c0,2.11-1.71,3.81-3.81,3.81s-3.81-1.71-3.81-3.81,1.71-3.81,3.81-3.81,3.81,1.71,3.81,3.81Z" fillRule="evenodd" fill="#C0C0C0"/><path d="m11.25,22.5c2.64,0,5.07-.91,6.99-2.44l5.54,5.54c.5.5,1.32.5,1.82,0s.5-1.32,0-1.82l-5.54-5.54c1.52-1.92,2.44-4.35,2.44-6.99C22.5,5.04,17.46,0,11.25,0S0,5.04,0,11.25s5.04,11.25,11.25,11.25Zm0-2.44c4.87,0,8.81-3.95,8.81-8.81S16.12,2.44,11.25,2.44,2.44,6.38,2.44,11.25s3.95,8.81,8.81,8.81Z" fillRule="evenodd" fill="#C0C0C0"/></svg>
                        </button>

                        {/* Hamburger - mobile only */}
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            className="lg:hidden p-2 rounded-md hover:bg-white/10"
                            onClick={() => setMobileOpen((v) => !v)}
                        >
                            {!mobileOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
                                    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
                                    <path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3 10.6 10.6 16.9 4.3z" />
                                </svg>
                            )}
                        </button>

                        {/* Center: Nav items (desktop) */}
                        <nav className="hidden lg:block">
                            <ul className="flex items-center gap-8">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="uppercase tracking-wide text-sm font-semibold text-white/90 hover:text-white"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Right: Logo */}
                    <Link href="/en" title="Aramco" className="shrink-0">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-semibold tracking-tight">aramco</span>
                            <span className="w-5 h-5 rounded-sm bg-gradient-to-br from-green-500 to-blue-500 inline-block" />
                        </div>
                    </Link>
                </div>

                {/* Mobile menu panel */}
                <motion.div
                    initial={false}
                    animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
                    className="lg:hidden overflow-hidden bg-black/85 text-white"
                >
                    <div className="max-w-[1400px] mx-auto px-6 py-4">
                        <ul className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <li key={`m-${item.href}`}>
                                    <Link
                                        href={item.href}
                                        className="block py-2 text-base font-medium text-white/90 hover:text-white"
                                        onClick={closeMobile}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </header>
    );
};

export default Header;
