import "./App.css";
import ClassBasedComponents from "./components/1-class-based-components";
import FunctionalComponent from "./components/2-functional-component";
import ProductList from "./components/products";

const dummyProductData = ["Product 1", "Product 2", "Product 3"];

function App() {
  return (
    <div>
      <h1>React JS Concepts 2024</h1>
      {/* <ClassBasedComponents />
      <FunctionalComponent /> */}

      <ProductList
        listOfProducts={dummyProductData}
        name="IBALA"
        city="Accra"
      />
    </div>
  );
}

export default App;
