//

import CounterValue from "./counter-app/counter-value";
import ManageCounter from "./counter-app/manage-counter";
import Products from "./products";

function App() {
  //

  return (
    <div>
      <h1>React with zuzstand</h1>

      <ManageCounter />
      <CounterValue />

      <Products />
    </div>
  );
}

export default App;
