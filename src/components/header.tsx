"use client";

import { MobileMenu } from "@/components/mobile-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Music4 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="z-10 fixed w-full h-16">
      <div className="bg-background max-w-[40rem] h-full px-4 flex justify-between items-center my-0 mx-auto">
        <div className="flex">
          <Link href="/" className="flex items-center gap-1 mr-6">
            <span className="font-bold text-lg">Minseok Seo</span>
            <Music4 className="w-[1.2rem] h-[1.2rem]" />
          </Link>
          <ul className="hidden sm:flex sm:items-center gap-6">
            <li>
              <Link
                href="/"
                className={cn(
                  "text-sm text-muted-foreground font-light",
                  pathname === "/" && "text-primary font-normal"
                )}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://minxd.notion.site/Projects-e6bd669481a8487e81fa20c88e98ce9a?pvs=4"
                className={cn(
                  "text-sm text-muted-foreground font-light",
                  pathname === "/projects" && "text-primary font-normal"
                )}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <ModeToggle />
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
