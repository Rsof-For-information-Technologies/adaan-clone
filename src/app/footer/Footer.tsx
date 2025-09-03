"use client";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const quickLinks = [
        { name: "About Us", href: "/en/aboutUs" },
        { name: "Products", href: "/en/products" },
        { name: "Team", href: "/en/team" },
        { name: "Contact", href: "/en/contact" },
        { name: "Achievements", href: "https://login.Adaan.com/vpn/tmindex.html" },
    ];

    const ourProducts = [
        { name: "AITC Core Trays", href: "/en#cookie-consent" },
        { name: "IMDEX Solutions", href: "/en/cookie-notices" },
        { name: "DESCO Drilling Rigs", href: "/en/scam-and-fraud" },
        { name: "CR Powered by Epiroc", href: "/en/terms-and-conditions" },
        { name: "Drilling Tools", href: "/en/privacy-notice" },
    ];

    const otherWebsites = [
        { name: "IMDEX", href: "https://www.imdex.com", external: true },
        { name: "CR Powered by Epiroc", href: "https://crmining.com", external: true },
        { name: "Desco Drilling", href: "https://gtd-desco.com", external: true },
    ];

    const socialLinks = [
        { name: "Twitter", href: "https://x.com/Adaan", icon: "twitter" },
        { name: "Facebook", href: "https://www.facebook.com/Adaan", icon: "facebook" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/Adaan/", icon: "linkedin" },
        { name: "Instagram", href: "https://www.instagram.com/Adaan/", icon: "instagram" },
        { name: "YouTube", href: "https://www.youtube.com/user/AdaanVideo", icon: "youtube" },
    ];

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-[1260px] mx-auto py-14 px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-bold text-[#1f1f1f] mb-6 uppercase tracking-widest">
                            Quick Links
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-1 md:gap-x-0 md:space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-sm text-gray-700 hover:text-[#1f1f1f] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Site Information */}
                    <div>
                        <h3 className="text-xs font-bold text-[#1f1f1f] mb-6 uppercase tracking-widest">
                            Our Products
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-1 md:gap-x-0 md:space-y-3">
                            {ourProducts.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-sm text-gray-700 hover:text-[#1f1f1f] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Other Websites */}
                    <div>
                        <h3 className="text-xs font-bold text-[#1f1f1f] mb-6 uppercase tracking-widest">
                            Other Websites
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-1 md:gap-x-0 md:space-y-3">
                            {otherWebsites.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    target={link.external ? "_blank" : "_self"}
                                    rel={link.external ? "noopener noreferrer" : ""}
                                    className="block text-sm text-gray-700 hover:text-[#1f1f1f] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex justify-center md:justify-end">
                        <div className="flex flex-row gap-8 md:grid md:grid-cols-2 md:gap-4 md:mt-10">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 md:w-12 md:h-12 rounded-full border-2 border-[#1f1f1f] flex items-center justify-center text-[#1f1f1f] hover:text-blue-400 hover:border-blue-400 transition-colors ${index === 4 ? 'md:col-span-2 justify-center md:justify-self-end' : ''
                                        }`}
                                    aria-label={social.name}
                                >
                                    {social.icon === "twitter" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <path d="m14.24,10.12L22.94.02h-2.03l-7.57,8.79L7.33,0H.28l9.13,13.38L.29,23.97h2.03l7.99-9.28,6.35,9.31h7.05l-9.47-13.88Zm-3.75,2h0L3.32,1.6h3.17l14.19,20.79h-3.17l-7.01-10.28Z" fill="currentColor" />
                                        </svg>
                                    )}
                                    {social.icon === "facebook" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <path d="m7.95,24h-2.01V6.37c0-3.51,2.86-6.37,6.37-6.37h6.63v2.01h-6.63c-2.4,0-4.36,1.96-4.36,4.36v17.63Z" fill="currentColor" />
                                            <rect x="6.94" y="11.52" width="9.47" height="2" fill="currentColor" />
                                        </svg>
                                    )}
                                    {social.icon === "linkedin" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <path d="m6,7v17" strokeWidth="2px" stroke="currentColor" fill="none" />
                                            <path d="m11,24v-16h4.71c1.76.09,5.29,1.19,5.29,4.88v11.12" strokeWidth="2px" fill="none" stroke="currentColor" />
                                            <circle cx="6" cy="2" r="2" stroke="none" fill="currentColor" />
                                        </svg>
                                    )}
                                    {social.icon === "instagram" && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                            <rect x="1" y="1" width="22" height="22" rx="8" strokeWidth="2" stroke="currentColor" fill="none" />
                                            <rect x="7.40002" y="7.40002" width="9.2" height="9.2" rx="4.6" strokeWidth="2" stroke="currentColor" fill="none" />
                                            <circle cx="18" cy="5.80005" r="1" fill="currentColor" />
                                        </svg>
                                    )}
                                    {social.icon === "youtube" && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                                            <rect x="1" y="3.40002" width="22" height="17.2" rx="6.2" strokeWidth="2" stroke="currentColor" fill="none" />
                                            <path d="M10.4 14.4V9.59998L15.2 12L10.4 14.4Z" fill="currentColor" />
                                        </svg>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-300 pt-10">
                    <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-center md:gap-0">
                        {/* Logo - Centered on mobile, right on desktop */}
                        <Link href="/" className="flex items-center gap-3 order-1 md:order-3">
                            <Image
                            width={100}
                            height={100}
                            src="/images/aitc-logo.png"
                            alt="AITC - Addaan International Trading Company"
                            className="h-16 w-auto md:h-20 transition-all duration-300 rounded-md"
                            />
                        </Link>

                        {/* Bottom row for mobile, separate elements for desktop */}
                        <div className="flex justify-between items-center w-full order-2 md:hidden">
                            {/* Copyright */}
                            <p className="text-sm text-gray-700">
                                © 2025 Saudi Arabian Oil Co.
                            </p>

                            {/* Back to Top Button */}
                            <motion.button
                                onClick={scrollToTop}
                                className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-500 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Scroll to top"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.0056 9.59845C20.4085 10.0014 20.4085 10.6548 20.0056 11.0577C19.6026 11.4607 18.9493 11.4607 18.5463 11.0577L12.9523 5.46372L12.9523 21.0682C12.9523 21.6055 12.5167 22.041 11.9794 22.041C11.4421 22.041 11.0066 21.6055 11.0066 21.0682L11.0066 5.46384L5.41267 11.0578C5.0097 11.4607 4.35636 11.4607 3.95339 11.0578C3.55042 10.6548 3.55042 10.0014 3.95339 9.59848L11.2496 2.30223C11.4307 2.12114 11.6624 2.02142 11.8992 2.0031C12.1894 1.98052 12.4873 2.08022 12.7093 2.3022L20.0056 9.59845Z" fill="currentColor" />
                                </svg>
                            </motion.button>
                        </div>

                        {/* Desktop layout - separate elements */}
                        <div className="hidden md:flex md:flex-row md:items-center md:w-full md:relative">
                            {/* Copyright */}
                            <p className="text-sm text-gray-700">
                                © 2025 Saudi Arabian Oil Co.
                            </p>

                            {/* Back to Top Button - Absolutely centered */}
                            <motion.button
                                onClick={scrollToTop}
                                className="w-12 h-12 rounded-full border-2 border-[#1f1f1f] flex items-center justify-center text-[#1f1f1f] hover:text-blue-400 hover:border-blue-400 transition-colors absolute left-1/2 transform -translate-x-1/2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Scroll to top"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.0056 9.59845C20.4085 10.0014 20.4085 10.6548 20.0056 11.0577C19.6026 11.4607 18.9493 11.4607 18.5463 11.0577L12.9523 5.46372L12.9523 21.0682C12.9523 21.6055 12.5167 22.041 11.9794 22.041C11.4421 22.041 11.0066 21.6055 11.0066 21.0682L11.0066 5.46384L5.41267 11.0578C5.0097 11.4607 4.35636 11.4607 3.95339 11.0578C3.55042 10.6548 3.55042 10.0014 3.95339 9.59848L11.2496 2.30223C11.4307 2.12114 11.6624 2.02142 11.8992 2.0031C12.1894 1.98052 12.4873 2.08022 12.7093 2.3022L20.0056 9.59845Z" fill="currentColor" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
