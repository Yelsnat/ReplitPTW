import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
           <h1 className="text-5xl font-serif text-primary mb-12">Get In Touch</h1>
           <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                 <div>
                    <h3 className="text-xl font-serif text-primary mb-4">Location</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                       Pear Tree Well Ltd<br />
                       Paygate Farm<br />
                       Palehouse Common<br />
                       Framfield, East Sussex<br />
                       TN22 5QY
                    </p>
                 </div>
                 <div>
                    <h3 className="text-xl font-serif text-primary mb-4">Opening Hours</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                       Monday to Thursday<br />
                       9:30am – 5:30pm
                    </p>
                 </div>
              </div>
              <div className="space-y-8">
                 <div>
                    <h3 className="text-xl font-serif text-primary mb-4">Contact Details</h3>
                    <div className="space-y-4">
                       <div>
                          <span className="block text-xs uppercase tracking-widest text-primary/60 mb-1">Phone</span>
                          <p className="text-lg font-light">(01825) 890444</p>
                       </div>
                       <div>
                          <span className="block text-xs uppercase tracking-widest text-primary/60 mb-1">Email</span>
                          <p className="text-lg font-light">enquiries@peartreewell.co.uk</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
