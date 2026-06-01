import { PortfolioHeader } from "@/components/portfolio-header";
import { portfolioData } from "@/lib/portfolio-data";

type SupportedLang = keyof typeof portfolioData;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const normalizedLang: SupportedLang = lang === "fr" ? "fr" : "en";
  const data = portfolioData[normalizedLang];

  return (
    <>
      <PortfolioHeader lang={normalizedLang} navItems={data.nav} />
      {children}
    </>
  );
}
