// components
import { BackPage } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// next
import Image from "next/image";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation, Autoplay, Zoom } from "swiper/modules";
// icons
import { FiCodesandbox } from "react-icons/fi";
import { FaGithub, FaGithubAlt, FaLaptopCode } from "react-icons/fa";
import Link from "next/link";
import { Locale } from "@/lib/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const Actions = [
  {
    name: "Github",
    icon: <FaGithub className="text-xl text-indigo-950 dark:text-indigo-400 " />,
    link: "/project",
  },
  {
    name: "Codesandbox",
    icon: <FiCodesandbox className="text-xl text-slate-950 dark:text-slate-50" />,
    link: "/project",
  },
  {
    name: "Github1s",
    icon: <FaGithubAlt className="text-xl text-indigo-600 dark:text-indigo-200" />,
    link: "/project",
  },
  {
    name: "Online",
    icon: <FaLaptopCode className="text-xl text-red-800 dark:text-red-400" />,
    link: "/project",
  },
];

const ProjectInfo: React.FC<{ lang: Locale }> = async ({ lang }) => {
  const { ProjectData } = await getDictionary(lang);
  return (
    <div className="md:x-2 flex h-full w-full flex-col gap-4 px-6 md:gap-8">
      {/* Title */}
      <div className="space-y-3">
        <h2 className="font-ubuntu text-xl font-bold text-primary rtl:font-vazir">
          {ProjectData.title}
        </h2>
        <p className=" font-kanit text-lg ">Admin Panel</p>
      </div>
      {/* Links */}
      <div className="space-y-3">
        <h2 className="font-ubuntu text-xl font-bold text-primary rtl:font-vazir">
          {ProjectData.link}
        </h2>
        <p className=" flex items-center gap-2 font-kanit">
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
        </p>
      </div>
      {/* Language */}
      <div className="space-y-3">
        <h2 className="font-ubuntu text-xl font-bold text-primary rtl:font-vazir">
          {ProjectData.language}
        </h2>
        <p className="flex items-center gap-2 font-kanit text-lg">
          <Badge variant="destructive">JavaScript</Badge>
          <Badge variant="default">TypeScript</Badge>
        </p>
      </div>
      {/* Technology */}
      <div className="space-y-3">
        <h2 className="font-ubuntu text-xl font-bold text-primary rtl:font-vazir">
          {ProjectData.Technologies}
        </h2>
        <p className=" flex items-center gap-2 font-kanit">
          <Badge variant="outline">React.js</Badge>
          <Badge variant="outline">Next.js</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Tailwind</Badge>
        </p>
      </div>
      {/* Description */}
      <div className="space-y-1">
        <h2 className="font-ubuntu text-xl font-bold text-primary rtl:font-vazir">
          {ProjectData.description}
        </h2>
        <p className="text-left font-kanit text-lg">
          A comprehensive admin panel for managing your application with ease. A comprehensive admin
          panel for managing your application with ease.
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
