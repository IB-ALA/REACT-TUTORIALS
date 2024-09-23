import "./App.css";
import ClassBasedComponents from "./components/1-class-based-components";
import UseReducerExample from "./components/14-use-reducer-example";
import FunctionalComponent from "./components/2-functional-component";
import ContextButtonComponent from "./components/context-concept/button";
import ContextTextComponent from "./components/context-concept/text";
import FormComponent from "./components/form";
import ProductList from "./components/products";
import Users from "./components/users";

const dummyProductData = ["Product 1", "Product 2", "Product 3"];

function App() {
  return (
    <div>
      <h1>React JS Concepts 2024</h1>
      {/* <ClassBasedComponents /> */}
      {/* <FunctionalComponent /> */}

      {/* <ProductList
        listOfProducts={dummyProductData}
        name="IBALA"
        city="Accra"
      /> */}

      {/* <Users /> */}

      {/* 13 useContext */}
      {/* <ContextButtonComponent />
      <ContextTextComponent /> */}

      {/* 14 - useReducer */}
      {/* <UseReducerExample /> */}

      <FormComponent />
    </div>
  );
}

export default App;
