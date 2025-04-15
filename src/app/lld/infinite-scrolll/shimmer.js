const Shimmer = () => {
  return Array(15)
    .fill(0)
    .map((n, i) => (
      <div style={{ border: "1px solid black", borderRadius: "5px" }} key={i}>
        <div
          style={{ width: "64px", height: "64px", background: "gray" }}
        ></div>
        <p style={{ width: "64px", background: "gray" }}></p>
        <p style={{ width: "64px", background: "gray" }}></p>
      </div>
    ));
};
export default Shimmer;
