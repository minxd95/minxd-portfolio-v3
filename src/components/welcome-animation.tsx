"use client";

import dynamic from "next/dynamic";

const Hello = dynamic(() => import("@/components/hello"), { ssr: false });

export function WelcomeAnimation() {
  return (
    <div className="w-64 h-32 my-0 mx-auto -translate-y-16 dark:invert">
      <Hello />
    </div>
  );
}
