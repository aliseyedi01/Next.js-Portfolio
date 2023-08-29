// react
import React from "react";
// next
import Image from "next/image";
// component
import { Button } from "../ui/button";

export const Home: React.FC = () => {
  return (
    <div
      id="home"
      className="grid h-screen w-full snap-start snap-always grid-cols-1 place-content-center justify-items-center gap-2 max-md:pt-20 md:h-screen md:grid-cols-2 "
    >
      {/* info */}
      <div className="grid space-y-4 place-self-center self-center">
        <Image
          src="/image/profile.jpg"
          height={100}
          width={100}
          alt="profile"
          className="rounded-full"
        />
        <h1 className=" bg-gradient-to-r from-indigo-700 to-green-500 bg-clip-text text-2xl font-bold tracking-wider text-transparent md:text-5xl">
          Ali Seyedi
        </h1>
        <h2 className="font-mono text-lg font-semibold text-indigo-950 dark:text-indigo-500 md:text-2xl">
          Front-End Web Developer
        </h2>
        <div className="flex gap-3 self-end">
          <Button>Project</Button>
          <Button variant="destructive">Contact</Button>
        </div>
      </div>
      {/* svg */}
      <img src="/svg/desk.svg" alt="desk" className="hidden h-[500px] w-[500px] md:block" />
    </div>
  );
};

export default Home;
