import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-2 p-24">
      <p className="font-serif">Resume Ali Seyedi</p>
      <Button size="sm" variant="destructive">
        Home
      </Button>
    </main>
  );
}
