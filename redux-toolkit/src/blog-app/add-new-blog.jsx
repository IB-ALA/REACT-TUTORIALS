import { useDispatch, useSelector } from "react-redux";
import { handleInputChange } from "../store/slices/blogSlice";

function AddNewBlog() {
  const { blog } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(blog);

  const { title, description } = blog?.formData;

  function onChangeInput(e) {
    dispatch(
      handleInputChange({
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <div>
      <form>
        <div>
          <label>Enter Blog Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Blog Title"
            onChange={onChangeInput}
            value={title}
          />
        </div>

        <div>
          <label>Enter Blog Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter Blog Description"
            onChange={onChangeInput}
            value={description}
          />
        </div>

        <button type="submit">Add New Blog</button>
      </form>
    </div>
  );
}

export default AddNewBlog;
