import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import dreamImage from "@assets/generated_images/ethereal_dream_of_treasure_under_a_pear_tree_in_water.png";
import bubbleImage from "@assets/generated_images/close-up_of_sparkling_mineral_water_bubbles_in_glass.png";
import rockImage from "@assets/generated_images/detail_of_ancient_rock_layer_in_sussex_high_weald.png";

export default function Dream() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        {/* Header with background color */}
        <section className="bg-secondary/30 py-24 mb-0 text-center border-b border-primary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-6"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary/60 font-semibold mb-4 block">The Heritage of Pear Tree Well</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">Our Story</h1>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              A vision that became a reality—the extraordinary journey of discovering Sussex's hidden treasure.
            </p>
          </motion.div>
        </section>

        {/* Section 1: The Vision */}
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
                <div className="aspect-[4/5] overflow-hidden bg-muted shadow-2xl">
                  <img
                    src={dreamImage}
                    alt="Ethereal dream of treasure"
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
                <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground">
                  <h3 className="text-3xl font-serif text-primary italic">The First Dream</h3>
                  <p>
                    The amazing story started in 1998 when David Pursglove had a vivid dream about the withered old pear tree in his back garden. A voice, clear and resonant, spoke to him in the silence of the night, telling him that there was treasure hidden deep beneath its roots.
                  </p>
                  <p>
                    Initially skeptical but deeply moved by the clarity of the vision, David hired a metal detector. He searched the soil, looking for gold or silver, but found nothing. Determined to find the secret, he eventually cut down the tree and dug out the root, only to find himself standing in a pool of cold, muddy water. Discouraged, he filled in the hole and gave up.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: The Treasure */}
        <section className="py-24 bg-primary text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 space-y-8"
              >
                <h3 className="text-3xl font-serif italic text-white/90">The Revelation</h3>
                <blockquote className="border-l-4 border-white/20 pl-8 py-4 space-y-4">
                  <p className="text-2xl font-serif">“Did you find the treasure?” the voice asked in a second dream.</p>
                  <p className="text-2xl font-serif">“No, there was no treasure”, David replied.</p>
                  <p className="text-2xl font-serif">“What did you find?”</p>
                  <p className="text-2xl font-serif italic">“Just water.”</p>
                  <p className="text-2xl font-serif text-white">“The water is the treasure.”</p>
                </blockquote>
                <p className="text-lg font-light opacity-80 leading-relaxed">
                  This realization changed everything. The "treasure" wasn't precious metal—it was the very essence of life itself, hidden for thousands of years beneath the Sussex soil.
                </p>
              </motion.div>
              <div className="order-1 md:order-2 aspect-square overflow-hidden shadow-2xl">
                 <img src={bubbleImage} alt="Pure water treasure" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Reality */}
        <section className="py-24 md:py-40 bg-white">
          <div className="container mx-auto px-6">
             <div className="grid md:grid-cols-2 gap-20 items-center">
               <div className="aspect-[16/9] md:aspect-square">
                  <img src={rockImage} alt="Ancient rock layer" className="w-full h-full object-cover shadow-xl" />
               </div>
               <div className="space-y-8">
                  <h3 className="text-3xl font-serif text-primary">A Journey Through Time</h3>
                  <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
                    <p>
                      David hired a geologist, who remained skeptical about finding significant water in this specific part of Sussex. But David’s faith was unshakeable. After several grueling days of drilling, the team struck a formidable layer of rock five feet thick.
                    </p>
                    <p>
                      When the drill finally breached this ancient barrier, the response was immediate. A small, fast-flowing underground stream was liberated. The roar of the water was deafening—the sound of a thousands-year-old secret finally coming to light.
                    </p>
                    <p>
                      Laboratory tests soon confirmed the miracle: the water contained over 16 natural minerals and trace elements, perfectly balanced by nature herself. This was truly nature's own creation, untouched by modern chemicals or pollutants.
                    </p>
                  </div>
                  <div className="pt-12 border-t border-primary/10">
                    <p className="text-sm uppercase tracking-widest text-primary mb-1">David Pursglove</p>
                    <p className="text-muted-foreground text-sm italic">Founder of Pear Tree Well</p>
                  </div>
               </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
