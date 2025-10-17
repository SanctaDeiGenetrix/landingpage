import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/01.png",
  "/images/02.png",
  "/images/03.png",
  "/images/04.png",
  "/images/05.png",
  "/images/06.png",
  "/images/07.png",
  "/images/08.png",
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const x = useMotionValue(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play every 5s
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => autoPlayRef.current && clearInterval(autoPlayRef.current);
  }, []);

  // Pause autoplay on hover
  const pause = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };
  const resume = () => {
    autoPlayRef.current = setInterval(next, 5000);
  };

  return (
    <div
      className="relative w-full h-96 overflow-hidden rounded-2xl group shadow-xl select-none"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`slide-${index}`}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 60 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset }) => {
            if (offset.x < -50) next();
            else if (offset.x > 50) prev();
          }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 pointer-events-none" />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              i === index
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 pointer-events-none group-hover:pointer-events-auto"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 pointer-events-none group-hover:pointer-events-auto"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Subtle glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-yellow-400/20 pointer-events-none"
        animate={{
          boxShadow: [
            "0 0 8px #facc1555",
            "0 0 20px #facc15aa",
            "0 0 8px #facc1555",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
}
