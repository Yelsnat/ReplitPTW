import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-2xl">
           <h1 className="text-5xl font-serif text-primary mb-12 text-center">Get In Touch</h1>
           
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
              
              <Button type="submit" className="w-full rounded-none h-12 text-sm uppercase tracking-widest bg-primary hover:bg-primary/90">
                Send Message
              </Button>
           </form>

           <div className="mt-20 pt-10 border-t border-primary/10 grid md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                 <h4 className="font-serif text-lg text-primary mb-2">Office</h4>
                 <p className="text-muted-foreground font-light text-sm">
                    Paygate Farm, Palehouse Common<br />
                    Framfield, East Sussex, TN22 5QY
                 </p>
              </div>
              <div>
                 <h4 className="font-serif text-lg text-primary mb-2">Hours</h4>
                 <p className="text-muted-foreground font-light text-sm">
                    Monday – Thursday<br />
                    9:30am – 5:30pm
                 </p>
              </div>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
