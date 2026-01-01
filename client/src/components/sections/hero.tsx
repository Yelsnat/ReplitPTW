import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/mountain_spring_water_hero_background.png";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pristine mountain spring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-white/90">
            Italian Alps Mineral Water
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium tracking-tight mb-8">
            Pure by Nature
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl font-light text-white/80 leading-relaxed mb-10">
            Born from the heart of the mountains, filtered through ancient rock, 
            delivered to your table with untouched purity.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown className="w-6 h-6 opacity-70" />
      </motion.div>
    </section>
  );
}
