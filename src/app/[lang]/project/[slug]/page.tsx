import { ProjectInfo, ProjectPreview } from "@/components";
import { projectsData } from "@/data/projectData";
import { Locale } from "@/lib/i18n.config";
import { headers } from "next/headers";

const Pages = ({ params }: { params: { lang: Locale } }) => {
  const headersList = headers();
  const fullUrl = headersList.get("x-invoke-path");
  const id = fullUrl?.split("/").slice(-1)[0];

  const projectsDataShow = projectsData.find((project) => project.id == id);

  if (!projectsDataShow) {
    console.log("data not found!");
    return null;
  }

  return (
    <ProjectPreview Data={projectsDataShow} lang={params.lang}>
      <ProjectInfo lang={params.lang} Data={projectsDataShow} />
    </ProjectPreview>
  );
};

export default Pages;
