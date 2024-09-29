import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
  editBlogID: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      // console.log(action);

      let formDataCopy = { ...state.formData };
      formDataCopy = {
        ...formDataCopy,
        ...action.payload,
      };

      state.formData = formDataCopy;

      // console.log(formDataCopy);
    },
    handleAddBlog: (state, action) => {
      // console.log(state, action);

      if (state.editBlogID) {
        let blogsCopy = [...state.blogList];

        let blogToEditIndex = blogsCopy.findIndex(
          (blog) => blog.id === state.editBlogID
        );

        blogsCopy[blogToEditIndex] = {
          ...blogsCopy[blogToEditIndex],
          ...state.formData,
        };

        state.blogList = blogsCopy;
        state.editBlogID = null;
      } else {
        state.blogList.push({
          id: nanoid(),
          ...state.formData,
        });
      }

      state.formData = {
        title: "",
        description: "",
      };

      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },

    setBlogListOnInitialLoad: (state, action) => {
      state.blogList = action.payload.blogList;
    },

    handleDeleteBlog: (state, action) => {
      const blogToDelete = action.payload.blog;
      console.log(blogToDelete);

      let blogsCopy = [...state.blogList];

      blogsCopy = blogsCopy.filter((blog) => blog.id !== blogToDelete.id);

      state.blogList = blogsCopy;
      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },

    handleEditBlog: (state, action) => {
      // console.log(action.payload);
      const { blog } = action.payload;
      state.editBlogID = blog.id;

      state.formData = { title: blog.title, description: blog.description };
    },
  },
});

export const {
  handleInputChange,
  handleAddBlog,
  setBlogListOnInitialLoad,
  handleDeleteBlog,
  handleEditBlog,
} = blogSlice.actions;

export default blogSlice.reducer;
