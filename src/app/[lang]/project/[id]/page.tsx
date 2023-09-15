// react
import React, { Suspense } from "react";
// component
import { ProjectInfo, ProjectPreview, Spiner } from "@/components";
// data
import { projectsData } from "@/data/projectData";
// i18n
import { Locale } from "@/lib/i18n.config";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// types
type Props = {
  params: { lang: Locale; id: string };
};
// dynamic MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let { id, lang } = params;

  let project = projectsData.find((project) => project.id === id);

  return {
    title: project?.[lang].title,
  };
}

const Pages: React.FC<Props> = ({ params }) => {
  const { lang, id } = params;

  const projectsDataShow = projectsData.find((project) => project.id == id);
  if (!projectsDataShow) {
    notFound();
  }

  return (
    <Suspense fallback={<Spiner />}>
      <ProjectPreview Data={projectsDataShow} lang={lang}>
        <Suspense fallback={<div>Loading</div>}>
          <ProjectInfo lang={lang} Data={projectsDataShow} />
        </Suspense>
      </ProjectPreview>
    </Suspense>
  );
};

export default Pages;

export async function generateStaticParams() {
  const lang = ["en", "fa"];
  const id = ["1", "2", "3", "4", "5", "6"];
  const result = [];

  for (const l of lang) {
    for (const i of id) {
      result.push({ lang: l, id: i });
    }
  }

  return result;
}
