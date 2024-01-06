"use client";

import { MobileMenu } from "@/components/mobile-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full h-16 flex justify-between items-center">
      <div className="flex">
        <Link href="/" className="flex items-center gap-1 mr-6">
          <Music className="w-[1.4rem] h-[1.4rem]" />
          <span className="font-bold text-lg">Minseok Seo</span>
        </Link>
        <ul className="sm:flex hidden">
          <li>
            <Button variant="link" asChild>
              <Link
                href="/"
                className={cn(
                  "text-sm text-muted-foreground font-light",
                  pathname === "/" && "text-primary font-normal"
                )}
              >
                About
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/works"
                className={cn(
                  "text-sm text-muted-foreground font-light",
                  pathname === "/works" && "text-primary font-normal"
                )}
              >
                Works
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/articles"
                className={cn(
                  "text-sm text-muted-foreground font-light",
                  pathname === "/articles" && "text-primary font-normal"
                )}
              >
                Articles
              </Link>
            </Button>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <ModeToggle />
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
