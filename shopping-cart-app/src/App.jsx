import { useRoutes } from "react-router-dom";
import ProductListPage from "./pages/productList";
import CartListPage from "./pages/cart";
import ProductDetailsPage from "./pages/porductDetails";
import NotFoundPage from "./pages/not-found";
import HomePage from "./pages/home";

function AppRoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products",
      element: <ProductListPage />,
    },
    {
      path: "/cart",
      element: <CartListPage />,
    },
    {
      path: "/product-details/:id",
      element: <ProductDetailsPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return element;
}

function App() {
  return (
    <div>
      {/* <Routes> */}
      {/* <Route path={"/"} element={<HomePage />} /> */}
      {/* <Route path={"/products"} element={<ProductListPage />} /> */}
      {/* <Route path={"/cart"} element={<CartListPage />} /> */}
      {/* <Route path={"/product-details/:id"} element={<ProductDetailsPage />} /> */}
      {/* <Route path={"*"} element={<NotFoundPage />} /> */}
      {/* </Routes> */}
      <AppRoutes />
    </div>
  );
}

export default App;
