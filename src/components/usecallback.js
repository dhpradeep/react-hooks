import React, { useCallback, useEffect, useState } from "react";

const UsecallbackHook = () => {
  const [toggle, setToggle] = useState(false);
  const [data] = useState("Hi, there");

  const returnComment = useCallback(
    (name) => {
      return `${data}, ${name}`;
    },
    [data]
  );

  return (
    <div>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <span>Toggle</span>}
    </div>
  );
};

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("Function was called!");
  }, [returnComment]);

  return <div>{returnComment("Pradip")}</div>;
};

export default UsecallbackHook;
