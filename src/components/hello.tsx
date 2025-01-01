"use client";

import hello from "@/assets/lotties/hello.json";
import { useLottie } from "lottie-react";
import { useEffect } from "react";

export default function Hello() {
  const options = {
    animationData: hello,
    loop: false,
    autoplay: false,
  };

  const { View, playSegments } = useLottie(options);

  useEffect(() => {
    playSegments([0, 450], true);
  }, [playSegments]);

  return View;
}
