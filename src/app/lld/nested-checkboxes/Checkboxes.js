import React from "react";
import "./style.css";
import { checkBoxesData } from "./data";

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleCheckboxChange = (isChecked, node) => {
    if (node.children) {
    }

    setChecked((prev) => {
      // Update the checked state of the current node
      const newState = { ...prev, [node.id]: isChecked };

      // If the node has children, update their checked state
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          if (child.children) {
            updateChildren(child);
          }
        });
      };
      updateChildren(node);

      // If the node is unchecked, uncheck all its children
      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const allChildrenChecked = node.children?.every((child) =>
          verifyChecked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      checkBoxesData.forEach((node) => {
        if (node.children) {
          verifyChecked(node);
        }
      });

      return newState;
    });
  };

  return (
    <div>
      {data.map((node) => (
        <div key={node.id} className="checkbox-container">
          <input
            type="checkbox"
            id="parent"
            checked={checked[node.id] || false}
            onChange={(e) => handleCheckboxChange(e.target.checked, node)}
          />
          <span className="checkbox-label">{node.name}</span>
          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
