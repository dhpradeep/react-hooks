import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

const ImprerativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from parent
      </button>
      <br />
      <Button ref={buttonRef} />
    </div>
  );
};

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button>Button from child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default ImprerativeHandle;
