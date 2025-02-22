"use client";
// Progress Component
import { useEffect, useState } from "react";
import "./style.css";

const ProgressComp = ({ progressValue }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(progressValue);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="main-container">
      <div
        className="inner-container"
        style={{
          //   width: `${progress}%`,
          transform: `translateX(${progress - 100}%)`,
          color: progress < 5 ? "#000" : "#fff",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressComp;
