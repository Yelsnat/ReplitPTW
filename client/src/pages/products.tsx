import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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

export default function Products() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        {/* Clean Header without ribbon */}
        <section className="bg-background py-16 mb-0 text-center border-b border-primary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-6"
          >
            <span className="text-3xl md:text-5xl font-serif text-primary mb-4 block leading-tight">Our Products</span>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              Pure mineral water from the heart of the High Weald, curated for every occasion.
            </p>
          </motion.div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
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
                  <Link href="/contact" className="block cursor-pointer">
                    <div className="relative aspect-[3/4] bg-gray-50 flex items-center justify-center p-8 overflow-hidden group-hover:bg-gray-100 transition-colors duration-300">
                      <img 
                        src={productImage} 
                        alt={product.name}
                        className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="bg-gray-50 px-4 py-6 group-hover:bg-gray-100 transition-colors duration-300 border-t border-gray-100/50">
                      <h3 className="text-xl font-serif text-primary mb-1 leading-tight">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{product.size} {product.type}</p>
                      <div className="overflow-hidden h-6">
                        <span className="text-xs uppercase tracking-widest border-b border-primary/20 pb-1 group-hover:border-primary transition-all duration-300 transform translate-y-full group-hover:translate-y-0 inline-block opacity-0 group-hover:opacity-100">
                          Inquire Now
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
