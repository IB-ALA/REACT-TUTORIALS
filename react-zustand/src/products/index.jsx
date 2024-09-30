import { useEffect } from "react";
import useCounter, { useActions } from "../store/use-counter";

function Products() {
  const { fetchListOfProducts } = useActions();
  const productList = useCounter((state) => state.listOfProducts);

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  console.log(productList);

  return (
    <div>
      <h1>list of products</h1>
      <ul>
        {productList?.length > 0 ? (
          productList.map((product) => (
            <li key={product.product_id}>{product.name}</li>
          ))
        ) : (
          <h4>no products available</h4>
        )}
      </ul>
    </div>
  );
}

export default Products;
