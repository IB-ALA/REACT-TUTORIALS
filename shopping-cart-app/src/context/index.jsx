import { createContext, useEffect, useState } from "react";

// create the context
// provide the state to the context
// wrap context in root component
// consume the context use useContext

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [listOfProducts, setListOfProducts] = useState([]);

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const apiResponse = await fetch("https://dummyjson.com/products");
      const result = await apiResponse.json();
      console.log(result);

      if (result && result?.products) {
        setListOfProducts(result?.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      console.log("loading set to false", loading);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  // console.log(listOfProducts);

  return (
    <ShoppingCartContext.Provider value={{ listOfProducts, loading }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
