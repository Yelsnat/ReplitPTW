import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import dreamImage from "@assets/generated_images/ethereal_dream_of_treasure_under_a_pear_tree_in_water.png";

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
            <span className="text-sm uppercase tracking-[0.3em] text-primary/60 font-semibold mb-4 block">The Story of Pear Tree Well</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">Our Story</h1>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              The "treasure" beneath the pear tree—a journey of faith, persistence, and nature's gift.
            </p>
          </motion.div>
        </section>

        {/* Side-by-side content */}
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
                <div className="grid md:grid-cols-1 gap-12 text-lg font-light leading-relaxed text-muted-foreground text-left">
                  <div className="space-y-6">
                    <p className="text-2xl font-serif text-primary italic leading-relaxed">
                      “The amazing story started in 1998 when I had a vivid dream about the withered old pear tree in my back garden, and heard a voice telling me that there was treasure under it."
                    </p>
                    
                    <p>
                      So I hired a metal detector to explore the area around the pear tree, but found nothing. So I cut down the tree, dug out the root, and found myself standing in a pool of muddy water.
                    </p>

                    <blockquote className="border-l-4 border-primary/20 pl-8 py-4 space-y-2 my-8">
                      <p className="text-lg text-primary font-medium">“Did you find the treasure?” the voice asked.</p>
                      <p className="text-lg text-primary font-medium">“The voice then said, ‘The water is the treasure.’”</p>
                    </blockquote>

                    <p>
                      I hired the services of a geologist, who was sceptical. However, after several days of drilling, he came across a layer of rock. When the drill breached this, there was a small, fast-flowing underground stream.
                    </p>

                    <p>
                      The results were staggering – it contained at least 16 natural minerals and trace elements.
                    </p>
                    
                    <div className="pt-8 border-t border-primary/10">
                      <p className="text-sm uppercase tracking-widest text-primary mb-1">David Pursglove</p>
                      <p className="text-muted-foreground text-sm italic">Founder of Pear Tree Well</p>
                    </div>
                  </div>
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
