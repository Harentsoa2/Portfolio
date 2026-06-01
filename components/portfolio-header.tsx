"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioHeaderProps {
  lang: "en" | "fr";
  navItems: Record<string, string>;
}

export function PortfolioHeader({ lang, navItems }: PortfolioHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navEntries = Object.entries(navItems);

  return (
    <header className="site-header top-0 w-full z-50 glass-card backdrop-blur-xl border-b border-cyan-500/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-2 group">
            <div className="brand-mark w-8 h-8 bg-gradient-to-br from-cyan-400 via-emerald-400 to-purple-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
              <span className="text-white font-bold text-sm">HS</span>
            </div>
            <span className="text-lg font-bold text-cyan-400 hidden sm:inline group-hover:text-cyan-300 transition-colors">
              Harentsoa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navEntries.slice(0, 5).map(([key, label]) => (
              <Link
                key={key}
                href={`/${lang}#${key}`}
                className="px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Language Switcher & Contact Button */}
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1 glass-card px-1 py-1 rounded-lg">
              <Link
                href="/en"
                className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                  lang === "en"
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                EN
              </Link>
              <Link
                href="/fr"
                className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                  lang === "fr"
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                FR
              </Link>
            </div>

            <Button
              asChild
              className="hidden sm:inline-flex bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 hover:from-cyan-400 hover:via-sky-400 hover:to-emerald-400 text-white border-0 glow-primary-hover transition-transform duration-300 hover:scale-[1.03]"
            >
              <a href="#contact">Contact</a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-cyan-400 hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {navEntries.map(([key, label]) => (
              <Link
                key={key}
                href={`/${lang}#${key}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
