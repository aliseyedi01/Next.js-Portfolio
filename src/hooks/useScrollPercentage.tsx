import { useState, useEffect } from "react";

export const useScrollPercentage = () => {
  // const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [scrollPercentage, setScrollPercentage] = useState<number | null>(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollY / maxScroll) * 100;
    const finalPercentage = 100 - Math.round(percentage);
    setScrollPercentage(finalPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPercentage;
};
