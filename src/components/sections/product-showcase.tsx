import { motion } from "framer-motion";
import { Link } from "wouter";
import productImage from "@assets/generated_images/pear_tree_well_water_bottle_packaging.png";

const products = [
  {
    name: "Sparkling Mineral Water",
    size: "750ml",
    type: "Glass Bottle",
    category: "Classic"
  },
  {
    name: "Still Mineral Water",
    size: "750ml",
    type: "Glass Bottle",
    category: "Classic"
  },
  {
    name: "Sparkling Mineral Water",
    size: "330ml",
    type: "Glass Bottle",
    category: "Individual"
  },
  {
    name: "Still Mineral Water",
    size: "330ml",
    type: "Glass Bottle",
    category: "Individual"
  },
  {
    name: "Still Mineral Water",
    size: "500ml",
    type: "PET Bottle",
    category: "On-the-go"
  },
  {
    name: "Still Mineral Water",
    size: "5 Ltr",
    type: "Bottle",
    category: "Family"
  },
  {
    name: "Still Mineral Water",
    size: "10 Ltr",
    type: "Bottle",
    category: "Family"
  },
  {
    name: "Aqua Mist",
    size: "50ml",
    type: "Pump Spray Atomiser",
    category: "Specialty"
  }
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary/60 font-semibold mb-4 block">
              Our Collection
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">
              Our Products
            </h1>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              Pure mineral water from the heart of the High Weald, curated for every occasion.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 items-start">
          {products.map((product, index) => (
            <motion.div 
              key={`${product.name}-${product.size}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group text-center"
            >
              <Link href="#/contact" className="block cursor-pointer">
                <div className="relative aspect-[3/4] mb-6 bg-gray-50 flex items-center justify-center p-8 overflow-hidden">
                  <img 
                    src={productImage} 
                    alt={product.name}
                    className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary/5 text-primary text-[10px] px-2 py-1 uppercase tracking-widest font-semibold">
                    {product.category}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-primary mb-1 leading-tight">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{product.size} {product.type}</p>
                <span className="text-xs uppercase tracking-widest border-b border-primary/20 pb-1 group-hover:border-primary transition-colors opacity-0 group-hover:opacity-100 duration-300">
                  Inquire Now
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
