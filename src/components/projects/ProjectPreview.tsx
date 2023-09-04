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
import { EffectFlip, Pagination, Navigation, Autoplay, Zoom } from "swiper/modules";

export default function ProjectPreview({ children }: { children: React.ReactNode }) {
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
        {children}
      </div>
    </div>
  );
}
