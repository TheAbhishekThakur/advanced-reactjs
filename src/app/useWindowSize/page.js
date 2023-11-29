"use client";
import useWindowSize from "../../hooks/useWindowSize";

const TestUseWindowSize = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      {width} x {height}
    </div>
  );
};

export default TestUseWindowSize;
