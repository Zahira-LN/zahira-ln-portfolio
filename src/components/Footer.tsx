import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-narrow mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Zahira-LN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="www.linkedin.com/in/zahira-ln-586b56245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
        
            <a
              href="mailto:zahiraln9@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="font-mono text-sm text-muted-foreground">
            Designed & Built by{" "}
            <span className="text-primary">Zahira LN</span>
          </p>

          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
