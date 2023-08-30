"use client";
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
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
// types
interface NavItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const navItemsData: NavItem[] = [
  {
    name: "home",
    link: "/#home",
    icon: <HomeIcon />,
  },
  {
    name: "about",
    link: "/#about",
    icon: <InfoCircledIcon />,
  },
  {
    name: "skills",
    link: "/#skills",
    icon: <RocketIcon />,
  },
  {
    name: "projects",
    link: "/#projects",
    icon: <LaptopIcon />,
  },
  {
    name: "contact",
    link: "/#contact",
    icon: <ChatBubbleIcon />,
  },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

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
      const section = document.getElementById(item.name);
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  const [scrollPercentage, setScrollPercentage] = useState<string>("");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollY / maxScroll) * 100;
    const finalPercentage = Math.round(percentage);
    setScrollPercentage(finalPercentage.toString());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Desktop & Mobile header */}
      <header className="fixed top-0 flex h-12  w-full items-center justify-between p-2 px-4 backdrop-blur-md">
        {/* Title */}
        <h2 className="font-alkatra text-sm md:text-base">Ali Seyedi</h2>
        {/* Items */}
        <nav className="hidden translate-x-6 items-center gap-6 md:flex">
          {navItemsData.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className={`flex items-center gap-1 font-ubuntu font-medium capitalize hover:border-b ${
                activeSection == item.name.toLowerCase()
                  ? "border-b border-indigo-500 text-indigo-800 dark:text-indigo-500"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Change Mode */}
        <div className="flex items-center gap-4 font-kanit">
          <Link href="/resume">
            <Button size="sm" className="text-xs md:text-sm">
              Resume
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </header>
      {/* Mobile header */}
      <header className="fixed bottom-2 left-0 w-full p-2 md:hidden">
        <nav className="mx-5 flex items-center justify-center gap-12 overflow-hidden rounded-full border border-indigo-400 py-2 backdrop-blur-lg dark:border-red-500">
          {navItemsData.map((item) => (
            <Link key={item.link} href={item.link} className="flex items-center gap-1">
              <span
                className={`z-40 font-bold text-black transition-all duration-100 dark:text-yellow-400 ${
                  activeSection == item.name.toLowerCase() ? "scale-125 text-red-600" : ""
                }`}
              >
                {item.icon}
              </span>
            </Link>
          ))}
          {/* background scroll */}
          <div
            style={{ width: `${scrollPercentage}%` }}
            className="absolute inset-0 -z-10 h-full bg-blue-500"
          ></div>
        </nav>
      </header>
    </div>
  );
};
