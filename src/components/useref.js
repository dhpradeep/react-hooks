import React, { useRef } from "react";

const UserefHook = () => {
  const inputRef = useRef(null);

  const onClick = (e) => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Pradip</h1>
      <input type="text" placeholder="example..." ref={inputRef} />
      <button onClick={onClick}>Focus input</button>
    </div>
  );
};
export default UserefHook;
