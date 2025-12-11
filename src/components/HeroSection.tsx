import { ArrowDown, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container-narrow mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-muted-foreground">Available for work</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up-delay-1 tracking-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Zahira LN</span>
          </h1>
          
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-8 animate-fade-up-delay-2">
            Frontend Developer crafting
            <br />
            <span className="text-foreground">responsive & scalable applications</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-up-delay-3">
            With <span className="text-primary font-semibold">2+ years</span> of hands-on experience in 
            React.js, Vue.js, and TypeScript. Building user-centric solutions with a focus on performance optimization and clean code.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up-delay-3">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold px-8 py-6 text-base rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                <Sparkles size={18} />
                View My Work
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-display font-semibold px-8 py-6 text-base rounded-2xl border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-6 animate-fade-up-delay-3">
            <span className="text-sm text-muted-foreground font-medium">Find me on</span>
            <div className="h-px w-8 bg-border" />
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/Zahira-LN", label: "GitHub" },
                { icon: Linkedin, href: "www.linkedin.com/in/zahira-ln-586b56245", label: "LinkedIn" },
                { icon: Mail, href: "mailto:Zahiraln9@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+917676416466", label: "Phone" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-xl glass-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
  
    </section>
  );
}