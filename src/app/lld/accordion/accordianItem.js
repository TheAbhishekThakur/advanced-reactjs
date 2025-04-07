import React from "react";

const AccordianItem = ({ title, body, setOpenIndex, isOpen }) => {
  return (
    <div className="border border-black-300 rounded-md mb-2">
      <div
        className="font-bold p-2 bg-slate-200 flex justify-between items-center cursor-pointer"
        onClick={setOpenIndex}
      >
        <span>{title}</span>
        <span>⬇️</span>
      </div>
      {isOpen && <div className="p-2">{body}</div>}
    </div>
  );
};

export default AccordianItem;
