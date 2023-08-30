import { About, Contact, Home, Projects, Skills } from "@/components";

export default function () {
  return (
    <main className="h-full">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
