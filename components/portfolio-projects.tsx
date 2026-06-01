"use client";

import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  highlights: string[];
}

interface PortfolioProjectsProps {
  projects: Project[];
  title?: string;
}

export function PortfolioProjects({ projects, title = "Projects" }: PortfolioProjectsProps) {
  return (
    <section id="projects" className="scroll-rise py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded mx-auto" />
        </div>

        {/* Projects grid */}
        <div className="grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card glass-card-hover rounded-lg flex flex-col group overflow-hidden h-full transition-all duration-300 hover:shadow-2xl"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              {/* Project image */}
              {project.image && (
                <div className="project-image-shell w-full p-3">
                  <div className="relative aspect-video w-full overflow-hidden rounded-md bg-slate-950/80 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-cyan-400/40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      priority={index < 3}
                    />
                  </div>
                </div>
              )}
              
              {/* Project content - more compact */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3 flex items-center justify-between gap-3 text-xs text-slate-500">
                  <span>#{String(index + 1).padStart(2, "0")}</span>
                  <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-amber-200">
                    {project.technologies[0]}
                  </span>
                </div>

                {/* Project header */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{project.description}</p>
                </div>

                {/* Long description - compact */}
                <p className="text-xs text-slate-500 mb-3 flex-grow line-clamp-3">
                  {project.longDescription}
                </p>

                {/* Highlights - smaller */}
                {project.highlights.length > 0 && (
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.slice(0, 2).map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30 line-clamp-1"
                        >
                          {highlight}
                        </span>
                      ))}
                      {project.highlights.length > 2 && (
                        <span className="text-xs px-2 py-0.5 text-cyan-400">+{project.highlights.length - 2}</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Technologies - compact */}
                <div className="mb-4">
                  <p className="text-xs text-slate-600 mb-1 uppercase tracking-wider font-semibold">Tech</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-1.5 py-0.5 bg-white/5 text-slate-400 rounded border border-white/10 hover:border-cyan-500/50 transition-colors line-clamp-1"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-slate-500">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Action buttons - smaller */}
                <div className="flex gap-2">
                  {project.liveDemo && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white border-0 text-xs h-8 transition-transform duration-300 hover:scale-[1.03]"
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={13} className="mr-1" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 border-cyan-500/30 hover:border-amber-400/60 text-cyan-400 hover:text-amber-200 text-xs h-8 transition-transform duration-300 hover:scale-[1.03]"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={13} className="mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
