"use client";
// react
import React, { useState, useEffect } from "react";

const ScrollTop: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollPercentage, setScrollPercentage] = useState<string>("");

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 200);
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollY / maxScroll) * 100;
    const finalPercentage = 100 - Math.round(percentage);
    setScrollPercentage(finalPercentage.toString());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`m fixed bottom-4 right-4 hidden h-12 w-12 cursor-pointer overflow-hidden rounded-full border border-blue-600 bg-blue-600 md:block ${
        isScrolled ? "block" : "hidden"
      } `}
    >
      <div className="relative h-full w-full">
        {/* background scroll */}
        <div
          onClick={handleClick}
          style={{ height: `${scrollPercentage}%` }}
          className="absolute inset-0 bg-background text-3xl"
        >
          {/* svg top */}
          <div className="svg-top absolute left-[7px] top-[5.5px]  h-8 w-8 bg-indigo-950  text-2xl font-bold  " />
        </div>
      </div>
    </div>
  );
};

export default ScrollTop;
