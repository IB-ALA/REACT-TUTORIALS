//

import { useCallback, useState } from "react";
import Counter from "./counter";

function UseCallbackExample() {
  //

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const memorizedSetCountOneFunc = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );

  const memorizedSetCountTwoFunc = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );

  // it was call all instances when one instance changed to we used
  // useCallback to memoried the  function and then wrapped the component
  // with memo()

  return (
    <div>
      <h2>Use Callback</h2>
      <Counter countValue={countOne} onClick={memorizedSetCountOneFunc} />

      <Counter countValue={countTwo} onClick={memorizedSetCountTwoFunc} />
    </div>
  );
}

export default UseCallbackExample;
