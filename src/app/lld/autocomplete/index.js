"use client";
import { useEffect, useState } from "react";
import "./style.css";

const AutoComplete = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [isListShow, setIsListShow] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = () => {
    if (value) {
      if (cache[value]) {
        console.log("cache", cache);

        setList(cache[value]);
        return;
      }
      fetch(`https://dummyjson.com/users/search?q=${value}`)
        .then((res) => res.json())
        .then((data) => {
          setList(data.users);
          setCache({ ...cache, [value]: data.users });
        });
    } else {
      setList([]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <div style={{ margin: "auto", width: "50%" }}>
      <h1>Auto Complete Search Bar</h1>
      <input
        type="text"
        id="search"
        value={value}
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search.."
        onFocus={() => setIsListShow(true)}
        onBlur={() => setIsListShow(false)}
      />

      {isListShow && list?.length ? (
        <ul className="list-container">
          {list.map((user) => (
            <li className="list-item" key={user.username}>
              {user.username}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default AutoComplete;
