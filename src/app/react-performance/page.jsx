"use client";
import React from "react";
import LazyLoadingImageUsingIntersectionObserver from "./lazyloading-image";

const ReactPerformance = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Performance</h1>
      <ul>
        <li>
          <LazyLoadingImageUsingIntersectionObserver />
        </li>
      </ul>
    </div>
  );
};

export default ReactPerformance;
