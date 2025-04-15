import Comment from "./comment";

const data = [
  {
    username: "abhishek@123",
    comment: "This is the first item's accordion body.",
    replies: [
      {
        username: "mohan@123",
        comment: "",
        replies: [
          {
            username: "mohan@123",
            comment: "",
            replies: [
              {
                username: "mohan@123",
                comment: "",
                replies: [
                  {
                    username: "mohan@123",
                    comment: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "sachin@123",
    body: "This is the first item's accordion body.",
    replies: [
      {
        username: "mohan@123",
        comment: "",
        replies: [
          {
            username: "mohan@123",
            comment: "",
          },
        ],
      },
    ],
  },
  {
    username: "kunal@123",
    body: "This is the first item's accordion body.",
    replies: [
      {
        username: "mohan@123",
        comment: "",
      },
    ],
  },
];

const App = () => {
  return (
    <div className="w-[50%] m-auto mt-5">
      <Comment data={data} />
    </div>
  );
};

export default App;
