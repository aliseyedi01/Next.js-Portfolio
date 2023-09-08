import { notFound } from "next/navigation";

export default function Page() {
  let pageData = false; // page data retrieved from a CMS with a given slug

  if (!pageData) notFound();

  return <h1>Some Page</h1>;
}
