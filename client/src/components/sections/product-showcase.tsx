import { motion } from "framer-motion";
import productImage from "@assets/generated_images/premium_mineral_water_bottle_product_shot.png";
import { Button } from "@/components/ui/button";

export function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm uppercase tracking-widest text-primary/60 font-semibold mb-4 block">
            The Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">
            Bottled Elegance
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-end">
          {/* Still Water */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer text-center"
          >
            <div className="relative aspect-[3/4] mb-8 bg-gray-50 flex items-center justify-center p-8 overflow-hidden">
               <img 
                src={productImage} 
                alt="Still Water"
                className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-serif text-primary mb-2">Naturale</h3>
            <p className="text-muted-foreground mb-4">Still Mineral Water</p>
            <span className="text-sm border-b border-primary/20 pb-1 group-hover:border-primary transition-colors">View Details</span>
          </motion.div>

          {/* Sparkling Water - Featured */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group cursor-pointer text-center md:-mt-12"
          >
            <div className="relative aspect-[3/4] mb-8 bg-gray-50 flex items-center justify-center p-8 overflow-hidden">
               <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 uppercase tracking-wider">Best Seller</div>
               <img 
                src={productImage} 
                alt="Sparkling Water"
                className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-serif text-primary mb-2">Frizzante</h3>
            <p className="text-muted-foreground mb-4">Sparkling Mineral Water</p>
            <span className="text-sm border-b border-primary/20 pb-1 group-hover:border-primary transition-colors">View Details</span>
          </motion.div>

          {/* Lightly Sparkling */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group cursor-pointer text-center"
          >
            <div className="relative aspect-[3/4] mb-8 bg-gray-50 flex items-center justify-center p-8 overflow-hidden">
               <img 
                src={productImage} 
                alt="Lightly Sparkling Water"
                className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-serif text-primary mb-2">Leggera</h3>
            <p className="text-muted-foreground mb-4">Lightly Sparkling</p>
            <span className="text-sm border-b border-primary/20 pb-1 group-hover:border-primary transition-colors">View Details</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
