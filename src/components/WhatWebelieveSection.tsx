"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

interface SlideData {
    title: string;
    image: string;
    href: string;
}

const data: SlideData[] = [
  {
    title: "We’re working to reduce our GHG emissions",
    image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
    href: "#",
  },
  {
    title: "From transportation fuels to advanced materials, innovation is key",
    image: "https://images.pexels.com/photos/3855961/pexels-photo-3855961.jpeg",
    href: "#",
  },
  {
    title: "Professional growth to make a positive impact",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    href: "#",
  },
  {
    title:
      "Aramco is one of the world’s largest integrated energy and chemicals companies",
    image: "https://images.pexels.com/photos/669365/pexels-photo-669365.jpeg",
    href: "#",
  },
  {
    title: "From transportation fuels to advanced materials, innovation is key",
    image: "https://images.pexels.com/photos/3855961/pexels-photo-3855961.jpeg",
    href: "#",
  },
  {
    title: "Professional growth to make a positive impact",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    href: "#",
  },
];

const WhatWebelieveSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const progress = ((activeIndex + 1) / data.length) * 100;

  const handleMouseMove = (e: React.MouseEvent, idx: number) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="px-0 md:px-16 pb-10 md:pb-16">
          <h2 className="uppercase tracking-wider text-[#1f1f1f] text-sm mb-4">
            WHAT WE BELIEVE
          </h2>
          <p className="text-2xl font-normal text-[#1f1f1f] mb-[22px] max-w-[600px]">
            We believe in the power of energy to help transform lives, enhance
            communities, and advance human progress.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
          >
            {data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link href={item.href} className="group block relative">
                  <div
                    className="relative h-[280px] overflow-hidden rounded-t-[20px] rounded-l-[20px] mt-8"
                    onMouseMove={(e) => handleMouseMove(e, idx)}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === idx && (
                      <motion.div
                        className="pointer-events-none absolute w-20 h-20 rounded-full bg-white/20 shadow-lg z-50"
                        animate={{ x: mousePosition.x - 40, y: mousePosition.y - 40, scale: 1.5, opacity: 0.3, }}
                        initial={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.2, }}
                      />
                    )}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                      priority={idx === 0}
                    />
                  </div>
                  <div className="py-4">
                    <p className="text-[#1f1f1f] text-sm font-normal mb-2">{item.title}</p>
                    <span className="text-blue-400 flex items-center gap-2 text-sm font-medium">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="group-hover:translate-x-1 transition-transform mr-4"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                          fill="currentColor"
                        />
                      </motion.svg>
                      Learn more
                    </span>
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
      </div>
    </section>
  );
};

export default WhatWebelieveSection;
