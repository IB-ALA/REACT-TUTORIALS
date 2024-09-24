//

import { useEffect, useRef } from "react";

function Hooks() {
  const countValue = useRef(0);
  const divElementRef = useRef();
  const inputRefElement = useRef();

  function handleClick() {
    countValue.current++;
    console.log(countValue.current);
  }

  useEffect(() => {
    const getDivReference = divElementRef.current;
    getDivReference.style.color = "red";

    setTimeout(() => {
      getDivReference.style.color = "green";

      setTimeout(() => {
        getDivReference.style.color = "blue";
      }, 1000);
    }, 2000);
    console.log(getDivReference);

    inputRefElement.current.focus();
  }, []);

  return (
    <div>
      <h2>Use ref, use callback and use memo hook</h2>
      <button onClick={handleClick}>Click me</button>

      <div ref={divElementRef}>Some random text</div>
      <input
        ref={inputRefElement}
        name="name"
        placeholder="Enter your name"
        type="text"
      />
    </div>
  );
}

export default Hooks;
