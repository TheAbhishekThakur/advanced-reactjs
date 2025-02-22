"use client";
import "./style.css";

const Card = ({ data }) => {
  return (
    <div className="card-item">
      <img src={data.images[0]} className="thumbnail" />
      <p>{data.title}</p>
      <p>{data.price}</p>
    </div>
  );
};

export default Card;
