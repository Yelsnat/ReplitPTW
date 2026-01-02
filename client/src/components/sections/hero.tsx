import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/pear_tree_orchard_with_a_well.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pear Tree Orchard with a Well"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-base md:text-lg uppercase tracking-[0.3em] mb-4 text-white/90 border-b border-white/40 pb-1 w-fit mx-auto">
            Pure Sussex Mineral Water
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium tracking-tight mb-8">
            The Water is the Treasure
          </h1>
          <div className="max-w-3xl mx-auto text-lg md:text-xl font-serif font-light text-white/80 leading-relaxed space-y-2 uppercase tracking-widest">
            <p>Born in the heart of the High Weald.</p>
            <p>Bottled at source from a 120ft deep aquifer.</p>
            <p>Delivered to your table with untouched purity.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
