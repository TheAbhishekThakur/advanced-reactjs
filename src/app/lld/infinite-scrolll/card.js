const Card = ({ data, key }) => {
  const { url, title, author } = data;
  return (
    <div key={key} style={{ border: "1px solid black", borderRadius: "5px" }}>
      <img src={url} alt="meme" />
      <p>{title}</p>
      <p>{author}</p>
    </div>
  );
};
export default Card;
