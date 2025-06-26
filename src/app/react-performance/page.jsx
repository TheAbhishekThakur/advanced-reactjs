"use client";
import React from "react";
// import LazyLoadingImageUsingIntersectionObserver from "./lazyloading-image";
import ReactWindow from "./react-window";

const ReactPerformance = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">React Performance</h1>
      <div>
        {/* <LazyLoadingImageUsingIntersectionObserver /> */}
        <ReactWindow />
      </div>
    </div>
  );
};

export default ReactPerformance;
