// react
import React from "react";
// component
import ProjectCard from "./ProjectCard";
import { Button } from "../ui/button";
// icon
import { EnterIcon } from "@radix-ui/react-icons";

const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="flex h-screen w-full snap-center flex-col items-center justify-center gap-8 p-4"
    >
      <div className="flex flex-wrap items-center justify-center gap-12">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Button className="flex items-center justify-center gap-2">
        <EnterIcon /> view more projects
      </Button>
    </div>
  );
};

export default Projects;
