"use client";
// components
import { BackPage } from "@/components";
// next
import Image from "next/image";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";
import { ProjectDataType } from "@/data/projectData";
import { ReactNode } from "react";
// i18n
import { Locale } from "@/lib/i18n.config";
// types
type Props = {
  children: ReactNode;
  Data: ProjectDataType;
  lang: Locale;
};

const ProjectPreview: React.FC<Props> = ({ children, Data, lang }) => {
  const coverImages = Data.image;

  const { title } = Data[lang];

  return (
    <div className="flex h-full w-full flex-col gap-3 pt-16 ">
      {/* header */}
      <div className="flex items-center ">
        <BackPage />
        <p className="text-md translate-y-[2px] font-alkatra rtl:font-iranSans">
          {lang === "en" ? "Project" : "پروژه "} / {title}{" "}
        </p>
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
            modules={[EffectFlip, Pagination, Navigation, Autoplay]}
            className="h-full w-full"
          >
            {coverImages.map((image, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center bg-background ">
                <Image
                  src={image}
                  width="700"
                  height="400"
                  loading="eager"
                  alt="singleProject"
                  className="h-full w-full object-scale-down"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Information */}
        {children}
      </div>
    </div>
  );
};

export default ProjectPreview;
