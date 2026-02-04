"use client";

import { useEffect, useState } from "react";

const images = [
  "/assets/banner 1.png",
  "/assets/banner 2.png",
  "/assets/banner 3.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`
            absolute inset-0 bg-cover bg-center transition-opacity duration-1000
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
          style={{ backgroundImage: `url('${img}')` }}
        >
          <div className="absolute inset-0 scale-105 animate-heroZoom" />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/50 z-20" />

      <div className="relative z-30 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl animate-heroFade">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Embrace Passion at Every Age
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            Where Experience Meets Excitement!
            <br />
            Discover Your Silver Lining of Pleasure
          </p>

          <button
            className="inline-block bg-rose-800 hover:bg-rose-950
                       text-white px-8 py-3 rounded-lg
                       transition-all duration-300 hover:scale-105"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
