import { useActions } from "../store/use-counter";

function ManageCounter() {
  const { handleIncrementCounter } = useActions();

  return (
    <button
      onClick={handleIncrementCounter}
      style={{
        marginBottom: "20px",
        backgroundColor: "black",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      Manage counter
    </button>
  );
}

export default ManageCounter;
