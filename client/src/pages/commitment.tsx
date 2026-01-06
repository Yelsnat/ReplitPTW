import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Recycle, Leaf, Droplets, ShieldCheck } from "lucide-react";
import commitmentImage from "@assets/generated_images/nature_texture_wet_leaves_and_stone.png";
import sustainableBg from "@assets/generated_images/minimalist_leaf_and_water_texture.png";

export default function Commitment() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        <section className="bg-background py-16 mb-0 text-center border-b border-primary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-6"
          >
            <span className="text-3xl md:text-5xl font-serif text-primary mb-4 block leading-tight">Our Commitment</span>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              Preserving the purity of the High Weald for generations to come through sustainable practices and innovative packaging.
            </p>
          </motion.div>
        </section>

        <section className="relative py-24 overflow-hidden border-b border-primary/5">
          {/* Background Image with High Transparency */}
          <div 
            className="absolute inset-0 z-0 opacity-10 pointer-events-none"
            style={{ 
              backgroundImage: `url(${sustainableBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="container relative z-10 mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Sustainable Packaging */}
              <div className="space-y-8">
                <div className="flex items-start gap-4 text-left">
                  <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif text-primary">Sustainable Packaging</h3>
                    <p className="text-lg font-light text-muted-foreground leading-relaxed">
                      We use a special, high-grade sustainable plastic for our non-glass bottles. This material is designed to be exceptionally durable, allowing for multiple uses before it even enters the recycling stream.
                    </p>
                    <p className="text-lg font-light text-muted-foreground leading-relaxed">
                      Our commitment to the environment means we constantly evaluate our materials to ensure they have the lowest possible carbon footprint while maintaining the pristine quality of our mineral water.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Refund Program */}
              <div className="space-y-8">
                <div className="flex items-start gap-4 text-left">
                  <Recycle className="w-8 h-8 text-primary shrink-0" />
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif text-primary">The Refund Program</h3>
                    <div className="space-y-4 text-lg font-light text-muted-foreground leading-relaxed">
                      <p>
                        Our plastic and glass bottles are reusable! Simply leave them out on a delivery day and we will collect them for re-use when we deliver the new ones.
                      </p>
                      <div className="bg-primary/5 p-6 border-l-4 border-primary italic">
                        <p className="text-primary font-medium mb-2">Did you know?</p>
                        "We offer a <strong>refund of £3.00</strong> on a box of empty glass bottles returned in good condition."
                      </div>
                      <p>
                        By returning your bottles, you help us close the loop, drastically reducing plastic waste and minimizing the 'water miles' of your supply.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <Droplets className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-serif text-primary mb-6">Zero Waste Vision</h3>
            <p className="text-lg font-light text-muted-foreground leading-relaxed">
              Every step of our process—from the 120ft deep aquifer to your doorstep—is designed with the environment in mind. We believe that pure water shouldn't cost the earth.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
