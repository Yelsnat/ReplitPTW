import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import dreamImage from "@assets/generated_images/ethereal_dream_of_treasure_under_a_pear_tree_in_water.png";

export default function Dream() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.3em] text-primary/60 font-semibold mb-4 block">The Story of Pear Tree Well</span>
              <h1 className="text-5xl md:text-7xl font-serif text-primary">Our Story</h1>
            </div>

            <div className="aspect-video overflow-hidden bg-muted relative group shadow-2xl">
              <img
                src={dreamImage}
                alt="Ethereal dream of treasure under a pear tree"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="grid md:grid-cols-1 gap-12 text-lg font-light leading-relaxed text-muted-foreground text-left">
              <div className="space-y-6">
                <p className="text-2xl font-serif text-primary italic leading-relaxed">
                  “The amazing story started in 1998 when I had a vivid dream about the withered old pear tree in my back garden, and heard a voice telling me that there was treasure under it."
                </p>
                
                <p>
                  So I hired a metal detector to explore the area around the pear tree, but found nothing. So I cut down the tree, dug out the root, and found myself standing in a pool of muddy water. I filled in the hole and gave up!
                </p>

                <p>Several nights later, I had a second dream.</p>

                <blockquote className="border-l-4 border-primary/20 pl-8 py-4 space-y-4 my-12">
                  <p className="text-xl text-primary font-medium">“Did you find the treasure?” the voice asked.</p>
                  <p className="text-xl text-primary font-medium">“No, there was no treasure”, I replied.</p>
                  <p className="text-xl text-primary font-medium">“What did you find?” asked the voice.</p>
                  <p className="text-xl text-primary font-medium">“Just water”, I replied.</p>
                  <p className="text-xl text-primary font-medium">The voice then said, “The water is the treasure.”</p>
                </blockquote>

                <p>
                  I hired the services of a geologist, who was sceptical about finding water in this part of Sussex. However, I persuaded him to proceed and after several days of drilling, he came across a layer of rock. When the drill breached this, there was a small, fast-flowing underground stream. The roar of the water was deafening!
                </p>

                <p>
                  Soon, a well was installed and a sample sent to a lab for testing. The results were staggering – it contained at least 16 natural minerals and trace elements.
                </p>
              </div>

              <div className="pt-12 border-t border-primary/10">
                <p className="text-sm uppercase tracking-widest text-primary mb-2">David Pursglove</p>
                <p className="text-muted-foreground italic">Founder of Pear Tree Well</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
