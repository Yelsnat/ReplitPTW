import { Navbar } from "@/components/layout/navbar";
import { Story } from "@/components/sections/story";
import { Footer } from "@/components/layout/footer";

export default function Source() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Story />
      </main>
      <Footer />
    </div>
  );
}
