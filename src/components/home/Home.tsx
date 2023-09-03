// react
import React from "react";
// next
import Image from "next/image";
// component
import { Button } from "../ui/button";
import Link from "next/link";
// i18n
import { Locale } from "@/lib/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const Home: React.FC<{ lang: Locale }> = async ({ lang }) => {
  const { home } = await getDictionary(lang);
  return (
    <div
      id="home"
      className="grid h-screen w-full snap-start snap-always grid-cols-1 place-content-center justify-items-center gap-2 max-md:pt-20 md:h-screen md:grid-cols-2 "
    >
      {/* info */}
      <div className="grid space-y-4 place-self-center self-center">
        <Image
          src="/image/profile.jpg"
          height={100}
          width={100}
          alt="profile"
          className="rounded-full"
        />
        <h1 className="bg-gradient-to-r from-indigo-700 to-green-500 bg-clip-text font-alkatra text-2xl font-semibold tracking-wider text-transparent  md:text-5xl">
          {home.name}
        </h1>
        <h2 className="font-ubuntu text-lg font-semibold text-indigo-950 dark:text-indigo-500 md:text-2xl">
          {home.task}
        </h2>
        <div className="flex gap-3 self-end font-kanit font-bold">
          <Link href="#projects">
            <Button> {home.project}</Button>
          </Link>
          <Link href="#contact">
            <Button variant="destructive">{home.contact}</Button>
          </Link>
        </div>
      </div>
      {/* svg */}
      <img src="/svg/desk.svg" alt="desk" className="hidden h-[500px] w-[500px] md:block" />
    </div>
  );
};

export default Home;
