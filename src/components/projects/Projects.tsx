// react
import React from "react";
// component
import ProjectCard from "./ProjectCard";
import { Button } from "../ui/button";
// icon
import { EnterIcon } from "@radix-ui/react-icons";
import Link from "next/link";
// i18n
import { Locale } from "@/lib/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const Projects: React.FC<{ lang: Locale }> = async ({ lang }) => {
  const { Project } = await getDictionary(lang);
  return (
    <div
      id="projects"
      className="flex h-fit w-full snap-center flex-col items-center justify-center gap-8 p-4 pt-14 md:h-screen"
    >
      <div className="flex flex-wrap items-center justify-center gap-12">
        <ProjectCard lang={lang} />
        <ProjectCard lang={lang} />
        <ProjectCard lang={lang} />
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
