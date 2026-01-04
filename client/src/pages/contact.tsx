import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <h2 className="text-2xl font-serif text-primary mb-4">Thank You!</h2>
                <p className="text-muted-foreground mb-6">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  className="rounded-none h-12 text-sm uppercase tracking-widest bg-primary hover:bg-primary/90 transition-colors"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input name="name" id="name" placeholder="Your name" className="rounded-none border-primary/20 focus:border-primary" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" type="email" id="email" placeholder="your@email.com" className="rounded-none border-primary/20 focus:border-primary" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input name="subject" id="subject" placeholder="How can we help?" className="rounded-none border-primary/20 focus:border-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    name="message"
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[150px] rounded-none border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-none h-12 text-sm uppercase tracking-widest bg-primary hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
