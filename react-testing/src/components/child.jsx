import { useState } from "react";

function Child({ count }) {
  const [theme, setTheme] = useState(false);

  function handleToggleTheme() {
    setTheme(!theme);
  }

  return (
    <div>
      <p data-testid="child-count-value">{count}</p>
      <button onClick={handleToggleTheme} data-testid="toggle-button">
        Toggle theme
      </button>
      <h1 data-testid="toggle-text">{theme ? "true" : "false"}</h1>
    </div>
  );
}

export default Child;
