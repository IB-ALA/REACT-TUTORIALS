import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteBlog,
  handleEditBlog,
  setBlogListOnInitialLoad,
} from "../store/slices/blogSlice";
//

function BlogList() {
  const { blog } = useSelector((state) => state);
  const { blogList } = blog;
  // console.log(blogList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBlogListOnInitialLoad({
        blogList: JSON.parse(localStorage.getItem("blogList")) || [],
      })
    );
  }, []);

  function handleDelete(blog) {
    dispatch(handleDeleteBlog({ blog }));
  }

  function handleEdit(blog) {
    dispatch(handleEditBlog({ blog }));
  }

  return (
    <ul>
      {blogList?.length > 0 ? (
        blogList.map((blog) => (
          <div
            style={{
              border: "1px solid red",
              padding: "10px",
              marginBottom: "10px",
            }}
            key={blog?.id}
          >
            <h3>{blog?.title}</h3>
            <h4>{blog?.description}</h4>

            <button
              style={{ marginRight: "10px" }}
              onClick={() => handleEdit(blog)}
            >
              Edit Blog
            </button>
            <button onClick={() => handleDelete(blog)}>Delete Blog</button>
          </div>
        ))
      ) : (
        <h2>No Blog added! Please add one.</h2>
      )}
    </ul>
  );
}

export default BlogList;
