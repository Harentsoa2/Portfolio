interface SkillsCategory {
  title: string;
  items: string[];
}

interface PortfolioSkillsProps {
  title: string;
  categories: Record<string, SkillsCategory>;
}

export function PortfolioSkills({ title, categories }: PortfolioSkillsProps) {
  return (
    <section id="skills" className="scroll-rise py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded mx-auto" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.values(categories).map((category) => (
            <div key={category.title} className="glass-card-hover p-8 rounded-xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-3 w-3 rounded-sm bg-gradient-to-br from-cyan-300 to-amber-300 shadow-[0_0_18px_rgba(34,211,238,0.45)]" />
                <h3 className="text-xl font-bold text-cyan-400">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((skill) => (
                  <div
                    key={skill}
                    className="skill-chip px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-lg text-slate-200 text-sm hover:border-amber-400/50 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
