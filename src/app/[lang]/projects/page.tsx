import { BackPage, ProjectAll } from "@/components";
import ProjectCard from "@/components/projects/ProjectCard";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n.config";
import type { Metadata } from "next";

export default function ({ params }: { params: { lang: Locale } }) {
  return <ProjectAll lang={params.lang} />;
}
