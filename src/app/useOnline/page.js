"use client";
import useOnline from "../../hooks/useOnline";

const TestUseOnline = () => {
  const online = useOnline();

  return <div>Online: {online}</div>;
};

export default TestUseOnline;
