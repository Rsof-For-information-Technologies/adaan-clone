"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const discoverData = [
  {
    label: "cards.0.label",
    title: "cards.0.title",
    image: "https://images.pexels.com/photos/12654946/pexels-photo-12654946.jpeg",
    href: "#",
  },
  {
    label: "cards.1.label",
    title: "cards.1.title",
    image: "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg",
    href: "#",
  },
  {
    label: "cards.2.label",
    title: "cards.2.title",
    image: "https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg",
    href: "#",
  },
  {
    label: "cards.3.label",
    title: "cards.3.title",
    image: "https://images.pexels.com/photos/7642006/pexels-photo-7642006.jpeg",
    href: "#",
  },
];

const DiscoverSlider = () => {
  const t = useTranslations("DiscoverSection");
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const progress = ((activeIndex + 1) / discoverData.length) * 100;

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-[#f2f2f2]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="px-0 md:px-16 pb-10 md:pb-16">
            <p className="uppercase tracking-widest text-[#1f1f1f] text-sm mb-5">
              {t("heading.label")}
            </p>
            <h2 className="text-[28px] md:text-[40px] font-normal text-[#1f1f1f] max-full mb-4">
              {t("heading.title")}
            </h2>
            <p className="text-[#1f1f1f] text-[20px] font-normal mb-[22px]">
              {t("heading.description")}
            </p>
          </div>

          {/* Slider */}
          <Swiper
            modules={[]}
            slidesPerView={1}
            spaceBetween={16}
            loop={false}
            autoplay={false}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {discoverData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link
                  href={item.href}
                  className="group relative rounded-2xl overflow-hidden shadow-md h-[270px] flex mb-4"
                  onMouseMove={(e) => handleMouseMove(e)}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {hoveredCard === idx && (
                    <motion.div
                      className="pointer-events-none absolute w-40 h-40 rounded-full bg-white/30 backdrop-blur-sm z-50"
                      animate={{ x: mousePosition.x - 48, y: mousePosition.y - 48, scale: 1.2, opacity: 0.3, }}
                      initial={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1, }}
                    />
                  )}
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
                      <span className="block text-xs font-semibold tracking-widest text-white/80 mb-2">
                        {t(item.label)}
                      </span>
                      <h3 className="text-xl font-normal text-white leading-snug line-clamp-3">
                        {t(item.title)}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <motion.span className="self-end mt-4 inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/80 bg-black/30 group-hover:bg-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className="arrow-icon" > {" "} <path fillRule="evenodd" clipRule="evenodd" d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z" fill="#FFFFFF" />{" "} </svg>
                    </motion.span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-200 mt-6 rounded overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscoverSlider;
