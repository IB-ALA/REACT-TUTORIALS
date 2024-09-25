import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, fetchListOfProducts } from "./api";
import { useState } from "react";

function ReactQuerydemo() {
  const [productTitle, setProductTitle] = useState("");
  const getQueryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["productList"],
    queryFn: () => fetchListOfProducts(),
    //can take onError
    onError: (error) => {
      console.log("Error fetching products: ", error);
    },
  });
  console.log(query); // query has a lot of properties and methods
  const { data: productList, isLoading } = query; // we could've distructured directly fron the call of useQuery

  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries(["productList"]);
    },
    //can take onError
    onError: (error) => {
      console.log("Error adding product: ", error);
    },
  });

  async function handleAddNewProduct() {
    await handleAddNewProductMutation(productTitle);
    setProductTitle("");
  }

  if (isLoading) return <h2>Loading products! Please wait</h2>;

  return (
    <div>
      <h2>React Query Demo</h2>

      <div>
        <input
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter product title"
        />
        <button
          onClick={handleAddNewProduct}
          disabled={productTitle.trim() === ""}
          type="button"
        >
          Add New Product
        </button>
      </div>

      <ul>
        {productList?.length > 0 ? (
          productList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <h3>No product found</h3>
        )}
      </ul>
    </div>
  );
}

export default ReactQuerydemo;
