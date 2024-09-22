import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

function TodoDetails({
  openDialog,
  setOpenDialog,
  todoDetails,
  setTodoDetails,
}) {
  const { name, productId, price, image } = todoDetails;

  // add more dialog details content (image, price, etc)
  return (
    <>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{name}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setTodoDetails({});
              setOpenDialog(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TodoDetails;
