import { notFound } from "next/navigation";

export default function Page() {
  let pageData = false;

  if (!pageData) notFound();

  return <h1>Some Page</h1>;
}
