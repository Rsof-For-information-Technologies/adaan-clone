"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import "swiper/css";
import { div } from "motion/react-client";

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
    title:
      "Aramco is one of the world’s largest integrated energy and chemicals companies",
    image: "https://images.pexels.com/photos/669365/pexels-photo-669365.jpeg",
    href: "#",
  },
];

const DiscoverSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progress = ((activeIndex + 1) / discoverData.length) * 100;

  return (
    <>
      <section className="py-16 md:py-24 bg-[#f2f2f2]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="px-0 md:px-16 pb-10 md:pb-16">
            <p className="uppercase tracking-widest text-[#1f1f1f] text-sm mb-5">
              Discover Aramco
            </p>
            <p className="text-[#1f1f1f] text-[24px] font-normal mb-[22px] max-w-[540px]">
              We are one of the leading producers of the energy and chemicals that
              drive global commerce and help enhance the lives of people around the
              globe.
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
                  className="group relative rounded-2xl overflow-hidden shadow-md h-[470px] flex mb-4"
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
                      <span className="block text-xs font-semibold tracking-widest text-white/80 mb-2">
                        {item.label}
                      </span>
                      <h3 className="text-xl font-normal text-white leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <motion.span
                      className="self-end mt-4 inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/80 bg-black/30 group-hover:bg-white/20"
                      whileHover={{ x: [0, 6, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className="arrow-icon" > <path fillRule="evenodd" clipRule="evenodd" d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z" fill="#FFFFFF" /> </svg>
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
