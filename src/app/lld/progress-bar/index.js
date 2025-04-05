"use client";
import ProgressComp from "./Progress";

const bars = [5, 10, 30, 50, 70, 90, 100];

const ProgressBar = () => {
  return (
    <div>
      <h2>Progress Bar</h2>
      {bars.map((item, index) => (
        <ProgressComp progressValue={item} key={index} />
      ))}
    </div>
  );
};

export default ProgressBar;
