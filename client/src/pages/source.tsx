import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import textureImage from "@assets/generated_images/nature_texture_wet_leaves_and_stone.png";
import strataBackground from "@assets/generated_images/subtle_underground_rock_strata_texture.png";

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
            <span className="text-3xl md:text-5xl font-serif text-primary mb-4 block leading-tight">Our Water</span>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              Filtered through the ancient strata of the High Weald. A unique mineral fingerprint, untouched and pure.
            </p>
          </motion.div>
        </section>

        {/* Origin Section */}
        <section className="relative py-24 overflow-hidden border-b border-primary/5">
          {/* Background Image with High Transparency */}
          <div 
            className="absolute inset-0 z-0 opacity-10 pointer-events-none"
            style={{ 
              backgroundImage: `url(${strataBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-8">
                <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Pear Tree Well originates from a protected aquifer resting 120ft beneath the surface of the High Weald. Unlike mountain springs, our water undergoes a journey of deep subterranean filtration, naturally protected and slowly enriched by ancient rock formations over thousands of years. The result is a remarkably stable and balanced mineral profile, creating a taste that is both crisp and characterful—nature's own creation, untouched and pure.
                </p>
              </div>
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

            <div className="mt-12 text-center">
              <p className="text-xs text-muted-foreground/60 italic font-light tracking-wide">
                *Typical mineral composition. May vary by season.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
