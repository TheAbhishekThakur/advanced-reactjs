"use client";
import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(false);

  const updateOnlineTrue = () => {
    setOnline(true);
  };
  const updateOnlineFalse = () => {
    setOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", updateOnlineTrue);
    window.addEventListener("offline", updateOnlineFalse);

    return () => {
      window.removeEventListener("online", updateOnlineTrue);
      window.removeEventListener("offline", updateOnlineFalse);
    };
  }, []);

  return online;
};

export default useOnline;
