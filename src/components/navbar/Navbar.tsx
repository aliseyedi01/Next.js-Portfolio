// react
import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  InfoCircledIcon,
  RocketIcon,
  ChatBubbleIcon,
  LaptopIcon,
} from "@radix-ui/react-icons";
// next
import Link from "next/link";
// component
import { ModeToggle } from "../theme/ModeToggle";
import { LanguageSwitcher } from "..";
import { Button } from "../ui/button";
// i18n
import { getDictionary } from "@/lib/dictionary";
// types
import { LangProps } from "@/types/common";

const Navbar: React.FC<LangProps> = async ({ lang }) => {
  const { header } = await getDictionary(lang);

  const navItemsData = [
    {
      name: `${header.home}`,
      link: "/#home",
      icon: <HomeIcon />,
    },
    {
      name: `${header.about}`,
      link: "/#about",
      icon: <InfoCircledIcon />,
    },
    {
      name: `${header.Skills}`,
      link: "/#skills",
      icon: <RocketIcon />,
    },
    {
      name: `${header.Project}`,
      link: "/#projects",
      icon: <LaptopIcon />,
    },
    {
      name: `${header.contact}`,
      link: "/#contact",
      icon: <ChatBubbleIcon />,
    },
  ];

  return (
    <>
      {/* Title */}
      <h2 className="font-mitr text-base font-medium rtl:font-iranSans md:text-lg">
        {header.name}
      </h2>
      {/* Items */}
      <nav className="hidden translate-x-6 items-center gap-6 md:flex">
        {navItemsData.map((item) => (
          <Link
            href={`/${lang}${item.link}`}
            key={item.name}
            className={`flex items-center gap-1 rounded-lg px-2 py-1 font-medium capitalize hover:border-b  hover:bg-blue-400 ltr:font-ubuntu rtl:font-arSans dark:hover:bg-blue-800`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      {/* Buttons */}
      <div className="flex items-center gap-2 font-kanit">
        {/* Resume */}

        <Button
          asChild
          size="icon"
          className="rounded-full bg-blue-600 text-xs text-white  md:text-base"
        >
          <Link href={`/${lang}/resume`}> CV </Link>
        </Button>

        {/* Bilingual */}
        <LanguageSwitcher />
        {/* DarkMode */}
        <ModeToggle />
      </div>
    </>
  );
};

export default Navbar;
