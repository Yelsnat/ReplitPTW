import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Car, Train, Bus, MapPin, Clock } from "lucide-react";

export default function Site() {
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
            <span className="text-sm uppercase tracking-[0.3em] text-primary/60 font-semibold mb-4 block">Visit Us</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">Our Site</h1>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              Located in the heart of the High Weald, Sussex. Come and discover the source of our treasure.
            </p>
          </motion.div>
        </section>

        {/* Location Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="space-y-8 text-center mb-12">
              <h3 className="text-3xl font-serif text-primary">Location</h3>
              <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Pear Tree Well is situated in a protected area of outstanding natural beauty in the High Weald. Our facility is dedicated to protecting the ancient aquifer that provides our pure mineral water.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                <div className="flex items-center gap-3 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="font-serif text-lg">High Weald, Sussex, RH19</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span className="font-light">Open for visits: Mon-Fri, 9am - 5pm</span>
                </div>
              </div>
            </div>

            {/* Google Maps directly underneath Location */}
            <div className="aspect-[21/9] bg-muted relative overflow-hidden shadow-2xl group rounded-sm mb-20">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159154.51594957962!2d-0.12461946809765275!3d51.123281691953264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875f106687289d5%3A0x2d3a0670868f1c8e!2sHigh%20Weald%20AONB!5e0!3m2!1sen!2suk!4v1704278400000!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
               ></iframe>
               <div className="absolute top-4 right-4 bg-primary text-white p-3 text-xs uppercase tracking-widest pointer-events-none">
                  The Source
               </div>
            </div>

            {/* Access Section */}
            <div className="space-y-12">
              <h3 className="text-3xl font-serif text-primary text-center">Access</h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-primary mb-2">By Car</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      We are located just off the A22. Secure parking is available on-site for visitors. 
                      Follow signs for the High Weald Heritage area.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Train className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-primary mb-2">By Train</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      The nearest station is East Grinstead (Direct from London Victoria/Bridge). 
                      A short 10-minute taxi ride will bring you to our gates.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bus className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-primary mb-2">By Bus</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Local routes 270 and 291 stop at the bottom of the lane. 
                      It is a scenic 5-minute walk from the bus stop to the well.
                    </p>
                  </div>
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
