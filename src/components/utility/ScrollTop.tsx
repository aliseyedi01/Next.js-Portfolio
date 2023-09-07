"use client";
import { useScrollPercentage } from "@/hooks/useScrollPercentage";
// react
import React, { useState, useEffect } from "react";
// import CircleProgressBar from "./CircleProgressBar";

const ScrollTop: React.FC = () => {
  const scrollPercentage = useScrollPercentage();
  const [showTopButton, setShowTopButton] = useState<boolean>(false);

  useEffect(() => {
    setShowTopButton(Number(scrollPercentage) < 80);
  }, [scrollPercentage]);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let widthCircle = 60;
  let percentage = 100 - scrollPercentage;
  let radius = widthCircle / 2 - 10;
  let dashArray = 2 * Math.PI * radius;
  let dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${showTopButton ? "hidden md:block" : "hidden"}`}>
      {/* circle progress bar  */}
      <svg width={widthCircle} height={widthCircle} viewBox={`0 0 ${widthCircle} ${widthCircle}`}>
        <circle
          cx={widthCircle / 2}
          cy={widthCircle / 2}
          strokeWidth="8px"
          r={radius}
          className="fill-none stroke-indigo-400 dark:stroke-indigo-400"
        />
        <circle
          cx={widthCircle / 2}
          cy={widthCircle / 2}
          strokeWidth="8px"
          r={radius}
          className="circle-2 fill-none stroke-indigo-600 dark:stroke-indigo-600"
          transform={`rotate(-90 ${widthCircle / 2} ${widthCircle / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </svg>
      {/* Icon Top */}
      <div
        className="svg-top absolute left-[16px] top-[13px] h-7 w-7 cursor-pointer bg-indigo-800 dark:bg-indigo-400"
        onClick={handleTop}
      />
    </div>
  );
};

export default ScrollTop;

{
  /* svg to top */
}
{
  /* <div className="svg-top absolute left-[7px] top-[5.5px] h-8 w-8 bg-indigo-950" /> */
}
