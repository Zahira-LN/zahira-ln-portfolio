import { Code2, Palette, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow mx-auto">
       
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Who I Am
        </h3>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm a Frontend Developer with <span className="text-primary font-semibold">2+ years</span> of 
              hands-on experience building responsive, scalable, and user-centric applications. 
              I'm passionate about turning complex problems into elegant solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in <span className="text-primary">React.js</span>, <span className="text-primary">Redux Toolkit</span>, 
              <span className="text-primary"> Vue.js</span>, and <span className="text-primary">TypeScript</span>. 
              Skilled in API integration, state management, and performance optimization with a 
              proven ability to deliver intuitive, business-driven solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Strong collaborator with cross-functional teams, adaptable to new technologies, 
              and focused on creating efficient and maintainable codebases that drive results.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="gradient-border rounded-xl p-6 bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, scalable, and well-documented code is my priority.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border rounded-xl p-6 bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Palette size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">UI/UX Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating intuitive interfaces that users love to interact with.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border rounded-xl p-6 bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimizing for speed and delivering lightning-fast experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
