import { useSelector } from "react-redux";

function CounterValue() {
  const state = useSelector((state) => state);
  console.log(state);

  const { countValue } = state;

  return <p>Countter value is {countValue}</p>;
}

export default CounterValue;
