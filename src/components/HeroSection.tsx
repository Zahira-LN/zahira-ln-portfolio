import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Zap,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import UserImage from "../assets/images/User_Image.jpg";
export function HeroSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-primary/25 via-accent/15 to-transparent rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] bg-gradient-to-tl from-accent/25 via-primary/15 to-transparent rounded-full blur-[160px] animate-pulse" />

      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10 w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-1">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs sm:text-sm mb-4 border border-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-foreground/80 font-medium">
                Open to opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I’m <span className="gradient-text">Zahira LN</span>
            </h1>

            {/* Role */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4">
              <span className="text-foreground/90">Frontend Developer</span>{" "}
              crafting{" "}
              <span className="text-primary">pixel-perfect experiences</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              <span className="text-primary font-semibold">2+ years</span>{" "}
              building modern web apps with React, Vue & TypeScript. Passionate
              about clean code, animations & delightful UX.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl px-8 py-6 text-base"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl px-8 py-6 text-base"
                asChild
              >
                <a href="#contact">Let’s Talk</a>
              </Button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 animate-fade-up-delay-3">
              <span className="text-sm text-muted-foreground/70 font-medium uppercase tracking-wider">
                Connect
              </span>

              <div className="h-px w-12 bg-gradient-to-r from-border to-transparent" />

              <div className="flex gap-2">
                {[
                  {
                    icon: Github,
                    href: "https://github.com",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:Zahiraln3270@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={label}
                    className="group p-3.5 rounded-xl glass-card text-muted-foreground hover:text-primary border border-transparent hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <Icon
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center animate-fade-up">
            <div className="relative">
              {/* Animated decorative rings */}
              <div
                className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/20 animate-spin"
                style={{ animationDuration: "25s" }}
              />

              <div
                className="absolute -inset-12 rounded-full border border-accent/10 animate-spin"
                style={{
                  animationDuration: "35s",
                  animationDirection: "reverse",
                }}
              />

              {/* Glowing orb behind image */}
              <div
                className="absolute inset-4 bg-gradient-to-br from-primary/50 via-accent/40 to-primary/30 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "3s" }}
              />

              {/* Profile image container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden p-1.5 bg-gradient-to-br from-primary via-accent to-primary">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src={UserImage}
                    alt="Zahira LN - Frontend Developer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
