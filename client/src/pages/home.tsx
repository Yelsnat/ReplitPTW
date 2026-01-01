import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Features } from "@/components/sections/features";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Features />
        <div className="bg-primary py-24 text-center px-6">
           <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 italic max-w-4xl mx-auto leading-tight">
             "Water is life’s mater and matrix, mother and medium. There is no life without water."
           </h3>
           <p className="text-white/60 font-light uppercase tracking-widest">— Albert Szent-Gyorgyi</p>
        </div>
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
}
