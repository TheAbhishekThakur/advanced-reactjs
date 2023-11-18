"use client";
import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true);
    });
    window.addEventListener("offline", () => {
      setOnline(false);
    });

    return () => {
      window.removeEventListener("online", () => {});
      window.removeEventListener("offline", () => {});
    };
  }, []);

  return online;
};

export default useOnline;
