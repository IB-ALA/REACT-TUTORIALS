import { useTheme } from "../../context";

const ThemeToggleButton = () => {
  const values = useTheme();
  // console.log(values);
  const { toggleTheme } = values;

  return (
    <button data-testid="toggle-btn" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
