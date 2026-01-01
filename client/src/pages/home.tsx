import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <div className="bg-primary py-24 text-center px-6">
           <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 italic">
             "Water is the driving force of all nature."
           </h3>
           <p className="text-white/60 font-light uppercase tracking-widest">— Leonardo da Vinci</p>
        </div>
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
}
