import { useEffect, useRef, useState } from "react";
import "../style.css";

const registerObserver = (ref, callback) => {
  if (!ref || !ref.current) {
    return;
  }

  const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      callback(true);
      observer.disconnect();
    });
  });
  observer.observe(ref.current);
};

const LazyImage = ({ src, alt, styleClass }) => {
  const [showImage, setShowImage] = useState(false);

  const imageRef = useRef(null);

  useEffect(() => {
    registerObserver(imageRef, setShowImage);
  }, []);

  if (showImage) {
    return <img src={src} alt={alt} className={"lazy-image " + styleClass} />;
  }

  return <span alt={alt} ref={imageRef} className="lazy-image" />;
};

export default LazyImage;
