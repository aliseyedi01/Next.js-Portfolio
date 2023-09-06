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
import { ProjectDataType, projectsData } from "@/data/projectData";

type Props = {
  lang: Locale;
  Data: ProjectDataType;
};

const ProjectInfo: React.FC<Props> = async ({ lang, Data }) => {
  const { ProjectData } = await getDictionary(lang);

  const { title, description, stacks, links, languages } = Data[lang];

  const Actions = [
    {
      name: "Github",
      icon: <FaGithub className="text-indigo-950 dark:text-indigo-400" />,
      link: `${links.github}`,
    },
    {
      name: "Codesandbox",
      icon: <FiCodesandbox className="text-slate-950 dark:text-slate-50" />,
      link: `${links.codeSandBox}`,
    },
    {
      name: "Github1s",
      icon: <FaGithubAlt className="text-indigo-600 dark:text-indigo-200" />,
      link: `${links.github1s}`,
    },
    {
      name: "Online",
      icon: <FaLaptopCode className="text-red-800 dark:text-red-400" />,
      link: `${links.online}`,
    },
  ];

  return (
    <div className="md:x-2 flex h-full w-full flex-col gap-4 px-6 md:gap-8">
      {/* Title */}
      <div className="space-y-3">
        <h2 className="font-ubuntu text-xl font-bold text-primary  rtl:font-vazir">
          {ProjectData.title}
        </h2>
        <p className=" font-kanit text-lg rtl:font-vazir ">{title}</p>
      </div>
      {/* Links */}
      <div className="space-y-3">
        <h2 className="font-ubuntu text-xl font-bold text-primary rtl:font-vazir">
          {ProjectData.link}
        </h2>
        <p className=" flex items-center gap-2 pt-1 font-kanit text-xl">
          {Actions.map((action, index) => (
            <Link href={action.link} key={index} target="_blank">
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
      <div className="space-y-4">
        <h2 className="font-ubuntu text-xl font-bold text-primary rtl:font-vazir">
          {ProjectData.language}
        </h2>
        <p className="flex items-center gap-2 font-kanit text-lg rtl:font-vazir">
          {languages.map((language, index) => (
            <Badge variant="outline" key={index}>
              {language}
            </Badge>
          ))}
        </p>
      </div>
      {/* Technology */}
      <div className="space-y-5">
        <h2 className="font-ubuntu text-xl font-bold text-primary rtl:font-vazir">
          {ProjectData.Technologies}
        </h2>
        <p className=" flex items-center gap-2 font-kanit">
          {stacks.map((stack, index) => (
            <Badge variant="outline" key={index}>
              {stack}
            </Badge>
          ))}
        </p>
      </div>
      {/* Description */}
      <div className="space-y-3">
        <h2 className="font-ubuntu text-xl font-bold text-primary rtl:font-vazir">
          {ProjectData.description}
        </h2>
        <p className="text-justify font-kanit text-lg  rtl:font-iranSans">{description}</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
