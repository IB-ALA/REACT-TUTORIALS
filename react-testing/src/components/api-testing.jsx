import { useEffect, useState } from "react";

function ApiCallTest() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:5000/dea/products");
      const result = await response.json();
      if (result?.data?.length > 0) {
        setProducts(result?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>List Of Products</h2>
      {isLoading ? (
        <h3>Loadind data...</h3>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.product_id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiCallTest;
