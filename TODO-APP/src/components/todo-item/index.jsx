import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function TodoItem({ todo, getDetailsOfCurrentTodo, index }) {
  return (
    <Card
      key={index}
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>
          {todo.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            getDetailsOfCurrentTodo(todo);
          }}
          sx={{
            backgroundColor: "black",
            color: "white",
            opacity: "0.8",
            transition: "all ease-in-out 0.2s",
            "&:hover": {
              opacity: "1",
            },
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoItem;
