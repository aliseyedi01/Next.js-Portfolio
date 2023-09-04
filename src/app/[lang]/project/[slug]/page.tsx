import { ProjectInfo, ProjectPreview } from "@/components";
import { Locale } from "@/lib/i18n.config";

const Pages = ({ params }: { params: { lang: Locale } }) => {
  return (
    <ProjectPreview>
      <ProjectInfo lang={params.lang} />
    </ProjectPreview>
  );
};

export default Pages;
