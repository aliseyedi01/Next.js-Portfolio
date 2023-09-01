import { BackPage } from "@/components";
import ProjectCard from "@/components/projects/ProjectCard";
import type { Metadata } from "next";

export default function () {
  return (
    <div className="flex h-full w-full flex-col  gap-6 pt-16">
      <div className="flex items-center gap-2 pl-5">
        <BackPage />
        <p className="font-ubuntu text-2xl font-bold">All Projects</p>
      </div>
      <div className="grid w-full grid-cols-1 place-items-center  gap-12 md:grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
