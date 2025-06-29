import { useState } from "react";

const StaleClosures = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      // This is a stale closure issue
      console.log("Current count:", count);
      // It will always log the initial count value (0) due to closure
      setCount(count + 1);

      // If you want to use the latest count, you can use a functional update
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  return (
    <div>
      <h1>No of posts: {count}</h1>
      <button onClick={handleClick}>Add New</button>
    </div>
  );
};

export default StaleClosures;
