"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';

const DataItems = [
  {
    label: "cards.0.label",
    title: "cards.0.title",
    image: "https://images.pexels.com/photos/12247603/pexels-photo-12247603.jpeg",
    video: "/videos/videoBanner2.mp4",
  },
  {
    label: "cards.1.label",
    title: "cards.1.title",
    image: "https://images.pexels.com/photos/33192/paddle-wheel-bucket-wheel-excavators-brown-coal-open-pit-mining.jpg",
    video: "/videos/videoBanner2.mp4",
  },
  {
    label: "cards.2.label",
    title: "cards.2.title",
    image: "https://images.pexels.com/photos/17971796/pexels-photo-17971796.jpeg",
    video: "/videos/videoBanner2.mp4",
  },
  {
    label: "cards.3.label",
    title: "cards.3.title",
    image: "https://images.pexels.com/photos/12247603/pexels-photo-12247603.jpeg",
    video: "/videos/videoBanner2.mp4",
  },
    {
    label: "cards.4.label",
    title: "cards.4.title",
    image: "https://images.pexels.com/photos/33192/paddle-wheel-bucket-wheel-excavators-brown-coal-open-pit-mining.jpg",
    video: "/videos/videoBanner2.mp4",
  },
  {
    label: "cards.5.label",
    title: "cards.5.title",
    image: "https://images.pexels.com/photos/17971796/pexels-photo-17971796.jpeg",
    // video: "/videos/videoBanner2.mp4",
  },
];

const MagazineSlider = () => {
  const t = useTranslations("MagazineSection");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | undefined>(undefined);

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
          <div className="px-0 md:px-16 pb-10 md:pb-16 flex justify-between items-center">
            <h2 className="text-[28px] md:text-[40px] font-normal text-[#1f1f1f] max-full mb-4">
              {t("heading.title")}
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="!w-12 !h-12 !mt-0 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="!w-12 !h-12 !mt-0 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Slider */}
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            loop={false}
            autoplay={false}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >
            {DataItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="group relative rounded-2xl overflow-hidden shadow-md h-[300px] md:h-[470px] flex mb-4"
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
                  {item.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.image!}
                      alt={item.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      priority={idx === 0}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 flex flex-col justify-between w-full h-full">
                  <div>
                    <span className="block text-xs font-semibold tracking-widest text-[#222222] mb-2">
                      {t(item.label)}
                    </span>
                    <h3 className="text-xl font-normal text-[#222222] leading-snug line-clamp-3">
                      {t(item.title)}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default MagazineSlider;

