import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NameLogo from '../assets/images/NameLogo.png'

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container-narrow mx-auto px-6 py-4 flex items-center justify-between">
         <img src={NameLogo} alt="" className="md:h-[50px] h-[30px] p-[5px] md:p-[10px]" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary/50 transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <Button 
          size="sm" 
          className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl"
          asChild
        >
          <a href="#contact">Let's Talk</a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl glass-card text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-border/50">
          <ul className="container-narrow mx-auto px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button 
                size="sm" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl"
                asChild
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}