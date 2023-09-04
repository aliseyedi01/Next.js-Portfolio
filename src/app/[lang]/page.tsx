import { About, Contact, Home, NavItemMobile, Projects, Skills } from "@/components";

// i18n
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n.config";

export default async function ({ params }: { params: { lang: Locale } }) {
  return (
    <main className="h-full">
      <Home lang={params.lang} />
      <About lang={params.lang} />
      <Skills lang={params.lang} />
      <Projects lang={params.lang} />
      <Contact lang={params.lang} />
      <NavItemMobile lang={params.lang} />
    </main>
  );
}
