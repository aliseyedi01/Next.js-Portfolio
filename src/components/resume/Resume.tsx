"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Resume: React.FC = () => {
  const pathPdf =
    "https://tsnfxzvybnnhqwjcqvej.supabase.co/storage/v1/object/public/other/resuum1.pdf?t=2023-08-28T08%3A03%3A51.434Z";

  return (
    <div
      id="resume"
      className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 pb-5 pt-14"
    >
      <Link href={pathPdf}>
        <Button>Download CV</Button>
      </Link>
      <object
        className="w-full rounded-lg border-2 border-red-400 md:w-[80%]"
        height="100%"
        width="100%"
        type="application/pdf"
        data={pathPdf}
      ></object>
    </div>
  );
};

export default Resume;
