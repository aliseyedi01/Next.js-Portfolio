"use client";
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

const Pages = () => {
  return (
    <div className="flex w-full flex-col gap-3 pt-16">
      {/* header */}
      <div className="flex items-center ">
        <BackPage />
        <p className="text-md translate-y-[2px] font-alkatra">Project / Admin Panel 1</p>
      </div>
      {/* Project */}
      <div className="grid h-full w-full grid-cols-1 place-content-center place-items-center max-md:gap-6 max-md:pb-16 max-md:pt-12 md:h-[80vh] md:grid-cols-2">
        {/* Preview */}
        <div className="flex h-52 w-[85%] flex-row rounded-lg md:h-96">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={{ dynamicBullets: true }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            loop={true}
            zoom={true}
            modules={[Zoom, EffectFlip, Pagination, Navigation, Autoplay]}
            className="mySwiper rounded-lg "
          >
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="/image/projects/desktop1.png"
                  width="300"
                  height="400"
                  alt="singleProject"
                  className="h-full  w-full !rounded-lg  "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="/image/projects/desktop2.png"
                  width="300"
                  height="400"
                  alt="singleProject"
                  className="h-full  w-full !rounded-lg  "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="/image/projects/mobile1.png"
                  width="300"
                  height="400"
                  alt="singleProject"
                  className="h-full  w-full !rounded-lg  "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="/image/projects/mobile2.png"
                  width="300"
                  height="400"
                  alt="singleProject"
                  className="h-full  w-full !rounded-lg  "
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Information */}
        <div className="md:x-2 flex h-full w-full flex-col gap-4 px-6 md:gap-8">
          {/* Title */}
          <div className="space-y-3">
            <h2 className="font-ubuntu text-xl font-bold text-primary">Title</h2>
            <p className=" font-kanit text-lg ">Admin Panel</p>
          </div>
          {/* Links */}
          <div className="space-y-3">
            <h2 className="font-ubuntu text-xl font-bold text-primary">Links</h2>
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
            <h2 className="font-ubuntu text-xl font-bold text-primary">Languages</h2>
            <p className="flex items-center gap-2 font-kanit text-lg">
              <Badge variant="destructive">JavaScript</Badge>
              <Badge variant="default">TypeScript</Badge>
            </p>
          </div>
          {/* Technology */}
          <div className="space-y-3">
            <h2 className="font-ubuntu text-xl font-bold text-primary">Technologies</h2>
            <p className=" flex items-center gap-2 font-kanit">
              <Badge variant="outline">React.js</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Tailwind</Badge>
            </p>
          </div>
          {/* Description */}
          <div className="space-y-1">
            <h2 className="font-ubuntu text-xl font-bold text-primary">Description</h2>
            <p className="text-left font-kanit text-lg">
              A comprehensive admin panel for managing your application with ease. A comprehensive
              admin panel for managing your application with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
