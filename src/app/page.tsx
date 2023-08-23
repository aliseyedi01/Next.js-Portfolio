import { ModeToggle } from "@/components/theme/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-2 p-24">
      <ModeToggle />
    </main>
  );
}
