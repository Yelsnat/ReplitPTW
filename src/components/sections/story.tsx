import { motion } from "framer-motion";
import productImage from "@assets/generated_images/pear_tree_well_water_bottle_packaging.png";

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
                src={productImage}
                alt="Pear Tree Well Bottle"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
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
              Our Origin
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              The Only Mineral Water Bottled at Source in Sussex.
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
              <p>
                Our water comes from a source 120 feet deep, confined beneath a 5ft thick layer of rock in the heart of the High Weald.
              </p>
              <p>
                When drawn from the well, it's the first time it has seen the light of day for thousands of years. 
                With at least 16 natural minerals and a balanced pH, it is truly nature's own creation.
              </p>
            </div>
            <div className="pt-4 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-2xl text-primary mb-2">120ft</h4>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Well Depth</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-primary mb-2">16+</h4>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Natural Minerals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
