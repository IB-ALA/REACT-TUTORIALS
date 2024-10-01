import "./App.css";
import ApiCallTest from "./components/api-testing";
import ThemeToggleButton from "./components/context-testing/button";
import ThemeContent from "./components/context-testing/theme";
import Counter from "./components/counter";
import HelloWorld from "./components/helloWorld";

function App() {
  return (
    <div>
      <h1>React Unit Testing Crash course</h1>
      <HelloWorld />
      <Counter />
      <ApiCallTest />

      <ThemeToggleButton />
      <ThemeContent />
    </div>
  );
}

export default App;
