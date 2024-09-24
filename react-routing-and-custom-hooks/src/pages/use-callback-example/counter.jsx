import { memo } from "react";

function Counter({ countValue, onClick }) {
  //

  console.log("this is getting rendered ", countValue, onClick);
  // it was call all instances when one instance changed to we used
  // useCallback to memoried the  function and then wrapped the component
  // with memo()

  return (
    <div>
      <p>{countValue}</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default memo(Counter);
