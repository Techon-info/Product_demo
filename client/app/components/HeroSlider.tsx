"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    title: "Big Summer Sale",
    description: "Up to 50% off on fashion",
    image: "/hero.jpg",
    cta: "Shop Now",
  },
  {
    title: "New Arrivals",
    description: "Fresh styles just landed",
    image: "/hero.jpg",
    cta: "Explore",
  },
  {
    title: "Best Deals",
    description: "Top brands at best prices",
    image: "/hero.jpg",
    cta: "View Offers",
  },
];

export default function HeroSlider() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // clone slides for infinite effect
  const infiniteSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [index, setIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    setWidth(containerRef.current.offsetWidth);
  }, []);

  // autoplay
  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [paused]);

  // reset position for infinite loop
  useEffect(() => {
    if (index === infiniteSlides.length - 1) {
      setTimeout(() => setIndex(1), 300);
    }
    if (index === 0) {
      setTimeout(() => setIndex(infiniteSlides.length - 2), 300);
    }
  }, [index]);

  return (
    <div
      className="relative w-full h-[60vh] overflow-hidden mt-3 rounded"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex h-full"
        animate={{ x: -index * width }}
        transition={{ ease: "easeInOut", duration: 0.4 }}
        drag="x"
        dragConstraints={{
          left: -width * (infiniteSlides.length - 1),
          right: 0,
        }}
        onDragEnd={(_, info) => {
          if (info.offset.x < -100) setIndex((i) => i + 1);
          if (info.offset.x > 100) setIndex((i) => i - 1);
        }}
      >
        {infiniteSlides.map((slide, i) => (
          <div
            key={i}
            ref={i === 1 ? containerRef : null}
            className="relative min-w-full h-full"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="/blur.png"
              priority={i === 1}
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="ml-10 max-w-xl text-white">
                <h1 className="text-4xl font-bold mb-3">{slide.title}</h1>
                <p className="mb-6">{slide.description}</p>
                <button className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i + 1)}
            className={`h-3 w-3 rounded-full ${
              index === i + 1 ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
