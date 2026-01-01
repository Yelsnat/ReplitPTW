import { motion } from "framer-motion";
import textureImage from "@assets/generated_images/nature_texture_wet_leaves_and_stone.png";
import { Button } from "@/components/ui/button";

export function Story() {
  return (
    <section id="source" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={textureImage}
                alt="Textures of the spring"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Decorative Offset Border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/20 -z-10 hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <span className="text-sm uppercase tracking-widest text-primary/60 font-semibold">
              The Territory
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              A journey through stone and time.
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
              <p>
                Fonte Pura originates from a protected aquifer deep within the Italian Dolomites. 
                The water begins its journey as snowmelt, filtering slowly through layers of 
                limestone and dolomite rock for over 15 years.
              </p>
              <p>
                This natural filtration process enriches the water with a unique balance of minerals, 
                giving it a remarkably light taste and low sodium content suitable for the finest dining experiences.
              </p>
            </div>
            <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 h-auto text-sm tracking-widest uppercase transition-all">
              Discover Our Origin
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
