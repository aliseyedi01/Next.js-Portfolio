// react
import React from "react";
// component
import { ProjectInfo, ProjectPreview } from "@/components";
// data
import { projectsData } from "@/data/projectData";
// i18n
import { Locale } from "@/lib/i18n.config";
import { notFound } from "next/navigation";

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
