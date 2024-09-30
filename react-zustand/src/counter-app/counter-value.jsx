import useCounter from "../store/use-counter";

function CounterValue() {
  // const stateValue = useCounter((state) => state);
  // console.log(stateValue);
  const count = useCounter((state) => state.count);
  console.log(count);

  return <div>Counter value is {count}</div>;
}

export default CounterValue;
