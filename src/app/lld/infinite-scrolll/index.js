import { useEffect, useState } from "react";
import Card from "./card";
import Shimmer from "./shimmer";

const App = () => {
  const [memes, setMemes] = useState([]);
  const [isShimmer, setIsShimmer] = useState(false);

  const fecthMemes = async () => {
    setIsShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setIsShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fecthMemes();
    }
  };

  useEffect(() => {
    fecthMemes();
    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {isShimmer && <Shimmer />}
      {memes &&
        memes.map((meme, i) => (
          <div key={i}>
            <Card key={i} data={meme} />
          </div>
        ))}
    </div>
  );
};

export default App;
