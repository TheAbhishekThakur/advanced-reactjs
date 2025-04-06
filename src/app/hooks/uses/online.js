"use client";
import useOnlineStatus from "../hooks/useOnlineStatus";

const TestUseOnline = () => {
  const online = useOnlineStatus();

  return <div>Network Status: {online ? "Online" : "Offline"}</div>;
};

export default TestUseOnline;
