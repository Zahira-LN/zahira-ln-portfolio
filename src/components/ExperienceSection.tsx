import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "SPM Global Technology (Client: DealDox)",
    location: "Bangalore, India",
    period: "Jun 2023 – Present",
    description: [
      "Designed and developed responsive, dynamic UIs using React.js, Tailwind CSS, and Material UI for Survey, CPQ, and Reporting modules",
      "Implemented real-time synchronization using Socket.io in Survey Builder, enabling instant updates without page reloads",
      "Integrated RESTful APIs into pricing and approval workflows, built interactive dashboards for data-driven decision-making",
      "Delivered reusable UI components for approvals, surveys, and pricing modules with seamless API integration",
    ],
    current: true,
  },
  {
    id: 2,
    title: "Web Developer",
    company: "SPM Global Technology (Client: DealDox)",
    location: "Bangalore, India",
    period: "Dec 2023 – Present",
    description: [
      "Built 20+ dynamic, responsive pages using Vue.js with Strapi as the headless CMS",
      "Implemented technical SEO enhancements (structured data, robots.txt, meta strategies) improving search visibility",
      "Optimized performance and accessibility achieving Lighthouse scores above 90+",
      "Partnered with cross-functional teams to align content, design, and functionality with business goals",
    ],
    current: true,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-narrow mx-auto relative">
        <div className="mb-16">
         
          <h2 className="section-title text-foreground mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey in the world of frontend development.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card-hover rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="relative flex items-center gap-1.5 px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-medium text-foreground/80">
                        <ArrowUpRight size={16} className="text-primary" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                    <Calendar size={16} className="text-primary" />
                    <span className="font-display text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="grid gap-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative gradient line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}