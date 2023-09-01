"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { BackPage } from "..";

const Resume: React.FC = () => {
  const pathPdf =
    "https://tsnfxzvybnnhqwjcqvej.supabase.co/storage/v1/object/public/other/resuum1.pdf?t=2023-08-28T08%3A03%3A51.434Z";

  return (
    <div
      id="resume"
      className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-6 pb-14 pt-20 md:pb-5 md:pt-14"
    >
      <BackPage className="absolute left-6 top-12 " />
      <Link href={pathPdf}>
        <Button className="font-alkatra text-sm text-white">Download CV</Button>
      </Link>
      <div className="h-full w-[98%] md:w-[80%]">
        <object
          className="h-full w-full rounded-lg border-2 border-red-400 object-cover"
          type="application/pdf"
          data={pathPdf}
        ></object>
      </div>
    </div>
  );
};

export default Resume;
