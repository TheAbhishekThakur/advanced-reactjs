"use client";
import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

const TestUsePrevious = () => {
  const [count, setCount] = useState(0);
  const previousValue = usePrevious(count);

  return (
    <div>
      Current: {count}, Previous: {previousValue}
      <br />
      <button
        onClick={() => setCount(count + 1)}
        type="button"
        style={{
          width: "30px",
          height: "30px",
          padding: "5px",
          background: "gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        +
      </button>
    </div>
  );
};

export default TestUsePrevious;
