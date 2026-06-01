interface PortfolioAboutProps {
  title: string;
  intro: string;
  description: string;
}

export function PortfolioAbout({ title, intro, description }: PortfolioAboutProps) {
  return (
    <section id="about" className="scroll-rise py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card-hover p-8 rounded-xl">
            <p className="text-lg text-slate-200 leading-relaxed">{intro}</p>
          </div>

          <div className="glass-card-hover p-8 rounded-xl">
            <p className="text-slate-300 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Quick facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: "Projects", value: "7+" },
            { label: "Years Learning", value: "3+" },
            { label: "Technologies", value: "25+" },
            { label: "Certifications", value: "6" },
          ].map((fact) => (
            <div key={fact.label} className="glass-card-hover p-6 rounded-lg text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-200 bg-clip-text text-transparent mb-2">
                {fact.value}
              </div>
              <div className="text-sm text-slate-400">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
