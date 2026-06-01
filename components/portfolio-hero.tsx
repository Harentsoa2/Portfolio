"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";

interface PortfolioHeroProps {
  name: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaSecondary: string;
}

export function PortfolioHero({
  name,
  subtitle,
  description,
  cta,
  ctaSecondary,
}: PortfolioHeroProps) {
  const heroTags = ["AI apps", "Full-stack", "SaaS", "Cloud"];

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="hero-field absolute inset-0 opacity-90" />
        <div className="hero-scan absolute inset-0 opacity-45" />
        <div className="absolute left-0 right-0 top-[18%] overflow-hidden font-mono text-xs sm:text-sm">
          <div className="hero-code-line whitespace-nowrap">
            const portfolio = ["AI", "Next.js", "React", "Node", "Cloud"].map(buildUsefulProduct);
          </div>
          <div className="hero-code-line mt-10 whitespace-nowrap text-right">
            {'deploy("ideas", { cleanCode: true, thoughtfulUX: true, scalable: true });'}
          </div>
          <div className="hero-code-line mt-10 whitespace-nowrap">
            while (learning) createBetterInterfaces();
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex flex-wrap justify-center gap-3 text-xs text-slate-300">
          {heroTags.map((tag) => (
            <span key={tag} className="hero-chip rounded-full px-4 py-2">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </div>

        <h1 className="hero-name text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 leading-none">
          {name.split(" ").slice(0, 2).join(" ")}
        </h1>

        <p className="text-xl sm:text-2xl text-cyan-400 font-semibold mb-6 text-glow">
          {subtitle}
        </p>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            asChild
            className="bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 hover:from-cyan-400 hover:via-sky-400 hover:to-emerald-400 text-white border-0 px-8 py-6 text-base font-semibold glow-primary-hover transition-transform duration-300 hover:scale-[1.03]"
          >
            <Link href="#projects">
              {cta}
              <ExternalLink className="ml-2" size={18} />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-cyan-500/30 hover:border-amber-400/60 text-cyan-300 hover:text-amber-200 px-8 py-6 text-base font-semibold backdrop-blur-sm hover:bg-amber-400/10 transition-transform duration-300 hover:scale-[1.03]"
          >
            <a href="#contact">
              {ctaSecondary}
            </a>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400" size={28} />
        </div>
      </div>
    </section>
  );
}
