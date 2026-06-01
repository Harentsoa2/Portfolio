import { Check } from "lucide-react";

interface PortfolioServicesProps {
  title: string;
  items: string[];
}

export function PortfolioServices({ title, items }: PortfolioServicesProps) {
  return (
    <section id="services" className="scroll-rise py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded mx-auto" />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item}
              className="service-item glass-card-hover p-6 rounded-lg flex items-start gap-4 group"
            >
              <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:text-amber-300 transition-all duration-300" />
              <span className="text-slate-200 group-hover:text-slate-100 transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
