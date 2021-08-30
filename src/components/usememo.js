import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";

const UsememoHook = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLargestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("COMPUTED!!");
    return longestName;
  };

  const getLongestName = useMemo(() => findLargestName(data), [data]);

  return (
    <div>
      <div>{getLongestName}</div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <span>Toggle</span>}
    </div>
  );
};

export default UsememoHook;
