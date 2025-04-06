import React from "react";
import LocalStoragePage from "./uses/localStorage";
import TestUseOnline from "./uses/online";
import TestUsePrevious from "../usePrevious/page";
import TestUseWindowSize from "../useWindowSize/page";

const Hooks = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Custom Hooks</h1>
      <LocalStoragePage />
      <TestUseOnline />
      <TestUsePrevious />
      <TestUseWindowSize />
    </div>
  );
};

export default Hooks;
