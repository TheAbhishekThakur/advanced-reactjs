"use client";
import { useState, useEffect, useMemo } from "react";
import { Virtuoso } from "react-virtuoso";

// This component renders a large list of users with random sizes using the Virtuoso library.
// It demonstrates efficient rendering of large lists in React by only rendering items that are currently visible in the viewport.
// The list is initialized with 100,000 users, each having a random height and a description.

// Reference: https://virtuoso.dev/
// Note: Ensure you have the 'react-virtuoso' package installed in your project.
// Installation: npm install react-virtuoso
// Usage: Import and use the RenderLargeLists component in your application.

const RenderLargeLists = () => {
  const [data, setData] = useState([]);

  const users = useMemo(() => {
    return Array.from({ length: 100000 }, (_, index) => ({
      name: `User ${index}`,
      // random-sized items
      size: Math.floor(Math.random() * 40) + 70,
      description: `Description for user ${index}`,
    }));
  }, []);

  useEffect(() => {
    setData(users);
  }, [users]);

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border p-4 m-14">
      <Virtuoso
        style={{ height: "60vh", width: "100%" }}
        data={data}
        itemContent={(_, user) => (
          <div
            style={{
              padding: "0.5rem",
              height: `${user.size}px`,
              borderBottom: `1px solid var(--border)`,
            }}
          >
            <p>
              <strong>{user.name}</strong>
            </p>
            <div>{user.description}</div>
          </div>
        )}
      />
    </div>
  );
};

export default RenderLargeLists;
