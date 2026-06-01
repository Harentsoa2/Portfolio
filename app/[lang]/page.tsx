import { portfolioData } from "@/lib/portfolio-data";
import { PortfolioHero } from "@/components/portfolio-hero";
import { PortfolioAbout } from "@/components/portfolio-about";
import { PortfolioSkills } from "@/components/portfolio-skills";
import { PortfolioProjects } from "@/components/portfolio-projects";
import { PortfolioExperience } from "@/components/portfolio-experience";
import { PortfolioEducation } from "@/components/portfolio-education";
import { PortfolioServices } from "@/components/portfolio-services";
import { PortfolioContact } from "@/components/portfolio-contact";

type SupportedLang = keyof typeof portfolioData;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const normalizedLang: SupportedLang = lang === "fr" ? "fr" : "en";
  const data = portfolioData[normalizedLang];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <PortfolioHero
        name={data.name}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        cta={data.hero.cta}
        ctaSecondary={data.hero.ctaSecondary}
        email={data.email}
      />

      {/* About Section */}
      <PortfolioAbout
        title={data.about.title}
        intro={data.about.intro}
        description={data.about.description}
      />

      {/* Skills Section */}
      <PortfolioSkills
        title={data.skills.title}
        categories={data.skills.categories}
      />

      {/* Projects Section */}
      <PortfolioProjects
        projects={data.projects}
        title={data.nav.projects}
      />

      {/* Experience Section */}
      <PortfolioExperience
        experiences={data.experience}
        title={data.nav.experience}
      />

      {/* Education & Certifications Section */}
      <PortfolioEducation
        education={data.education}
        certifications={data.certifications}
      />

      {/* Services Section */}
      <PortfolioServices
        title={data.services.title}
        items={data.services.items}
      />

      {/* Contact Section */}
      <PortfolioContact
        title={data.contact.title}
        description={data.contact.description}
        email={data.contact.email}
        social={data.contact.social}
      />
    </main>
  );
}
