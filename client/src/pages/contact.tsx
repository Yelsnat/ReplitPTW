import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
  };

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
            <span className="text-sm uppercase tracking-[0.3em] text-primary/60 font-semibold mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">Contact Us</h1>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              Have a question about our water or delivery service? We'd love to hear from you.
            </p>
          </motion.div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="rounded-none border-primary/20 focus:border-primary" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="rounded-none border-primary/20 focus:border-primary" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="rounded-none border-primary/20 focus:border-primary" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    className="min-h-[150px] rounded-none border-primary/20 focus:border-primary" 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full rounded-none h-12 text-sm uppercase tracking-widest bg-primary hover:bg-primary/90 transition-colors">
                  Send Message
                </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
