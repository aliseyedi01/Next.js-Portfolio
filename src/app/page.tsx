import { About, Contact, Home, Projects, Skills } from "@/components";

export default function () {
  return (
    <main className="h-[1000px]">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
