"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar height="2px" color="#5e19df" options={{ showSpinner: false }} shallowRouting />
    </>
  );
};

export default ProgressProvider;
