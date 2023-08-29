"use client";
// react
import React, { useState, useEffect } from "react";
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
import { Button } from "../ui/button";
// types
interface NavItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const navItemsData: NavItem[] = [
  {
    name: "Home",
    link: "#home",
    icon: <HomeIcon />,
  },
  {
    name: "About",
    link: "#about",
    icon: <InfoCircledIcon />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <RocketIcon />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <LaptopIcon />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <ChatBubbleIcon />,
  },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Callback function when an observed section comes into view
    const handleSectionIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleSectionIntersect, {
      rootMargin: "-50% 0px -50% 0px",
    });
    // Observe each section
    navItemsData.forEach((item) => {
      const section = document.querySelector(item.link);
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      {/* Desktop & Mobile header */}
      <header className="fixed top-0 flex h-12  w-full items-center justify-between p-2 px-4 backdrop-blur-md">
        {/* Title */}
        <h2 className="text-sm md:text-base">Ali Seyedi</h2>
        {/* Items */}
        <nav className="hidden translate-x-6 items-center gap-6 md:flex">
          {navItemsData.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className={`flex items-center gap-1 hover:border-b ${
                activeSection == item.name.toLowerCase()
                  ? "border-b border-indigo-500 text-indigo-800"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Change Mode */}
        <div className="flex items-center gap-4">
          <Link href="/resume">
            <Button size="sm">Resume</Button>
          </Link>
          <ModeToggle />
        </div>
      </header>
      {/* Mobile header */}
      <header className="fixed bottom-2 left-0 w-full p-2 md:hidden">
        <nav className="mx-5 flex items-center justify-center gap-8 rounded-full border border-indigo-400 py-2 backdrop-blur-lg dark:border-red-500">
          {navItemsData.map((item) => (
            <Link key={item.link} href={item.link} className="flex items-center gap-1">
              <span
                className={`font-bold text-indigo-600 transition-all duration-100 dark:text-yellow-400 ${
                  activeSection == item.name.toLowerCase() ? "scale-125 text-red-600 shadow-lg" : ""
                }`}
              >
                {item.icon}
              </span>
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
};
