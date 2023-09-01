import ProjectCard from "@/components/projects/ProjectCard";
import type { Metadata } from "next";

export default function () {
  return (
    <div className="flex h-full w-full flex-col  gap-6 pt-16">
      <p className="text- pl-4 font-ubuntu text-2xl font-bold">All Projects</p>
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
