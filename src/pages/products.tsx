import { Navbar } from "@/components/layout/navbar";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Footer } from "@/components/layout/footer";

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
}
