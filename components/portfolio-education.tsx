import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Education {
  title: string;
  degree: string;
  school: string;
  level: string;
  location: string;
  focus: string;
}

interface Certification {
  title: string;
  platform: string;
  link: string;
}

interface PortfolioEducationProps {
  education: Education;
  certifications: Certification[];
}

export function PortfolioEducation({
  education,
  certifications,
}: PortfolioEducationProps) {
  return (
    <>
      {/* Education Section */}
      <section id="education" className="scroll-rise py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="section-title text-4xl sm:text-5xl font-bold mb-4">
              {education.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded" />
          </div>

          {/* Education card */}
          <div className="glass-card-hover p-8 rounded-xl">
            <div className="mb-6 h-1 w-full rounded bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300" />
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">
              {education.degree}
            </h3>
            <p className="text-slate-400 mb-4">{education.school}</p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  Level
                </p>
                <p className="text-slate-200">{education.level}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  Location
                </p>
                <p className="text-slate-200">{education.location}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">
                Focus Areas
              </p>
              <p className="text-slate-300">{education.focus}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="scroll-rise py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="section-title text-4xl sm:text-5xl font-bold mb-4">
              Certifications
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded" />
          </div>

          {/* Certifications grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Button
                key={cert.title}
                asChild
                className="glass-card-hover h-auto p-6 rounded-lg justify-start text-left border-0 bg-transparent hover:bg-white/5 group"
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex-1">
                    <h3 className="font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      {cert.platform}
                    </p>
                  </div>
                  <ExternalLink size={18} className="text-slate-400 group-hover:text-amber-300 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ml-2 flex-shrink-0" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
