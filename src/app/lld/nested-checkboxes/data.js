export const checkBoxesData = [
  {
    id: 1,
    name: "Parent 1",
    children: [
      { id: 11, name: "Child 1.1" },
      { id: 12, name: "Child 1.2" },
      {
        id: 13,
        name: "Child 1.3",
        children: [
          { id: 131, name: "Grandchild 1.3.1" },
          { id: 132, name: "Grandchild 1.3.2" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Parent 2",
    children: [
      { id: 21, name: "Child 2.1" },
      { id: 22, name: "Child 2.2" },
      {
        id: 23,
        name: "Child 2.3",
        children: [
          { id: 231, name: "Grandchild 2.3.1" },
          { id: 232, name: "Grandchild 2.3.2" },
        ],
      },
    ],
  },
];
