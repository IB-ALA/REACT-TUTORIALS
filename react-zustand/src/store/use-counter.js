import { create } from "zustand";

// create a hook
// return the state

const useCounter = create((set) => {
  return {
    count: 0,
    listOfProducts: [],
    actions: {
      handleIncrementCounter: () =>
        set((state) => ({
          count: state.count + 1,
        })),

      fetchListOfProducts: async () => {
        const apiResponse = await fetch("http://localhost:5000/dea/products");
        const result = await apiResponse.json();
        set({
          listOfProducts: result?.data,
        });
      },
    },
  };
});

export const useActions = () => useCounter((state) => state.actions);

export default useCounter;
