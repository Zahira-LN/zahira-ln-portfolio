import CodeBook from "../assets/images/Code_book.jpg";
import CosmeticDeals from "../assets/images/Cosmetic_deals.png";

const projects = [
  {
    id: 1,
    title: "CodeBook – E-Learning Web App",
    description:
      "A modern, responsive e-learning platform built with React.js and Tailwind CSS. Improved SEO, optimized performance and accessibility, implemented React Router for seamless navigation, and used Toastify for enhanced UX through real-time alerts.",
    tags: ["React.js", "Tailwind CSS", "React Router", "SEO", "Toastify"],
    liveUrl: "https://codebooknew.netlify.app/",
    image: CodeBook,
    category: "E-Learning",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Cosmetic Deals – Web App",
    description:
      "Developed a responsive web app for showcasing discounted cosmetic products. Built using Vite, React, TypeScript, shadcn-ui, and Tailwind CSS with reusable components for listings, filters, and promotional banners. Hosted on Netlify.",
    tags: ["Vite", "React", "TypeScript", "shadcn-ui", "Tailwind CSS"],
    liveUrl: "https://cosmeticdeal.netlify.app/",
    image: CosmeticDeals,
    category: "Personal Project",
    color: "from-pink-500 to-rose-400",
  },
];

export const PersonalProjects = () => {
  return (
    <>
     <div className="pb-6 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold">
              Personal{" "}
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
    <div className="w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {projects.map((project) => (
        <article
          key={project.id}
          className="group relative rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="relative w-full h-[340px]">
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-black/60 opacity-55 mix-blend-multiply`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />

            {/* Content */}
            <div className="absolute left-0 right-0 bottom-0 p-5 sm:p-7 md:p-9">
              

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
                {project.title}
              </h3>

              {/* <p className="text-muted-foreground/100 text-sm sm:text-base mb-4 leading-relaxed">
                {project.description}
              </p> */}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs sm:text-sm rounded-full bg-background/60 backdrop-blur-sm text-foreground/80 border border-border/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live Demo Button */}
              <a
                href={project.liveUrl}
                target="_blank"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.color} text-white font-medium text-sm hover:opacity-90 transition`}
              >
                Live Demo →
              </a>
            </div>
          </div>
        </article>
      ))}
  </div>
</>
  );
};
