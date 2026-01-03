import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Truck, Calendar, CreditCard, Recycle, MapPin, Clock } from "lucide-react";
import doorstepImage from "@assets/generated_images/doorstep_delivery_of_water_bottles.png";
import vanImage from "@assets/generated_images/van_delivering_water_in_countryside.png";

const deliverySteps = [
  {
    icon: Calendar,
    title: "Ordering",
    description: "Order by phone, email or online. Most customers set up a regular fortnightly delivery for convenience."
  },
  {
    icon: Clock,
    title: "Deadlines",
    description: "Order by Wednesday evening for Thursday delivery, or Thursday evening for Friday delivery."
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Direct to your doorstep between 9.30am and 6pm. No need to be in if there's a pre-arranged safe place."
  },
  {
    icon: CreditCard,
    title: "Payment",
    description: "Pay via Cash, Cheque, Card, Bank Transfer, Standing Order, or online via PayPal."
  }
];

export default function Delivery() {
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
            <span className="text-sm uppercase tracking-[0.3em] text-primary/60 font-semibold mb-4 block">Our Service</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">Home Delivery</h1>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              A home delivery of delicious, pure water from Pear Tree Well is easy! 
              We bring the treasure of the High Weald directly to your door.
            </p>
          </motion.div>
        </section>

        {/* Coverage Section */}
        <section className="bg-white py-12 mb-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4 text-left">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-4">Where We Deliver</h3>
                    <p className="text-lg font-light text-muted-foreground leading-relaxed">
                      We deliver regularly to <strong>East and West Sussex</strong> and the <strong>London area</strong>.
                    </p>
                    <p className="mt-4 text-muted-foreground font-light">
                      Fortnightly routes cover: Eastbourne, Lewes, Brighton, Lancing, Worthing, East Grinstead and surrounding areas.
                    </p>
                    <p className="mt-2 text-sm italic text-muted-foreground/80">
                      * There is a small charge towards delivery costs.
                    </p>
                  </div>
                </div>
                <img src={vanImage} alt="Delivery van in Sussex" className="w-full aspect-video object-cover shadow-xl" />
              </div>
              
              <div className="space-y-12">
                <div className="grid gap-8 text-left">
                  {deliverySteps.map((step, i) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-serif text-primary mb-2">{step.title}</h4>
                        <p className="text-muted-foreground font-light leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doorstep & Reusable Section */}
        <section className="container mx-auto px-6 py-12 border-t border-primary/10 text-left">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src={doorstepImage} alt="Doorstep delivery" className="w-full aspect-[4/5] object-cover shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary flex items-center justify-center text-white p-4 text-center text-xs uppercase tracking-widest leading-tight">
                Sustainable Reuse
              </div>
            </motion.div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Recycle className="w-8 h-8 text-primary shrink-0" />
                <div className="space-y-6">
                  <h3 className="text-3xl font-serif text-primary">Helping the Environment</h3>
                  <div className="space-y-4 text-lg font-light text-muted-foreground leading-relaxed">
                    <p>
                      Our plastic and glass bottles are reusable! Simply leave them out on a delivery day and we will collect them for re-use when we deliver the new ones.
                    </p>
                    <p className="bg-primary/5 p-6 border-l-4 border-primary italic">
                      "We offer a <strong>refund of £3.00</strong> on a box of empty glass bottles returned in good condition."
                    </p>
                    <p>
                      This helps the environment by reducing plastic waste and minimizing the 'water miles' of your supply.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-serif text-2xl text-primary mb-4">Ready to set up your delivery?</h4>
                <p className="text-muted-foreground font-light mb-8">
                  If you have set up a regular order, you can change or amend your order at any time before the delivery day.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-block px-10 py-4 bg-primary text-white uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
                    Start Your Order
                  </a>
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
