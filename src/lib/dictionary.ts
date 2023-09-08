// import "server-only";
import { Locale, i18n } from "@/lib/i18n.config";
import { error } from "console";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  fa: () => import("@/dictionaries/fa.json").then((module) => module.default),
};

// export const getDictionary = async (locale: Locale) =>
//   dictionaries[locale]?.() ?? dictionaries.en();

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
