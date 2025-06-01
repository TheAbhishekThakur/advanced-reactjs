"use client";
import React from "react";
import LazyImage from "./components/lazyImage";

const images = [
  "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
  "https://img.freepik.com/free-photo/medium-shot-family-hanging-out-jetty_23-2150514805.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/cute-family-playing-summer-park_1157-33542.jpg?semt=ais_hybrid&w=740",
  "https://st4.depositphotos.com/1001030/23035/i/450/depositphotos_230358514-stock-photo-photographer-takes-pictures-of-happy.jpg",
  "https://st4.depositphotos.com/10256402/27450/i/450/depositphotos_274504098-stock-photo-photographer-are-sitting-look-the.jpg",
  "https://static.vecteezy.com/system/resources/previews/023/910/335/non_2x/a-man-takings-photo.jpg",
  "https://education.theiet.org/media/8411/digital-photography.jpg",
  "https://media.istockphoto.com/id/847203690/photo/young-female-student-holding-professional-camera.jpg?s=612x612&w=is&k=20&c=iYDVIbVf7QEhA87x8MOH8tBLaDGQSeTx94ILX09t6Kw=",
];

const LazyLoadingImageUsingIntersectionObserver = () => {
  return (
    <div className="text-center">
      <h1>Lazy Loading Image using Intersection Observer</h1>
      {images.map((item, index) => (
        <div className="image-container" key={index}>
          {/* This will load all images immediately, regardless of their visibility in the viewport */}
          {/* <img
            key={index}
            src={item}
            alt={`Lazy loaded image ${index + 1}`}
            className="lazy-image"
          /> */}

          {/* This will load images only when they enter the viewport (lazy loading with Intersection Observer) */}
          <LazyImage
            className="lazy-image"
            src={item}
            key={index}
            alt={item}
            styleClass="image"
          />
        </div>
      ))}
    </div>
  );
};

export default LazyLoadingImageUsingIntersectionObserver;
