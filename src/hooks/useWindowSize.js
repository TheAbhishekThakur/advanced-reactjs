"use client";
import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const windowSizeHandler = () => {
    // window.screen.width;
    // window.screen.height;
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", windowSizeHandler);
    return () => window.removeEventListener("resize", windowSizeHandler);
  }, []);

  return windowSize;
};
export default useWindowSize;
