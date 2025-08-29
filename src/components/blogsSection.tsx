"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import "swiper/css";

const data = [
  {
    date: "News - August 14, 2025",
    title: "Aramco signs $11 billion Jafurah midstream deal with international consortium led by Global Infrastructure Partners",
    href: "#",
  },
  {
    date: "News - August 14, 2025",
    title: "Aramco announces second quarter and half-year 2025 results",
    href: "#",
  },
  {
    date: "News - August 14, 2025",
    title: "Aramco announces completion of $5 billion bond issuance",
    href: "#",
  },
  {
    date: "News - August 14, 2025",
    title:
      "Aramco achieves world-first by commissioning breakthrough renewable energy storage system for gas operations",
    href: "#",
  },
    {
    date: "News - August 14, 2025",
    title: "From transportation fuels to advanced materials, innovation is key",
    href: "#",
  },
];

const BlogsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progress = ((activeIndex + 1) / data.length) * 100;

  return (
    <section className="py-16 md:py-24 bg-[#f2f2f2]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end px-0 md:px-16 pb-10 md:pb-16">
          <h2 className="text-[28px] md:text-[40px] font-normal text-[#1f1f1f] max-w-[600px]">
            News from the world of Aramco
          </h2>
          <div className="text-blue-400 flex items-center gap-3 text-sm font-medium group mt-5 md:mt-0">
            Read All News
            <Link href={"#"} className="">
              <div className="flex flex-col justify-between items-center">
                {/* Arrow */}
                <motion.span
                  className="self-end inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-full border-2"
                  whileHover={{ x: [0, 6, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                    className="arrow-icon"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                      fill="currentColor"
                    />{" "}
                  </svg>
                </motion.span>
              </div>
            </Link>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
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
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Link
                href={item.href}
                className="group relative rounded-2xl overflow-hidden h-[450px] flex mb-4"
              >
                <div className="absolute inset-0 bg-white" />
                <div className="relative z-10 flex flex-col justify-between w-full h-full p-6">
                  <div>
                    <span className="block font-normal text-sm tracking-widest text-[#1f1f1f] mb-2">
                      {item.date}
                    </span>
                    <h3 className="text-xl mt-4 font-normal text-[#1f1f1f] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    className="self-end mt-4 inline-flex items-center justify-center w-9 h-9 rounded-full border-2 border-[#63b3ed]"
                    whileHover={{ x: [0, 6, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className="arrow-icon" > <path fillRule="evenodd" clipRule="evenodd" d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z" fill="#63b3ed" /> </svg>
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
  );
};

export default BlogsSlider;
