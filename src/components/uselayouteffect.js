import React, { useLayoutEffect, useEffect, useRef } from "react";

const LayouteffectHook = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log("useLayoutEffect:", inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Else";
  }, []);

  return (
    <div>
      <h1>Hi</h1>
      <h1>Hi 2</h1>{" "}
      <input
        type="text"
        defaultValue="first"
        placeholder="example..."
        ref={inputRef}
      />
    </div>
  );
};

export default LayouteffectHook;
