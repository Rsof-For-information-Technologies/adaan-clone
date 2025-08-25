import Image from "next/image";

const discoverData = [
    {
        label: "SUSTAINABILITY",
        title: "We’re working to reduce our GHG emissions",
        image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
        href: "#",
    },
    {
        label: "WHAT WE DO",
        title: "From transportation fuels to advanced materials, innovation is key",
        image: "https://images.pexels.com/photos/3855961/pexels-photo-3855961.jpeg",
        href: "#",
    },
    {
        label: "CAREERS",
        title: "Professional growth to make a positive impact",
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
        href: "#",
    },
    {
        label: "INVESTORS",
        title: "Aramco is one of the world’s largest integrated energy and chemicals companies",
        image: "https://images.pexels.com/photos/669365/pexels-photo-669365.jpeg",
        href: "#",
    },
];

export default function DiscoverSection() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-6">
                <p className="uppercase tracking-widest text-gray-500 text-sm mb-5">Discover Aramco</p>
                <h2 className="text-[20px] font-light mb-[22px] max-w-3xl">
                    We are one of the leading producers of the energy and chemicals that drive global commerce and help enhance the lives of people around the globe.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {discoverData.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className="group relative rounded-2xl overflow-hidden shadow-md h-[450px] flex"
                        >
                            <Image
                                src={item.image}
                                alt={item.label}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 25vw"
                                priority={idx === 0}
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="relative z-10 flex flex-col justify-between w-full h-full p-6">
                                <div>
                                    <span className="block text-xs font-semibold tracking-widest text-white/80 mb-2">{item.label}</span>
                                    <h3 className="text-lg font-medium text-white leading-snug">{item.title}</h3>
                                </div>
                                <span className="self-end mt-4">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/80 bg-black/30 group-hover:bg-white/20 transition-colors">
                                        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}