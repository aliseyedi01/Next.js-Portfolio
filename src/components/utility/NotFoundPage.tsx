// next
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
// icons
import { LuChevronLeft } from "react-icons/lu";
// types
type Props = {
  type: "page" | "project";
};

type Lang = "en" | "fa";

const NotFoundPage: React.FC<Props> = ({ type }) => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const lang = activePath!.split("/")[1] as Lang;

  let data = {
    title: {
      page: {
        en: "Not Found Page !",
        fa: "هیچ صفحه یافت نشد !",
      },
      project: {
        en: "Not Found Any Project !",
        fa: "هیچ پروژه یافت نشد !",
      },
    },
    button: {
      en: "Home",
      fa: "خانه",
    },
    link: {
      page: `/${lang}/projects`,
      project: `/${lang}`,
    },
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 text-3xl">
      <h1 className="mb-2 font-ubuntu text-5xl ">404</h1>
      <h2 className="font-kanit rtl:font-arSans">{data.title[type][lang]}</h2>
      <Link
        href={data.link[type]}
        className="flex items-center gap-2 rounded-md bg-blue-400 px-2 py-1 font-kanit text-lg rtl:flex-row-reverse rtl:font-arSans"
      >
        <LuChevronLeft className="text-xl" />
        {data.button[lang]}
      </Link>
    </div>
  );
};

export default NotFoundPage;
