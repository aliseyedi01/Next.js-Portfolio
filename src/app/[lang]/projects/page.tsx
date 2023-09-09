// component
import { ProjectAll } from "@/components";
// types
import { PageProps } from "@/types/common";
// next
import { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fa" }];
}

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

const Pages: React.FC<PageProps> = ({ params }) => {
  return <ProjectAll lang={params.lang} />;
};

export default Pages;
