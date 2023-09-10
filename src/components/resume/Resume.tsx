// next
import React from "react";
import Link from "next/link";
// component
import { Button } from "../ui/button";
import { BackPage } from "..";
// i18n
import { LangProps } from "@/types/common";

const Resume: React.FC<LangProps> = ({ lang }) => {
  const resume = {
    en: "https://tsnfxzvybnnhqwjcqvej.supabase.co/storage/v1/object/public/other/resume-en.pdf",
    fa: "https://tsnfxzvybnnhqwjcqvej.supabase.co/storage/v1/object/public/other/resume-fa.pdf",
  };

  let pathPdf = resume[lang];

  return (
    <div
      id="resume"
      className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-6 pb-14 pt-20 md:pb-5 md:pt-14"
    >
      <BackPage className="absolute left-7 top-16" />
      <Link href={pathPdf} className="pt-3">
        <Button className="font-al   text-sm text-white rtl:font-arSans">
          {lang === "en" ? "Download CV" : "دانلود رزومه"}
        </Button>
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
