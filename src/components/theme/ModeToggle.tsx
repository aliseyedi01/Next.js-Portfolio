"use client";

import * as React from "react";
import { BsSunFill, BsMoonStarsFill, BsDisplayFill } from "react-icons/bs";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <BsSunFill className="rotate-0 scale-100 text-xl transition-all dark:-rotate-90 dark:scale-0" />
          <BsMoonStarsFill className="absolute rotate-90 scale-0 text-xl transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className=" border-indigo-400 bg-background font-ubuntu dark:border dark:border-indigo-600"
      >
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
          <BsSunFill className="mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
          <BsMoonStarsFill className="mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
          <BsDisplayFill className="mr-2" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
