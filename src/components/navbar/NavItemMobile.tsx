"use client";
// icons
import {
  HomeIcon,
  InfoCircledIcon,
  RocketIcon,
  ChatBubbleIcon,
  LaptopIcon,
} from "@radix-ui/react-icons";
// react
import React, { useState, useEffect } from "react";
// hooks
import { useScrollPercentage } from "@/hooks/useScrollPercentage";
import { usePathname } from "next/navigation";
// types
interface NavItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}
// next
import Link from "next/link";
import { Locale } from "@/lib/i18n.config";

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

const NavItemMobile: React.FC<{ lang: Locale }> = ({ lang }) => {
  const scrollPercentage = useScrollPercentage();
  const inverseScrollPercentage = 100 - scrollPercentage;
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

  return (
    <>
      {/* Mobile header */}
      <header className="fixed bottom-2 left-0 z-50 w-full p-2 md:hidden">
        <nav className="mx-5 flex items-center justify-center gap-12 overflow-hidden rounded-full border border-indigo-400 py-2 backdrop-blur-lg dark:border-red-500">
          {navItemsData.map((item) => (
            <Link key={item.link} href={`/${lang}${item.link}`} className="flex items-center gap-1">
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
            style={{ width: `${inverseScrollPercentage}%` }}
            className="absolute inset-0 -z-10 h-full bg-blue-500"
          ></div>
        </nav>
      </header>
    </>
  );
};

export default NavItemMobile;
