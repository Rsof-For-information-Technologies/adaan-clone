"use client"

import { ChevronRight, Package, Wrench, Drill, Box, Globe, Star, ArrowRight, CheckCircle, Zap, Shield, Users } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function Products() {
    const [expandedCategory, setExpandedCategory] = useState<string | null>("imdex")
    const t = useTranslations() // Uncomment if using i18n

    const productCategories = [
        {
            id: "imdex",
            title: "IMDEX",
            icon: Globe,
            description: "Innovative Mining Technology Company",
            banner: "Empowering Mining with Real-Time Data and Advanced Drilling Technologies",
            fullDescription: "IMDEX is a global mining technology company headquartered in Perth. With a focus on drilling optimization, rock knowledge, and digital transformation, IMDEX provides advanced drilling fluids, state-of-the-art downhole instrumentation, and robust data management software.",
            features: ["Real-time Data Analytics", "Advanced Drilling Fluids", "Digital Transformation", "Global Support"],
            subcategories: [
                {
                    name: "REFLEX – Downhole Survey & Structural Geology Tools",
                    description: "Reflex provides high-performance tools for downhole survey, orientation, and structural geology, enabling accurate borehole mapping and geotechnical insight in real time.",
                    products: [
                        { name: "ACT III", description: "Advanced downhole survey tool for precise borehole mapping" },
                        { name: "ACT X", description: "Next-generation orientation and structural geology tool" },
                        { name: "EZ-Trac", description: "Easy-to-use tracking system for borehole navigation" },
                        { name: "Sprint IQ", description: "Intelligent survey tool for rapid data collection" },
                        { name: "LogrX", description: "Comprehensive logging and data management solution" },
                    ],
                },
                {
                    name: "AMC – Drilling Fluids",
                    description: "AMC offers a comprehensive range of drilling fluids and additives designed to improve hole stability, reduce environmental impact, and optimize drilling performance across all ground conditions.",
                    products: [
                        { name: "AMC CR 650", description: "Advanced drilling fluid for challenging formations" },
                        { name: "AMC LIQUIPOL", description: "High-performance lubricant for improved drilling efficiency" },
                        { name: "AMC BOS FIX", description: "Borehole stabilization solution for complex geology" },
                        { name: "AMC CORE WELL", description: "Core preservation fluid for optimal sample recovery" },
                        { name: "AMC FLOCK DD", description: "Flocculant for drilling waste management" },
                        { name: "AMC PLUG", description: "Borehole plugging solution for well control" },
                        { name: "AMC WATER CONDITIONER", description: "Water treatment for optimal drilling performance" },
                    ],
                },
                {
                    name: "DEVICO – Borehole Survey & Rig Alignment Tools",
                    description: "Devico specializes in precision borehole surveying and rig alignment solutions, helping drillers enhance accuracy, reduce deviation, and improve operational control from the surface.",
                    products: [
                        { name: "Devi Aligner", description: "Precision rig alignment system for accurate drilling" },
                        { name: "Devi Gyro", description: "Advanced gyroscopic survey tool for deep boreholes" },
                        { name: "Devi Health", description: "Real-time monitoring system for equipment health" },
                    ],
                },
            ],
        },
        {
            id: "desco",
            title: "DESCO",
            icon: Drill,
            description: "Precision Engineered Drill Rigs",
            banner: "Precision Engineered Drill Rigs Built to Perform in the Toughest Environments",
            fullDescription: "Desco Drilling Rigs provide reliable and advanced drilling equipment for demanding mining operations with over 30 years of industry expertise.",
            features: ["Rugged Construction", "Advanced Hydraulics", "Precision Control", "Global Service Network"],
            subcategories: [
                {
                    name: "Drilling Rigs",
                    description: "High-performance drilling rigs designed for the most challenging mining environments.",
                    products: [
                        { name: "Surface Drilling Rigs", description: "Robust surface drilling solutions for open-pit operations" },
                        { name: "Underground Drilling Equipment", description: "Specialized equipment for underground mining applications" },
                        { name: "Rig Accessories", description: "Comprehensive range of accessories and spare parts" },
                    ],
                },
            ],
        },
        {
            id: "cr-epiroc",
            title: "CR POWERED BY EPIROC",
            icon: Wrench,
            description: "Next-Generation Mining Productivity",
            banner: "Delivering next-generation mining productivity with advanced lips, GET, dragline buckets, and digital solutions",
            fullDescription: "Cutting-edge mining solutions powered by Epiroc's global expertise and innovative technology stack.",
            features: ["Digital Integration", "Premium Materials", "Performance Analytics", "Technical Support"],
            subcategories: [
                {
                    name: "Digital Solutions",
                    description: "Advanced digital solutions for enhanced mining operations.",
                    products: [
                        { name: "Lips & GET Systems", description: "High-performance ground engaging tools" },
                        { name: "Cast Lips", description: "Durable cast lip solutions for extreme conditions" },
                        { name: "Titan Software", description: "Advanced software for operational optimization" },
                    ],
                },
            ],
        },
        {
            id: "drilling-tools",
            title: "DRILLING TOOLS",
            icon: Package,
            description: "Comprehensive Drilling Solutions",
            banner: "Complete range of drilling tools for all mining applications",
            fullDescription: "Professional drilling tools and accessories for all mining operations with guaranteed performance and durability.",
            features: ["Premium Quality", "Extended Durability", "Precision Engineering", "Global Certification"],
            subcategories: [
                {
                    name: "Diamond Tools",
                    description: "High-quality diamond drilling tools for precision operations.",
                    products: [
                        { name: "Diamond Bits", description: "Premium diamond bits for core drilling" },
                        { name: "Diamond Reamers", description: "Precision reaming tools for hole enlargement" },
                        { name: "Diamond Stabilizers", description: "Stabilization tools for straight hole drilling" },
                    ],
                },
                {
                    name: "RC Tools",
                    description: "Reverse circulation tools for efficient sample collection.",
                    products: [
                        { name: "RC Bits", description: "Specialized bits for reverse circulation drilling" },
                        { name: "RC Hammers", description: "High-performance hammers for RC operations" },
                        { name: "RC Rods", description: "Durable rods for reverse circulation systems" },
                    ],
                },
            ],
        },
        {
            id: "aitc-core-trays",
            title: "AITC CORE TRAYS",
            icon: Box,
            description: "Durable, Saudi-Made Solutions",
            banner: "Durable, Saudi-Made Solutions Engineered for Precision and Reliability",
            fullDescription: "Locally manufactured HQ, PQ, and NQ core boxes - Saudi Made excellence supporting Vision 2030 with state-of-the-art manufacturing facilities in Rabigh.",
            features: ["Saudi Made", "Vision 2030", "Premium Materials", "Custom Solutions"],
            subcategories: [
                {
                    name: "Core Solutions",
                    description: "Complete core handling solutions for mining operations.",
                    products: [
                        { name: "Core Boxes", description: "HQ, PQ, and NQ core boxes for all drilling applications" },
                        { name: "Core Covers", description: "Protective covers for core sample preservation" },
                        { name: "Run Markers", description: "Precision markers for core run identification" },
                    ],
                },
            ],
        },
    ]

    return (
        <section id="products" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center mb-6">
                        <div className="w-12 h-1 bg-[#13A7DC] mr-4" />
                        <span className="text-black font-semibold uppercase tracking-wider text-sm"> {t('Products.header.title')} </span>
                        <div className="w-12 h-1 bg-[#13A7DC] ml-4" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"> {t('Products.header.heading')} </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"> {t('Products.header.description')} </p>
                </div>

                <div className="space-y-6 max-w-6xl mx-auto">
                    {productCategories.map((category) => (
                        <div
                            key={category.id}
                            className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ease-out overflow-hidden"
                        >
                            <div
                                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                                        <category.icon className="h-6 w-6 text-[#13A7DC]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {category.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mt-1">
                                            {category.description}
                                        </p>
                                        {category.banner && (
                                            <p className="text-[#13A7DC] text-xs font-medium mt-2">
                                                {category.banner}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    {/* Features */}
                                    <div className="hidden lg:flex items-center space-x-2">
                                        {category.features.slice(0, 2).map((feature, index) => (
                                            <span
                                                key={index}
                                                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                                        <ChevronRight
                                            className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${expandedCategory === category.id ? "rotate-90" : "rotate-0"
                                                }`}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCategory === category.id ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="border-t border-gray-100">
                                    <div className="p-6 border-b border-gray-100">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                            <div className="lg:col-span-2">
                                                <p className="text-gray-700 leading-relaxed">
                                                    {category.fullDescription}
                                                </p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                                                    Key Features
                                                </h4>
                                                <div className="space-y-3">
                                                    {category.features.map((feature, index) => (
                                                        <div key={index} className="flex items-center space-x-3">
                                                            <CheckCircle className="h-4 w-4 text-[#13A7DC] flex-shrink-0" />
                                                            <span className="text-gray-700 text-sm">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {category.subcategories.map((subcategory, subIndex) => (
                                        <div
                                            key={subIndex}
                                            className="p-6 border-b border-gray-100 last:border-b-0 bg-gray-50/50"
                                        >
                                            <div className="mb-6">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                    {subcategory.name}
                                                </h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {subcategory.description}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {subcategory.products.map((product, productIndex) => (
                                                    <div
                                                        key={productIndex}
                                                        className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                                                    >
                                                        <div className="flex items-start justify-between mb-3">
                                                            <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                                                                <Package className="h-4 w-4 text-[#13A7DC]" />
                                                            </div>
                                                            <ArrowRight className="h-4 w-4 text-gray-400" />
                                                        </div>

                                                        <h5 className="font-semibold text-gray-900 mb-2">
                                                            {product.name}
                                                        </h5>
                                                        <p className="text-gray-600 text-sm leading-relaxed">
                                                            {product.description}
                                                        </p>

                                                        <div className="mt-3 pt-3 border-t border-gray-100">
                                                            <button className="text-[#13A7DC] text-sm font-medium hover:text-black transition-colors duration-200 flex items-center space-x-1">
                                                                <span>Learn More</span>
                                                                <ArrowRight className="h-3 w-3" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black rounded-4xl transform rotate-2 scale-105 opacity-20 animate-gradient-xy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black  rounded-4xl transform -rotate-1 scale-105 opacity-10 animate-gradient-xy delay-1000" />
                    <div className="relative bg-gradient-to-r from-black to-black rounded-4xl p-12 text-white transform transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-3xl overflow-hidden">
                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce delay-500" />
                        <div className="relative z-10">
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl mb-6 border border-white/30 shadow-lg">
                                    <Star className="h-5 w-5 text-white fill-current animate-spin-slow" />
                                    <span className="text-sm font-black uppercase tracking-wider">{t('Products.coreTrays.flagshipProduct')}</span>
                                    <Zap className="h-5 w-5 text-white fill-current animate-pulse" />
                                </div>
                                <h3 className="text-5xl font-black mb-6 text-white drop-shadow-lg">
                                    {t('Products.coreTrays.title')}
                                </h3>
                                <p className="text-xl font-medium opacity-95 max-w-3xl mx-auto leading-relaxed drop-shadow">
                                    {t('Products.coreTrays.subtitle')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
                                {[
                                    { key: 'coreBoxes', icon: Package, color: "from-amber-400 to-yellow-400" },
                                    { key: 'saudiMade', icon: Shield, color: "from-green-400 to-emerald-400" },
                                    { key: 'vision', icon: Users, color: "from-blue-400 to-cyan-400" },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-500 ease-out hover:bg-white/20 hover:scale-110 hover:shadow-2xl border border-white/20 overflow-hidden"
                                        style={{ transitionDelay: `${index * 200}ms` }}
                                    >
                                        {/* Background Glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                                        <div className="relative">
                                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out">
                                                <stat.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <div className="font-black text-4xl mb-3 text-white drop-shadow-lg transition-all duration-300 ease-out group-hover:scale-110">
                                                {t(`Products.coreTrays.stats.${stat.key}.number`)}
                                            </div>
                                            <div className="text-white/90 font-semibold text-lg transition-all duration-300 ease-out">
                                                {t(`Products.coreTrays.stats.${stat.key}.label`)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center">
                                <button className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-amber-200">
                                    {t('Products.coreTrays.exploreButton')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}