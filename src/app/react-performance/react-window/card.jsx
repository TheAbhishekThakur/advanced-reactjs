"use client";
import React from "react";

const Card = ({ title, thumbnailUrl, id }) => {
  return (
    <div key={id} className="flex flex-col items-center justify-center">
      <h2>{title}</h2>
      <img src={thumbnailUrl} className="w-[500px]" height="h-full" />
    </div>
  );
};

export default Card;
