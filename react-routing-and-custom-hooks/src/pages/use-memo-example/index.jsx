//

import { useMemo, useState } from "react";
import useFecth from "../../hooks/use-fetch";

function UseMemoExample() {
  const { data, loading } = useFecth("http://localhost:5000/dea/products");

  const [flag, setFlag] = useState(false);

  function filterProductsByPrice(products) {
    console.log("this function is get rendered");

    return products?.length > 0
      ? products.filter((product) => product.price_in_pesewas / 100 > 10)
      : [];
  }

  // toggling the flag was calling the filterProductsByPrice
  // again on every toggle so we memorize it and only call the
  // filterProductsByPrice when the data>.data change (dependency)
  const memorizedVersion = useMemo(
    () => filterProductsByPrice(data?.data),
    [data?.data]
  );

  if (loading) return <h2>Loading data! Please wait</h2>;

  console.log(data);

  return (
    <div>
      <h2 style={{ color: flag ? "red" : "black" }}>Use Memo</h2>

      <button onClick={() => setFlag(!flag)}>Toggle flag</button>

      <ul>
        {memorizedVersion.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemoExample;
