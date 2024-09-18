import { useState } from "react";
import "./App.css";
import ClassBasedComponents from "./components/class-based-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React JS Concepts 2024</h1>
      <ClassBasedComponents />
    </div>
  );
}

export default App;
