"use client";
import React, { useCallback } from "react";
import { photoData } from "./constant";
import Card from "./card";
import { FixedSizeList } from "react-window";

// Impplementation of ReactWindow component
const ReactWindow = () => {
  // Row component to render each item in the list
  const Row = useCallback(({ index, style }) => {
    const { id, title, thumbnailUrl } = photoData[index];
    console.log("Rendering row:", index);
    return (
      <div style={style}>
        <Card id={id} title={title} thumbnailUrl={thumbnailUrl} />
      </div>
    );
  }, []);

  return (
    <>
      <h1 className="font-bold mb-4 text-center">React Window</h1>

      {/* <div
        style={{
          maxHeight: "50vh",
          overflowY: "auto",
          border: "1px solid #ccc",
          margin: "20px 300px",
        }}
      >
        {photoData?.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div> */}

      <FixedSizeList height={500} itemSize={3} itemCount={photoData.length}>
        {Row}
      </FixedSizeList>
    </>
  );
};

export default ReactWindow;
