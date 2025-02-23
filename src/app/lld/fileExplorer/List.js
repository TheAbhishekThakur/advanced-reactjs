"use client";
import { useState } from "react";

const List = ({ list, addNodeToList, deleteNodeToList }) => {
  const [isOpen, setIsOpen] = useState({});
  return (
    <div style={{ display: "flex", justifyContent: "left" }}>
      <div className="container">
        {list &&
          list.map((node, index) => (
            <div key={index}>
              <div className="icon">
                {node.isFolder && (
                  <span
                    onClick={() =>
                      setIsOpen((prev) => ({
                        ...prev,
                        [node.name]: !prev[node.name],
                      }))
                    }
                  >
                    {isOpen[node.name] ? "-" : "+"}
                  </span>
                )}
                <span>{node.name}</span>
                {node.isFolder && (
                  <span onClick={() => addNodeToList(node.id)}>📁</span>
                )}
                <span onClick={() => deleteNodeToList(node.id)}>🗑️</span>
              </div>
              {node.isFolder && isOpen[node.name] && (
                <List
                  list={node.children}
                  addNodeToList={addNodeToList}
                  deleteNodeToList={deleteNodeToList}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
