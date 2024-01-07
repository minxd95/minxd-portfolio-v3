"use client";

import hello from "@/assets/lotties/hello.json";
import { useLottie } from "lottie-react";
import { useEffect } from "react";

export function WelcomeAnimation() {
  const options = {
    animationData: hello,
    loop: false,
    autoplay: false,
  };

  const { View, playSegments } = useLottie(options);

  useEffect(() => {
    playSegments([0, 450], true);
  }, [playSegments]);

  return (
    <div className="w-64 h-32 my-0 mx-auto -translate-y-16 dark:invert">
      {View}
    </div>
  );
}
