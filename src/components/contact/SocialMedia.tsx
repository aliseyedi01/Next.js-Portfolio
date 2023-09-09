// next
import Link from "next/link";
import React from "react";
// icons
import { BiLogoLinkedin, BiEnvelope, BiLogoTelegram, BiLogoGithub } from "react-icons/bi";
// i18n
import { getDictionary } from "@/lib/dictionary";
//types
import { LangProps } from "@/types/common";

const SocialMedia: React.FC<LangProps> = async ({ lang }) => {
  const { contact } = await getDictionary(lang);

  const dataSocial = [
    {
      name: `${contact.email}`,
      value: "aliseyedi07@gmail.com",
      icon: <BiEnvelope />,
      color: "text-lime-600",
      link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=aliseyedi07@gmail.com",
    },
    {
      name: `${contact.github}`,
      value: "aliseyedi01",
      icon: <BiLogoGithub />,
      color: "text-indigo-500",
      link: "https://github.com/aliseyedi01",
    },
    {
      name: `${contact.linkedin}`,
      value: "aliseyedi01",
      icon: <BiLogoLinkedin />,
      color: "text-green-700",
      link: "https://www.linkedin.com/in/aliseyedi01/",
    },
    {
      name: `${contact.telegram}`,
      value: "@aliseyedi01",
      icon: <BiLogoTelegram />,
      color: "text-orange-600",
      link: "https://t.me/aliseyedi01",
    },
  ];
  return (
    <div className="order-2 flex flex-row items-start justify-center gap-5 md:order-1 md:flex-col md:gap-7">
      {dataSocial.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          target="_blank"
          className="flex cursor-pointer items-center justify-center gap-6"
        >
          <span className={`text-2xl max-md:mt-6 md:text-3xl ${item.color}`}>{item.icon}</span>
          <div className="font-kanit max-md:hidden">
            <p className="font-bold capitalize rtl:font-arSans">{item.name}</p>
            <p>{item.value}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
