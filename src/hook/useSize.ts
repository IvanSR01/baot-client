"use client";
import { useEffect, useState } from "react";

export const useSize = (): number => {
  const isBrowser = typeof window !== "undefined";
  
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (isBrowser) {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isBrowser]);

  return width;
};
