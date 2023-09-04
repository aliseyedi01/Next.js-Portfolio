// react
import React from "react";
// next
import Image from "next/image";
import Link from "next/link";
// icons
import { FiCodesandbox } from "react-icons/fi";
import { FaGithub, FaGithubAlt, FaLaptopCode } from "react-icons/fa";
// component
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// i18n
import { Locale } from "@/lib/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const Actions = [
  {
    name: "Github",
    icon: <FaGithub className="text-indigo-950 dark:text-indigo-400 " />,
    link: "/project",
  },
  {
    name: "Codesandbox",
    icon: <FiCodesandbox className="text-slate-950 dark:text-slate-50" />,
    link: "/project",
  },
  {
    name: "Github1s",
    icon: <FaGithubAlt className="text-indigo-600 dark:text-indigo-200" />,
    link: "/project",
  },
  {
    name: "Online",
    icon: <FaLaptopCode className="text-red-800 dark:text-red-400" />,
    link: "/project",
  },
];

// const ProjectCard: React.FC = () => {
const ProjectCard: React.FC<{ lang: Locale }> = async ({ lang }) => {
  const { ProjectCards } = await getDictionary(lang);
  return (
    <>
      <div className="relative flex h-[380px] w-[350px] flex-col items-center justify-around gap-2 overflow-hidden rounded-md bg-blue-400 pb-2  dark:bg-blue-800 md:w-[350px] ">
        <div className="peer absolute inset-1 z-10 rounded-lg bg-background">
          {/* Cover Project  */}
          <Link href={`/${lang}/project/1`}>
            <Image
              src="/image/projects/project1.png"
              width="300"
              height="400"
              alt="singleProject"
              className="w-full rounded-t-md shadow-md"
            />
          </Link>
          {/* Information */}
          <div className="flex w-full flex-col items-center justify-center gap-2 px-4">
            {/* Title */}
            <p className="self-start pt-3 text-left font-ubuntu font-bold">Admin Panel</p>
            {/* Description */}
            <p className="w-full text-justify font-kanit text-sm">
              A comprehensive admin panel for managing your application with ease. A comprehensive
              admin panel for managing your application with ease.
            </p>
            {/* Stack */}
            <div className="flex w-full flex-wrap gap-1 pt-2 font-kanit text-sm">
              <Badge variant="outline">React.js</Badge>
              <Badge variant="outline">Supabase</Badge>
              <Badge variant="outline">Tailwind</Badge>
              <Badge variant="outline">Next.js</Badge>
            </div>
            {/* Buttons */}
            <div className="flex w-full items-center justify-between py-2">
              {/* Actions */}
              <div className="flex items-center gap-2 text-lg">
                {Actions.map((action, index) => (
                  <Link href={action.link} key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger>{action.icon}</TooltipTrigger>
                        <TooltipContent>
                          <p>{action.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ))}
              </div>
              {/* Details */}
              <div className="">
                <Link
                  href={`/${lang}/project/1`}
                  className="group self-end px-2 py-1 text-indigo-600 transition-all duration-200 ease-in-out dark:text-white"
                >
                  <span className="bg-gradient-to-r from-indigo-400 to-indigo-700 bg-[length:0%_2px] bg-left-bottom bg-no-repeat font-alkatra transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] rtl:font-iranSans dark:from-slate-600 dark:to-slate-50">
                    {ProjectCards.details}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute inset-0 z-0 scale-[2] blur before:absolute before:inset-0 before:top-[60%] before:aspect-square before:from-purple-700 before:via-red-700 before:to-amber-400  peer-hover:before:animate-disco peer-hover:before:bg-gradient-conic" />
      </div>
    </>
  );
};

export default ProjectCard;
