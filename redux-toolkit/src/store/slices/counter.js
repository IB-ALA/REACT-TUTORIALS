import { createSlice } from "@reduxjs/toolkit";

// create a slice
// give it a name
// pass initial state
// create a reducer with any number of actions
// export the actions

const initialState = {
  countValue: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleIncreaseCounteAction: (state, action) => {
      state.countValue++;
    },
  },
});

export const { handleIncreaseCounteAction } = counterSlice.actions;

export default counterSlice.reducer;
