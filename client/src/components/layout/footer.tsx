import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-serif font-bold uppercase tracking-widest mb-6 block">
                Fonte Pura
            </Link>
            <p className="max-w-md text-primary-foreground/70 font-light">
              Pure mountain spring water, bottled at the source in the Italian Dolomites.
              committed to sustainability and the preservation of our natural heritage.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4 font-light text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">The Water</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News & Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 font-light text-primary-foreground/80">
              <li>Via delle Fonti, 12</li>
              <li>39100 Bolzano, Italy</li>
              <li>info@fontepura.it</li>
              <li>+39 0471 123456</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50 font-light">
          <p>&copy; {new Date().getFullYear()} Fonte Pura S.p.A. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
