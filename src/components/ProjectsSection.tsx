import { useState } from "react";
import {
  ExternalLink,
  Github,
  Play,
  X,
  Sparkles,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import SkCostume from "../assets/images/Sk_Costume.jpg";
import SPresin from "../assets/images/SP_Resin.jpg";
import PCConstruction from "../assets/images/Poorna_Chandra_Construction.jpg";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Sri Krishna Costumes",
    description:
      "A production-ready costume browsing web app built using React, Tailwind CSS, and Strapi CMS. Includes secure authentication, real-time Toastify notifications, advanced filtering for products and courses, optimized global state with Context API, and a fully responsive UI. Smooth navigation, fast loading, and deployed on Netlify with CI support via Vercel.",
    tags: ["React", "Tailwind CSS", "Node", "Context API", "Vercel"],
    videoUrl:
      "https://res.cloudinary.com/db5yunfbj/video/upload/v1765473704/SkCostumes_v3pwfx.mp4",
    liveUrl: "https://www.skcostumes.com/",
    githubUrl: "#",
    image: SkCostume,
    category: "Web App",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 2,
    title: "Poorna Chandra Constructions",
    description:
      "A modern and responsive company website built with React.js and Tailwind CSS to showcase construction services and project highlights. Features optimized routing with React Router, real-time Toastify notifications, SEO-friendly architecture, and performance enhancements for a smooth experience across all devices.",
    tags: ["React.js", "Tailwind CSS", "React Router", "Toastify"],
    videoUrl:
      "https://res.cloudinary.com/db5yunfbj/video/upload/v1765473725/PoornaChnadra_qjuouw.mp4",
    liveUrl: "https://poornachandraconstruction.vercel.app/",
    githubUrl: "#",
    image: PCConstruction,
    category: "Website",
    color: "from-orange-500 to-rose-500",
  },

  {
    id: 3,
    title: "SP Resin Art Studio",
    description:
      "Built a responsive e-commerce web app using Vite, React, TypeScript, shadcn-ui, and Tailwind CSS. Designed clean, reusable UI components and implemented dynamic product listings to showcase resin art collections and discounted cosmetic products with smooth, fast performance.",
    tags: ["Vite", "React", "TypeScript", "Strapi CMS", "shadcn-ui"],
    videoUrl:
      "https://res.cloudinary.com/db5yunfbj/video/upload/v1765473730/SPResin_uk8goe.mp4",
    liveUrl: "https://www.spresinart.in/",
    githubUrl: "#",
    image: SPresin,
    category: "E-Commerce",
    color: "from-pink-500 to-rose-400",
  },
];

export function ProjectsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<number>(1);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-accent/25 to-primary/15 rounded-full blur-[120px]" />
      </div>

      <div className="container-narrow mx-auto relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Freelance{" "}
              <span className="relative">
                <span className="gradient-text">Projects</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="hsl(var(--primary))" />
                      <stop offset="1" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            Each project is a unique piece of development, crafted with modern
            technologies and meticulous attention to detail. I collaborated with
            <b> Esscentra Solution</b> to deliver high-quality, production-ready
            applications across multiple domains.
          </p>
        </div>

        {/* Creative Project Display */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Project - Large Card */}
          <div className="lg:row-span-2">
            {projects
              .filter((p) => p.id === activeProject)
              .map((project) => (
                <div
                  key={project.id}
                  className="group relative h-full min-h-[500px] lg:min-h-full rounded-[2rem] overflow-hidden"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => setActiveVideo(project.videoUrl)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity`}
                      />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-background/90 backdrop-blur-md flex items-center justify-center border border-border/50 group-hover:scale-110 transition-transform duration-500">
                        <Play
                          size={28}
                          className="ml-1 text-foreground"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </button>

                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-medium`}
                      >
                        {project.category}
                      </span>
                      <span className="text-muted-foreground text-sm font-mono">
                        0{project.id}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 max-w-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-background/50 backdrop-blur-sm text-foreground/80 border border-border/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.color} text-white font-medium text-sm hover:opacity-90 transition-opacity`}
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Project Selector Cards */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                className={`group/card w-full text-left p-5 rounded-2xl border transition-all duration-500 ${
                  activeProject === project.id
                    ? "bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 shadow-lg shadow-primary/10"
                    : "bg-secondary/30 border-border/50 hover:bg-secondary/50 hover:border-border"
                }`}
              >
                <div className="flex items-start gap-5">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-display font-bold text-lg">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                 
                    <h4
                      className={`font-display font-semibold text-lg mb-1 transition-colors ${
                        activeProject === project.id
                          ? "text-primary"
                          : "text-foreground group-hover/card:text-primary"
                      }`}
                    >
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <a href={`${project.liveUrl}`}>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        activeProject === project.id
                          ? `bg-gradient-to-r ${project.color} text-white`
                          : "bg-secondary text-muted-foreground group-hover/card:bg-primary/20 group-hover/card:text-primary"
                      }`}
                    >
                      <ArrowUpRight
                        size={18}
                        className={`transition-transform duration-300 ${
                          activeProject === project.id
                            ? "rotate-0"
                            : "-rotate-45 group-hover/card:rotate-0"
                        }`}
                      />
                    </div>
                  </a>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-16 right-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/80 hover:bg-primary/20 text-foreground hover:text-primary transition-all border border-border/50"
            >
              <X size={18} />
              <span className="text-sm font-medium">Close</span>
            </button>
            <iframe
              src={activeVideo}
              className="w-full h-full bg-background"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
