import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import textureImage from "@assets/generated_images/nature_texture_wet_leaves_and_stone.png";

const mineralAnalysis = [
  { name: "Calcium", value: "24", unit: "mg/L" },
  { name: "Magnesium", value: "7", unit: "mg/L" },
  { name: "Potassium", value: "5.5", unit: "mg/L" },
  { name: "Silicon", value: "8.7", unit: "mg/L" },
  { name: "Strontium", value: "340", unit: "µg/L" },
  { name: "Boron", value: "169", unit: "µg/L" },
  { name: "Calcium Fluoride", value: "156", unit: "µg/L" },
  { name: "Zinc", value: "7", unit: "µg/L" },
  { name: "Iron", value: "54", unit: "µg/L" },
  { name: "Manganese", value: "37", unit: "µg/L" },
  { name: "Copper", value: "10", unit: "µg/L" },
  { name: "Phosphorus", value: "14", unit: "µg/L" },
  { name: "Molybdenum", value: "2", unit: "µg/L" },
  { name: "Selenium", value: "1", unit: "µg/L" },
  { name: "Chromium", value: "1", unit: "µg/L" },
  { name: "Silver", value: "0.2", unit: "µg/L" },
  { name: "Nitrite", value: "0.01", unit: "mg/L" },
];

export default function Source() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        {/* Clean Header */}
        <section className="bg-background py-16 mb-0 text-center border-b border-primary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-6"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary/60 font-semibold mb-4 block">The Composition</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">Our Water</h1>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              Filtered through the ancient strata of the High Weald. A unique mineral fingerprint, untouched and pure.
            </p>
          </motion.div>
        </section>

        {/* Origin Section */}
        <section className="py-12 bg-white overflow-hidden border-b border-primary/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted rounded-sm shadow-xl">
                  <img
                    src={textureImage}
                    alt="Strata of the High Weald"
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
                  A gift from the ancient strata.
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg text-left">
                  <p>
                    Pear Tree Well originates from a protected aquifer deep within the High Weald. 
                    Unlike mountain springs, our water undergoes a journey of deep subterranean filtration.
                  </p>
                  <p>
                    Resting 120ft beneath the surface, the water is naturally protected and slowly enriched by the surrounding rock formations over thousands of years.
                  </p>
                  <p>
                    The result is a remarkably stable and balanced mineral profile, creating a taste that is both crisp and characterful.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mineral Analysis Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <h3 className="text-3xl font-serif text-primary italic">Mineral Analysis</h3>
              <p className="text-muted-foreground font-light tracking-wide uppercase text-sm">Typical Analysis (µg/L and mg/L)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
              {mineralAnalysis.map((mineral, index) => (
                <motion.div
                  key={mineral.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="flex justify-between items-end border-b border-primary/10 pb-2 group hover:border-primary/30 transition-colors"
                >
                  <span className="font-serif text-primary/80 group-hover:text-primary transition-colors">{mineral.name}</span>
                  <div className="text-right">
                    <span className="font-medium text-lg text-primary">{mineral.value}</span>
                    <span className="text-[10px] uppercase tracking-tighter text-muted-foreground ml-1">{mineral.unit}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 p-8 bg-primary/5 border-l-4 border-primary italic text-muted-foreground text-center max-w-3xl mx-auto">
              "A perfect balance of 17 natural minerals and trace elements, preserved in their purest state by nature herself."
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
