"use client";
import { useState } from "react";
import json from "./data.json";
import "./style.css";
import List from "./List";

const FileExplorer = () => {
  const [data, setData] = useState(json);

  console.log("data", data);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter Name");

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now().toString(),
                name: name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };
    setData((prev) => updateTree(prev));
  };

  const deleteNodeToList = (parentId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== parentId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };

    setData((prev) => updateTree(prev));
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>File/Folder Explorer</h1>
      <div
        style={{ border: "1px solid black", padding: "40px", margin: "20px" }}
      >
        <List
          list={data}
          addNodeToList={addNodeToList}
          deleteNodeToList={deleteNodeToList}
        />
      </div>
    </div>
  );
};
export default FileExplorer;
