// next
import React from "react";
import Image from "next/image";
import Link from "next/link";
// component

// i18n
import { getDictionary } from "@/lib/dictionary";
// types
import { LangProps } from "@/types/common";
import { Button } from "../ui/button";

const Home: React.FC<LangProps> = async ({ lang }) => {
  const { home } = await getDictionary(lang);
  return (
    <div
      id="home"
      className="grid h-screen w-full snap-start snap-always grid-cols-1 place-content-center justify-items-center gap-2 max-md:pt-20 md:h-screen md:grid-cols-2"
    >
      {/* info */}
      <div className="grid space-y-5 place-self-center self-center">
        <Image
          src="/image/profile.jpg"
          height={100}
          width={100}
          alt="profile"
          className="rounded-full"
        />
        <h1 className="from-indigo-700 to-green-500 bg-clip-text py-2 font-mitr text-2xl font-semibold tracking-wider text-transparent ltr:bg-gradient-to-r rtl:bg-gradient-to-l rtl:font-iranSans rtl:font-bold md:text-5xl">
          {home.name}
        </h1>
        <h2 className="text-lg tracking-wide text-indigo-950 rtl:font-arSans dark:text-indigo-500 md:text-3xl">
          {home.task}
        </h2>
        <div className="rtl:font-rubik flex gap-3 self-end font-arSans font-bold">
          <Button asChild>
            <Link href="#projects">{home.project} </Link>
          </Button>

          <Button variant="destructive" asChild>
            <Link href="#contact">{home.contact} </Link>
          </Button>
        </div>
      </div>
      {/* svg */}
      <img src="/svg/desk.svg" alt="desk" className="hidden h-[500px] w-[500px] md:block" />
    </div>
  );
};

export default Home;
