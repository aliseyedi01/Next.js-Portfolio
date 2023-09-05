"use client";
import { useScrollPercentage } from "@/hooks/useScrollPercentage";
// react
import React, { useState, useEffect } from "react";

const ScrollTop: React.FC = () => {
  const scrollPercentage = useScrollPercentage();
  const [showTopButton, setShowTopButton] = useState<boolean>(false);

  useEffect(() => {
    setShowTopButton(Number(scrollPercentage) < 80);
  }, [scrollPercentage]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 h-12 w-12  cursor-pointer overflow-hidden rounded-full border border-blue-600 bg-blue-600 ${
        showTopButton ? "hidden md:block" : "hidden"
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
          <div className="svg-top absolute left-[7px] top-[5.5px] h-8 w-8 bg-indigo-950" />
        </div>
      </div>
    </div>
  );
};

export default ScrollTop;
