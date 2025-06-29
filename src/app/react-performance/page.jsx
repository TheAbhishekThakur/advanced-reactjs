"use client";
import React from "react";
// import LazyLoadingImageUsingIntersectionObserver from "./lazyloading-image";
// import ReactWindow from "./react-window";
// import ReduceCodeDuplication from "./reduce-code-duplication";
// import StaleClosures from "./stale-closures";
import RenderLargeLists from "./render-large-lists";

const ReactPerformance = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">React Performance</h1>
      <div>
        {/* <LazyLoadingImageUsingIntersectionObserver /> */}
        {/* <ReactWindow /> */}
        {/* <ReduceCodeDuplication /> */}
        {/* <StaleClosures /> */}
        <RenderLargeLists />
      </div>
    </div>
  );
};

export default ReactPerformance;
