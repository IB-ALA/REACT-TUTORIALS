//

import { createContext, useState } from "react";

// create the context
export const GlobalContext = createContext(null);

// create the global state that receives a component as a child
function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");

  function handleChangeThemeOnButtonClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    // we can as well pass the setTheme and do the logic at the import location
    <GlobalContext.Provider value={{ theme, handleChangeThemeOnButtonClick }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
