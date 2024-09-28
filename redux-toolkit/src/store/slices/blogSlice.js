import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
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
  },
});

export const { handleInputChange } = blogSlice.actions;

export default blogSlice.reducer;
