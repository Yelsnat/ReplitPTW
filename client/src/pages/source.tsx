import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import textureImage from "@assets/generated_images/nature_texture_wet_leaves_and_stone.png";

export default function Source() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        {/* Clean Header without ribbon */}
        <section className="bg-background py-24 mb-0 text-center border-b border-primary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-6"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary/60 font-semibold mb-4 block">The Territory</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">Our Water</h1>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              A journey through stone and time. Pure by nature, refined by the earth.
            </p>
          </motion.div>
        </section>

        <section className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                  Born from the heart of the mountains.
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg text-left">
                  <p>
                    Pear Tree Well originates from a protected aquifer deep within the High Weald. 
                    Filtered slowly through layers of limestone and ancient rock for thousands of years.
                  </p>
                  <p>
                    This natural filtration process enriches the water with a unique balance of minerals, 
                    giving it a remarkably light taste and balanced pH.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
