"use client";

import { MobileMenu } from "@/components/mobile-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="z-10 fixed w-full h-16">
      <div className="bg-background max-w-[45rem] h-full px-4 flex justify-between items-center my-0 mx-auto">
        <div className="flex">
          <Link href="/" className="flex items-center gap-1 mr-6">
            <span className="font-bold text-lg">Minseok Seo</span>
            <Music className="w-[1.2rem] h-[1.2rem]" />
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
                About
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className={cn(
                  "text-sm text-muted-foreground font-light",
                  pathname === "/works" && "text-primary font-normal"
                )}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className={cn(
                  "text-sm text-muted-foreground font-light",
                  pathname === "/articles" && "text-primary font-normal"
                )}
              >
                Articles
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
