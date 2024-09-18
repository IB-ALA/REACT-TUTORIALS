import { useState } from "react";
import "./App.css";
import ClassBasedComponents from "./components/1-class-based-components";
import FunctionalComponent from "./components/2-functional-component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React JS Concepts 2024</h1>
      <ClassBasedComponents />
      <FunctionalComponent />
    </div>
  );
}

export default App;
