"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { PROJECTS_URL } from "@/constants";

export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="w-[1.2rem] h-[1.2rem]" />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link target="_blank" href={PROJECTS_URL}>
            Projects
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
