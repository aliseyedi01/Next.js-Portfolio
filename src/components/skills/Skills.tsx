import React from "react";
import {
  BiLogoTypescript,
  BiLogoSass,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoCss3,
  BiLogoRedux,
  BiLibrary,
  BiCodeAlt,
  BiCubeAlt,
  BiLogoGit,
} from "react-icons/bi";
import {
  SiPostman,
  SiAntdesign,
  SiGithub,
  SiBootstrap,
  SiNextdotjs,
  SiFirebase,
  SiSupabase,
  SiFigma,
  SiTailwindcss,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Language",
    skills: [
      { name: "JavaScript", icon: <BiLogoJavascript /> },
      { name: "TypeScript", icon: <BiLogoTypescript /> },
    ],
  },
  {
    title: "Library & Framework",
    skills: [
      { name: "React.js", icon: <BiLogoReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Redux", icon: <BiLogoRedux /> },
      { name: "Redux Toolkit", icon: <BiCubeAlt /> },
    ],
  },
  {
    title: "Style",
    skills: [
      { name: "CSS", icon: <BiLogoCss3 /> },
      { name: "Sass", icon: <BiLogoSass /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Component Library",
    skills: [
      { name: "Material-UI", icon: <BiLibrary /> },
      { name: "Ant Design", icon: <SiAntdesign /> },
      { name: "Shadcn UI", icon: <BiCodeAlt /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <BiLogoGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="grid h-fit w-full snap-center grid-cols-1 place-content-center place-items-center gap-6 p-5 pt-14 md:h-screen md:grid-cols-3 md:p-10"
    >
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className="flex h-full w-full flex-col items-start justify-start rounded-xl p-2 hover:bg-blue-200 dark:hover:bg-blue-900"
        >
          <h3 className="w-full border-b-2 border-indigo-700 pb-1 text-xl font-bold max-md:text-center">
            {category.title}
          </h3>
          <div className="grid w-full grid-flow-col grid-cols-2 grid-rows-3 place-items-start justify-center gap-1 space-y-1 p-2">
            {category.skills.map((skill, index) => (
              <p key={index} className="flex items-center gap-2">
                <span className="text-xl text-indigo-950 dark:text-orange-500">{skill.icon}</span>
                {skill.name}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
