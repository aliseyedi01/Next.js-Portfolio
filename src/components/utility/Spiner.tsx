import React from "react";

const Spiner = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <span className="relative isolate inline-flex items-center justify-center">
        <span className="absolute z-0 h-8 w-8 animate-scale rounded-full bg-indigo-400/60"></span>
        <span className="animation-delay-1000 absolute z-10 h-8 w-8 animate-scale rounded-full bg-indigo-400/60"></span>
      </span>
    </div>
  );
};

export default Spiner;
