// i18n
import { Locale } from "@/lib/i18n.config";
import { getDictionary } from "@/lib/dictionary";
// react
import React from "react";

const About: React.FC<{ lang: Locale }> = async ({ lang }) => {
  const { about } = await getDictionary(lang);
  return (
    <div
      id="about"
      className="grid h-fit w-full snap-center grid-cols-1 flex-col place-items-center justify-items-center px-4 pt-14 md:h-screen md:grid-cols-2"
    >
      <img src="/svg/about.svg" alt="about" className="hidden h-[500px] w-[500px] md:block" />
      <div className="flex flex-col items-start justify-start gap-3 px-5">
        <h2>{about.title}</h2>
        <ul className="list-disc text-justify text-xl font-normal leading-8 ltr:font-kanit rtl:font-iranSans">
          <li>{about.description.p1}</li>
          <li>{about.description.p2}</li>
          <li>{about.description.p3}</li>
          <li>{about.description.p4}</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
