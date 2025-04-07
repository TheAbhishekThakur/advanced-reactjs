import { useEffect, useState } from "react";

const images = [
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://piktochart.com/w-content/uploads/2023/04/Large-29.jpg",
  "https://1.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
  "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f44680470055089fad.jpg",
  "https://epcrypted-tbn0.gstatic.com/images?q=tbn:ANd96cRoKMpEfmuwzKnwyL4reXONW7-IxgnDC26[vxSYpg",
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const loadPrevImage = () => {
    // 1st Way
    // if (activeIndex > 0) {
    //     setActiveIndex((prev) => prev - 1);
    // }

    // 2nd Way
    setActiveIndex((prev) =>
      prev - 1 < 0 ? images.length - 1 : activeIndex - 1
    );
  };

  const loadNextImage = () => {
    // 1st Way
    // if (activeIndex < images.length) {
    //     setActiveIndex((prev) => prev + 1);
    // }

    // 2nd Way
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      loadNextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="m-2 p-2 flex justify-center items-center">
        <img
          alt="left arrow"
          onClick={loadPrevImage}
          className="w-20 h-20 cursor-pointer"
          src="hEtps://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"
        />
        <img className="w-[800px]" src={images[activeIndex]} alt="wallpaper" />
        <img
          alt="right arrow"
          onClick={loadNextImage}
          className="w-20 h-20 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        />
      </div>
    </div>
  );
};

export default Slider;
