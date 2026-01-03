import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoNoBg from "@/assets/Logo_No_Background.png";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "/dream" },
    { name: "Our Water", href: "/source" },
    { name: "Our Products", href: "/products" },
    { name: "Our Commitment", href: "/commitment" },
    { name: "Our Site", href: "/site" },
    { name: "Home Delivery", href: "/delivery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        (isScrolled || !isHome)
          ? "bg-background/90 backdrop-blur-md py-4 border-border/40 shadow-sm"
          : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container-fluid mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center z-50 relative group">
            <img 
              src={logoNoBg} 
              alt="Pear Tree Well" 
              className={cn(
                "h-16 md:h-20 w-auto transition-all duration-300 group-hover:scale-110",
                (isHome && !isScrolled) ? "brightness-0 invert" : ""
              )}
            />
        </Link>

        {/* Desktop Nav */}
        <div className={cn(
          "hidden md:flex items-center gap-6",
          (isHome && !isScrolled) ? "text-white" : "text-foreground"
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest hover:opacity-70 transition-opacity",
                location === link.href && "font-semibold border-b border-current"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden z-50 relative",
            (isHome && !isScrolled) ? "text-white" : "text-primary"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 text-foreground z-40">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
