"use client";
import { useState } from "react";
import Checkboxes from "./Checkboxes";
import { checkBoxesData } from "./data";

const NestedCheckboxes = () => {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <Checkboxes
        data={checkBoxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default NestedCheckboxes;
