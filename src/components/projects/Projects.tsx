// react
import React from "react";
// component
import ProjectCard from "./ProjectCard";
import { Button } from "../ui/button";
// icon
import { EnterIcon } from "@radix-ui/react-icons";
import Link from "next/link";
// i18n
import { getDictionary } from "@/lib/dictionary";
import { projectsData } from "@/data/projectData";
// types
import { LangProps } from "@/types/common";

const Projects: React.FC<LangProps> = async ({ lang }) => {
  const { Project } = await getDictionary(lang);
  const projectsDataShow = projectsData.slice(0, 3);

  return (
    <div
      id="projects"
      className="flex h-fit w-full snap-center flex-col items-center justify-center gap-8 p-4 pt-14 md:h-screen"
    >
      <div className="flex flex-wrap items-center justify-center gap-12">
        {projectsDataShow.map((project, index) => (
          <ProjectCard lang={lang} Data={project} key={index} />
        ))}
      </div>
      <Link href={`/${lang}/projects`}>
        <Button className="flex items-center justify-center gap-2 font-ubuntu rtl:font-iranSans">
          <EnterIcon />
          {Project.allProjects}
        </Button>
      </Link>
    </div>
  );
};

export default Projects;
