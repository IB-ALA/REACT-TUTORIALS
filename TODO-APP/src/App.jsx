import { useEffect, useState } from "react";
import "./styles.css";
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch("http://localhost:5000/dea/products");
      const result = await apiResponse.json();

      if (result?.Success && result?.data?.length > 0) {
        setTodoList(result?.data);

        setLoading(false);
      } else {
        setTodoList([]);
        setErrorMsg("");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Some error occurred");
    }
  }

  function getDetailsOfCurrentTodo({
    name,
    product_id,
    price_in_pesewas,
    image,
  }) {
    const details = {
      name,
      productId: product_id,
      price: (price_in_pesewas / 100).toFixed(2),
      image,
    };

    setTodoDetails(details);
    setOpenDialog(true);
  }

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  if (loading)
    return <Skeleton variant="rectangular" width={650} height={650} />;

  return (
    <div className="main-wrapper">
      <h1 className="header-title">Simple Todo APP Using Material UI</h1>
      <div className="todoListWrapper">
        {todoList && todoList.length > 0
          ? todoList.map((todo) => (
              <TodoItem
                todo={todo}
                getDetailsOfCurrentTodo={getDetailsOfCurrentTodo}
              />
            ))
          : null}
      </div>

      <TodoDetails
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        todoDetails={todoDetails}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}

export default App;
// do the error messages
