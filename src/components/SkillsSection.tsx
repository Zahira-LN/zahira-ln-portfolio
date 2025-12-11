import { Code2, Palette, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "Vue.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit"],
  },
  {
    title: "UI & Styling",
    icon: Palette,
    skills: ["HTML5", "CSS3", "Tailwind CSS", "Material UI", "Responsive Design"],
  },
  {
    title: "APIs & CMS",
    icon: Globe,
    skills: ["RESTful APIs", "Socket","Strapi CMS"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Vercel", "Netlify"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">

        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Technologies I Work With
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card p-6 rounded-2xl hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/80 border border-border/50 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="glass-card px-8 py-5 rounded-2xl text-center">
            <div className="text-3xl font-bold gradient-text mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="glass-card px-8 py-5 rounded-2xl text-center">
            <div className="text-3xl font-bold gradient-text mb-1">20+</div>
            <div className="text-sm text-muted-foreground">Pages Built</div>
          </div>
          <div className="glass-card px-8 py-5 rounded-2xl text-center">
            <div className="text-3xl font-bold gradient-text mb-1">90+</div>
            <div className="text-sm text-muted-foreground">Lighthouse Score</div>
          </div>
        </div>
      </div>
    </section>
  );
}
