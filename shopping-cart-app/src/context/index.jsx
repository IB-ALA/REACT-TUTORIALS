import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// create the context
// provide the state to the context
// wrap context in root component
// consume the context use useContext

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  async function fetchListOfProducts() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/products");
      const result = await apiResponse.json();
      // console.log(result);

      if (result && result?.products) {
        setListOfProducts(result?.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      // console.log("loading set to false", loading);
    }
  }

  function handleAddTocart(product) {
    let copyExistingCartItems = [...cartItems];
    const findIndexOfCurrProduct = copyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    if (findIndexOfCurrProduct === -1) {
      copyExistingCartItems.push({
        ...product,
        quantity: 1,
        totalPrice: product?.price,
      });
    } else {
      // fill for available items
      copyExistingCartItems[findIndexOfCurrProduct] = {
        ...copyExistingCartItems[findIndexOfCurrProduct],
        quantity: copyExistingCartItems[findIndexOfCurrProduct].quantity + 1,
        totalPrice:
          (copyExistingCartItems[findIndexOfCurrProduct].quantity + 1) *
          copyExistingCartItems[findIndexOfCurrProduct].price,
      };
    }

    setCartItems(copyExistingCartItems);
    saveCartItems(copyExistingCartItems);

    navigate("/cart");
  }

  function handleRemoveFromcart(item, remove) {
    let copyExistingCartItems = [...cartItems];
    const findIndexOfCurrProduct = copyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (remove) {
      copyExistingCartItems.splice(findIndexOfCurrProduct, 1);
    } else {
      // update quantity
      copyExistingCartItems[findIndexOfCurrProduct] = {
        ...copyExistingCartItems[findIndexOfCurrProduct],
        quantity: copyExistingCartItems[findIndexOfCurrProduct].quantity - 1,
        totalPrice:
          (copyExistingCartItems[findIndexOfCurrProduct].quantity - 1) *
          copyExistingCartItems[findIndexOfCurrProduct].price,
      };
    }

    setCartItems(copyExistingCartItems);
    saveCartItems(copyExistingCartItems);
  }

  console.log(cartItems);

  function saveCartItems(cartItemsToSave) {
    localStorage.setItem("cartItems", JSON.stringify(cartItemsToSave));
  }
  function loadCartItems() {
    return JSON.parse(localStorage.getItem("cartItems"));
  }

  useEffect(() => {
    fetchListOfProducts();
    setCartItems(loadCartItems() || []);
  }, []);

  // console.log(listOfProducts);

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        cartItems,
        setCartItems,
        handleAddTocart,
        handleRemoveFromcart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
