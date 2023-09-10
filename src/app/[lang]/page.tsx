// component
import { About, Contact, Home, NavItemMobile, Projects, Skelton, Skills } from "@/components";
// i18n
import { Locale } from "@/lib/i18n.config";
// next
import { notFound } from "next/navigation";
import { Metadata } from "next";
// types
import { PageProps } from "@/types/common";
import { Suspense } from "react";

// dynamic MetaData
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  let { lang } = params;

  let meta = {
    title: {
      en: "Ali Seyedi",
      fa: "علی سیدی",
    },
  };

  return {
    title: `${meta.title[lang]}`,
  };
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fa" }];
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { lang } = params;
  if (!lang) {
    notFound();
  }

  return (
    <main className="h-full">
      <Home lang={params.lang} />
      <About lang={params.lang} />
      <Skills lang={params.lang} />
      <Projects lang={params.lang} />
      <Contact lang={params.lang} />
      <Suspense fallback={<Skelton />}>
        <NavItemMobile lang={params.lang} />
      </Suspense>
    </main>
  );
};

export default Page;
