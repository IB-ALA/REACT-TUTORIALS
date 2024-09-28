import { useDispatch } from "react-redux";
import { handleIncreaseCounteAction } from "../store/slices/counter";

function CounterButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(handleIncreaseCounteAction({ id: 1, name: "Ib" }));
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }}
    >
      Increase Count
    </button>
  );
}

export default CounterButton;
