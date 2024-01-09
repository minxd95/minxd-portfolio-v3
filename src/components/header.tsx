"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { PROJECTS_URL } from "@/constants";
import { ExternalLink, Music4 } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="z-10 fixed w-full h-16">
      <div className="bg-background max-w-[40rem] h-full px-4 flex justify-between items-center my-0 mx-auto">
        <div className="flex">
          <Link href="/" className="flex items-center gap-1 mr-6">
            <span className="font-bold text-lg">Minseok Seo</span>
            <Music4 className="w-[1.2rem] h-[1.2rem]" />
          </Link>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                target="_blank"
                href={PROJECTS_URL}
                className="text-sm font-light flex items-center gap-0.5 translate-y-px"
              >
                <span>Projects</span>
                <ExternalLink className="w-[0.75rem] h-[0.75rem]" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
