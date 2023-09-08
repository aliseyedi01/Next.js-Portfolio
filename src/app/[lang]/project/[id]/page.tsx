// react
import React from "react";
// component
import { ProjectInfo, ProjectPreview } from "@/components";
// data
import { projectsData } from "@/data/projectData";
// i18n
import { Locale } from "@/lib/i18n.config";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// static generate for dynamic route
// export function generateStaticParams() {
//   return [
//     { lang: "en", id: "1" },
//     { lang: "en", id: "2" },
//     { lang: "en", id: "3" },
//     { lang: "en", id: "4" },
//     { lang: "en", id: "5" },
//     { lang: "en", id: "6" },
//     { lang: "fa", id: "1" },
//     { lang: "fa", id: "2" },
//     { lang: "fa", id: "3" },
//     { lang: "fa", id: "4" },
//     { lang: "fa", id: "5" },
//     { lang: "fa", id: "6" },
//   ];
// }

// types
type Props = {
  params: { lang: Locale; id: string };
};
// dynamic MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let { id, lang } = params;

  let projects: any = {
    1: {
      en: "Admin Panel",
      fa: "ادمین پنل ",
    },
    2: {
      en: "ToDo List App",
      fa: "اپلیکیشن لیست وظایف",
    },
    3: {
      en: "Movie App",
      fa: "اپلیکیشن فیلم",
    },
    4: {
      en: "Music App",
      fa: "اپلیکیشن موزیک",
    },
    5: {
      en: "Video Player",
      fa: "پخش ویدیو",
    },
    6: {
      en: "Weather App",
      fa: "اپلیکیشن پیش بینی هوا",
    },
  };

  return {
    title: `${projects[id][lang]}`,
  };
}

const Pages: React.FC<Props> = ({ params }) => {
  const { lang, id } = params;

  const projectsDataShow = projectsData.find((project) => project.id == id);
  if (!projectsDataShow) {
    notFound();
  }

  return (
    <ProjectPreview Data={projectsDataShow} lang={lang}>
      <ProjectInfo lang={lang} Data={projectsDataShow} />
    </ProjectPreview>
  );
};

export default Pages;
