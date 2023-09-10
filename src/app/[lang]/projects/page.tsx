// component
import { ProjectAll } from "@/components";
import { i18n } from "@/lib/i18n.config";
// types
import { PageProps } from "@/types/common";
// next
import { Metadata } from "next";

// dynamic MetaData
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  let { lang } = params;

  let meta = {
    title: {
      en: "Projects",
      fa: "پروژه ها",
    },
  };

  return {
    title: `${meta.title[lang]}`,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const Pages: React.FC<PageProps> = ({ params }) => {
  return <ProjectAll lang={params.lang} />;
};

export default Pages;
