// import "server-only";
import { Locale } from "@/lib/i18n.config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  fa: () => import("@/dictionaries/fa.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return locale == "en" ? dictionaries.en() : dictionaries.fa();
};
