"use client";
import { BackPage } from "@/components";
import { headers } from "next/headers";
import Image from "next/image";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation, Autoplay, Zoom } from "swiper/modules";

const Pages = () => {
  return (
    <div className=" relative flex min-h-screen w-full flex-col gap-3  pt-16">
      {/* header */}
      <div className="flex items-center ">
        <BackPage />
        <p className="text-md translate-y-[2px] font-alkatra">Project / Admin Panel 1</p>
      </div>
      {/* Info */}
      <div className="grid h-[80vh] w-full grid-cols-8 place-content-center place-items-center">
        {/* second */}
        <div className="col-span-4 flex h-96 w-[85%] flex-row overflow-hidden rounded-lg  ">
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
            className="mySwiper rounded-lg"
          >
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="/image/projects/desktop1.png"
                  width="300"
                  height="400"
                  alt="singleProject"
                  className="h-full  w-full !rounded-lg shadow-md "
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
                  className="h-full  w-full !rounded-lg shadow-md "
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
                  className="h-full  w-full !rounded-lg shadow-md "
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
                  className="h-full  w-full !rounded-lg shadow-md "
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* third */}
        <div className="col-span-4 bg-orange-400">2222222222222222222222222222222</div>
      </div>
    </div>
  );
};

export default Pages;
