const Comment = ({ data }) => {
  return (
    <div className="flex">
      {data.map((comment, index) => (
        <div className="p-2 pl-10 border-l-2 border-black" key={index}>
          <div className="flex">
            <div>
              <img
                className="w-16 p-2 rounded-full"
                src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
                alt="user"
              />
            </div>
            <div>
              <p className="font-bold px-2 py-4">{comment.username}</p>
              <p className="px-2">{comment.comment}</p>
            </div>
          </div>
          <div>{comment?.replies && <Comment data={comment.replies} />}</div>
        </div>
      ))}
    </div>
  );
};
export default Comment;
