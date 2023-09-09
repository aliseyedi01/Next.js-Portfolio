import { Locale } from "@/lib/i18n.config";

export type PageProps = {
  params: { lang: Locale };
};

export type LangProps = {
  lang: Locale;
};
