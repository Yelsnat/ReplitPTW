import { motion } from "framer-motion";
import { Truck, GlassWater, Recycle, MapPin } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Fortnightly delivery to Lewes, Eastbourne, Brighton, Forest Row and surrounding areas."
  },
  {
    icon: GlassWater,
    title: "Naturally Structured",
    description: "Pure, naturally structured water for optimal health and maximum hydration."
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Bottled in glass and safe non-toxic plastic. Reducing water miles by staying local."
  },
  {
    icon: MapPin,
    title: "Sussex Heritage",
    description: "Proudly independent and the only mineral water bottled at source in East Sussex."
  }
];

export function Features() {
  return (
    <section id="delivery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <feature.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              <h3 className="text-xl font-serif text-primary">{feature.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
