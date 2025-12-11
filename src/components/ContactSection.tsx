import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center max-w-2xl mx-auto">
         
          <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h3>
          <p className="text-muted-foreground text-lg mb-10">
            I'm currently available for work and full-time opportunities. 
            If you have a project in mind or just want to chat, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={20} className="text-primary" />
              <a href="mailto:Zahiraln9@gmail.com" className="hover:text-primary transition-colors">
                Zahiraln9@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={20} className="text-primary" />
              <span>Bangalore, India</span>
            </div>
          </div>

          <Button variant="hero" size="xl" asChild>
            <a href="mailto:Zahiraln9@gmail.com">
              <Send size={20} />
              Send Me a Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
