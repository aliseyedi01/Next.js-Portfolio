"use client";
// react
import React from "react";
import {
  HomeIcon,
  InfoCircledIcon,
  RocketIcon,
  ChatBubbleIcon,
  FileTextIcon,
  LaptopIcon,
} from "@radix-ui/react-icons";
// next
import Link from "next/link";
// component
import { ModeToggle } from "../theme/ModeToggle";
// types
interface NavItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const navItemsData: NavItem[] = [
  {
    name: "Home",
    link: "/#home",
    icon: <HomeIcon />,
  },
  {
    name: "About",
    link: "/#about",
    icon: <InfoCircledIcon />,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: <RocketIcon />,
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: <LaptopIcon />,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: <ChatBubbleIcon />,
  },
  {
    name: "Resume",
    link: "/resume",
    icon: <FileTextIcon />,
  },
];

export const Navbar: React.FC = () => (
  <div className="relative">
    {/* Desktop & Mobile header */}
    <header className="fixed top-0 flex h-12  w-full items-center justify-between p-2 px-4 backdrop-blur-md">
      {/* Title */}
      <h2 className="text-sm md:text-base">Ali Seyedi</h2>
      <div className="flex items-center gap-12">
        {/* Items */}
        <nav className="hidden items-center gap-5 md:flex">
          {navItemsData.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className="flex items-center gap-1 hover:border-b hover:border-red-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Change Mode */}
        <ModeToggle />
      </div>
    </header>

    {/* Mobile header */}
    <header className="fixed bottom-2 left-0 w-full p-2 md:hidden">
      <nav className="mx-5 flex items-center justify-center gap-8 rounded-full border border-indigo-400 py-2 backdrop-blur-lg dark:border-red-500">
        {navItemsData.map((item) => (
          <Link key={item.link} href={item.link} className="flex items-center gap-1">
            <span className="font-bold text-indigo-600 dark:text-yellow-400">{item.icon}</span>
          </Link>
        ))}
      </nav>
    </header>
  </div>
);
