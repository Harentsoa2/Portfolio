interface Experience {
  title: string;
  company: string;
  description: string;
  skills: string[];
}

interface PortfolioExperienceProps {
  experiences: Experience[];
  title?: string;
}

export function PortfolioExperience({
  experiences,
  title = "Experience",
}: PortfolioExperienceProps) {
  return (
    <section id="experience" className="scroll-rise py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded" />
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}-${index}`} className="relative">
              {/* Timeline dot and line */}
              <div className="timeline-dot absolute left-0 top-0 w-6 h-6 bg-gradient-to-br from-cyan-400 via-emerald-400 to-purple-600 rounded-full border-4 border-background glow-primary" />
              {index < experiences.length - 1 && (
                <div className="absolute left-2.5 top-6 bottom-0 w-1 bg-gradient-to-b from-cyan-500/60 via-emerald-400/35 to-purple-600/50" />
              )}

              {/* Content */}
              <div className="ml-12 glass-card-hover p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                    <p className="text-slate-400 text-sm">{exp.company}</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">{exp.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                    className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 transition-colors hover:border-amber-400/50 hover:text-amber-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
