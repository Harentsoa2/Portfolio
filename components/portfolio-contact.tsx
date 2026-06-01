"use client";

import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: {
    message?: string;
  };
};

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface PortfolioContactProps {
  title: string;
  description: string;
  email: string;
  social: SocialLink[];
}

export function PortfolioContact({
  title,
  description,
  email,
  social,
}: PortfolioContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "bae4c035-2863-47cd-b655-dea8d241581d",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });

      const result = (await response.json()) as Web3FormsResponse;

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(
          result.message ||
            result.body?.message ||
            "Failed to send message. Please try again.",
        );
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-rise py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-slate-300 mb-8">{description}</p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded mx-auto" />
        </div>

        {/* Contact form and info grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="glass-card-hover p-8 rounded-xl">
              <div className="mb-6 h-1 w-full rounded bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300" />
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              {submitted && (
                <div className="mb-6 p-4 bg-cyan-500/20 border border-cyan-500/50 rounded-lg flex items-center gap-3">
                  <CheckCircle size={20} className="text-cyan-400 flex-shrink-0" />
                  <p className="text-cyan-300">Thank you! I&apos;ll get back to you soon.</p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:bg-white/10 transition-all"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:bg-white/10 transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 hover:from-cyan-400 hover:via-sky-400 hover:to-emerald-400 disabled:from-slate-600 disabled:to-slate-600 text-white border-0 glow-primary-hover h-11 font-medium transition-all"
                >
                  <Send size={18} className="mr-2" />
                  {loading ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info - sidebar */}
          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="glass-card-hover p-5 rounded-lg flex items-start gap-4 group"
            >
              <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                <Mail size={24} className="text-cyan-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                <p className="text-sm text-white group-hover:text-cyan-400 transition-colors break-all">
                  {email}
                </p>
              </div>
            </a>

            {/* GitHub */}
            {social.some((s) => s.icon === "github") && (
              <a
                href="https://github.com/Harentsoa2"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-5 rounded-lg flex items-start gap-4 group"
              >
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                  <Github size={24} className="text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">GitHub</p>
                  <p className="text-sm text-white group-hover:text-cyan-400 transition-colors">
                    Harentsoa2
                  </p>
                </div>
              </a>
            )}

            {/* LinkedIn */}
            {social.some((s) => s.icon === "linkedin") && (
              <a
                href="https://linkedin.com/in/harentsoa-sarobidy"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-5 rounded-lg flex items-start gap-4 group"
              >
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                  <Linkedin size={24} className="text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">LinkedIn</p>
                  <p className="text-sm text-white group-hover:text-cyan-400 transition-colors">
                    Harentsoa Sarobidy
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>
            Designed with passion. Built with{" "}
            <span className="text-cyan-400">React</span> and{" "}
            <span className="text-purple-400">Next.js</span>
          </p>
        </div>
      </div>
    </section>
  );
}
