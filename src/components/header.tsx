import { MobileMenu } from "@/components/mobile-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full h-16 flex justify-between items-center">
      <div className="flex">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex gap-1">
            <Music className="w-[1.4rem] h-[1.4rem]" />
            <span className="font-bold text-lg">Minseok Seo</span>
          </Link>
        </Button>
        <ul className="sm:flex hidden">
          <li>
            <Button variant="link" asChild>
              <Link href="#" className="text-sm text-primary">
                Works
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="#" className="text-sm text-muted-foreground">
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
