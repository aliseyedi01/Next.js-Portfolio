// component
import { ProjectAll } from "@/components";
// i18n
import { Locale } from "@/lib/i18n.config";
// next
import { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fa" }];
}

// types
type Props = {
  params: { lang: Locale };
};

// dynamic MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

const Pages: React.FC<Props> = ({ params }) => {
  return <ProjectAll lang={params.lang} />;
};

export default Pages;
