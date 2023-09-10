// component
import { BackPage, ProjectCard } from "@/components";
// i18n
import { projectsData } from "@/data/projectData";
import { getDictionary } from "@/lib/dictionary";
// types
import { LangProps } from "@/types/common";
import { Suspense } from "react";

const ProjectAll: React.FC<LangProps> = async ({ lang }) => {
  const { Project } = await getDictionary(lang);

  const projectsDataShow = projectsData;
  return (
    <div className="flex h-full w-full flex-col  gap-6 py-16">
      <div className="flex items-center gap-2 pl-5">
        <Suspense fallback={<>loading ..</>}>
          <BackPage />
        </Suspense>
        <p className="font-ubuntu text-xl font-bold rtl:font-iranSans ">{Project.all}</p>
      </div>
      <div className="grid w-full grid-cols-1 place-items-center  gap-12 md:grid-cols-3">
        {projectsDataShow.map((project, index) => (
          <ProjectCard lang={lang} key={index} Data={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectAll;
