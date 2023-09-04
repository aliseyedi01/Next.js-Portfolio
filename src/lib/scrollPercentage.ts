export const getScrollPercentage = () => {
  // Check if window is available (in a browser context)
  if (typeof window === "undefined") {
    console.warn("The window object is not available in this environment.");
    console.log("The window object is not available in this environment.");
    return () => {};
  }

  let scrollPercentage = 0;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollY / maxScroll) * 100;
    const finalPercentage = 100 - Math.round(percentage);
    scrollPercentage = finalPercentage;
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
