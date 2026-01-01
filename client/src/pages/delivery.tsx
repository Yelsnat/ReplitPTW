import { Navbar } from "@/components/layout/navbar";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/layout/footer";

export default function Delivery() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Features />
      </main>
      <Footer />
    </div>
  );
}
