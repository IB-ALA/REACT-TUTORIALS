import "./App.css";
import ApiCallTest from "./components/api-testing";
import Counter from "./components/counter";
import HelloWorld from "./components/helloWorld";

function App() {
  return (
    <div>
      <h1>React Unit Testing Crash course</h1>
      <HelloWorld />
      <Counter />
      <ApiCallTest />
    </div>
  );
}

export default App;
