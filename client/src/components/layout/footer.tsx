import { Link } from "wouter";
import logoNoBg from "@/assets/Logo_No_Background.png";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col gap-6 mb-8 group">
                <img 
                  src={logoNoBg} 
                  alt="Pear Tree Well" 
                  className="w-32 h-auto rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105" 
                />
                <span className="text-3xl font-serif font-bold uppercase tracking-widest block text-white">
                    Pear Tree Well
                </span>
            </Link>
            <p className="max-w-md text-primary-foreground/70 font-light mb-8">
              Naturally structured mineral water from the heart of the High Weald. 
              The only mineral water bottled at source in Sussex.
            </p>
            <div className="space-y-2 text-primary-foreground/60 font-light italic">
              <p>Opening Hours:</p>
              <p>Monday to Thursday: 9:30am – 5:30pm</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Location</h4>
            <ul className="space-y-2 font-light text-primary-foreground/80">
              <li>Pear Tree Well Ltd</li>
              <li>Paygate Farm</li>
              <li>Palehouse Common</li>
              <li>Framfield, East Sussex</li>
              <li>TN22 5QY</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 font-light text-primary-foreground/80">
              <li>
                <span className="block text-xs uppercase tracking-widest opacity-50">Phone</span>
                (01825) 890444
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest opacity-50">Email</span>
                enquiries@peartreewell.co.uk
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50 font-light">
          <p>&copy; {new Date().getFullYear()} Pear Tree Well Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
