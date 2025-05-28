import { createSlice } from "@reduxjs/toolkit";

export interface ElectronicsState {
  value: [];
}

const initialState: ElectronicsState = {
  value: [],
};

export const electronicsSlice = createSlice({
  name: "electronics",
  initialState,
  reducers: {
    createElectronics: (state) => {
      console.log(state);
    },
  },
});

export const {} = electronicsSlice.actions;

export default electronicsSlice.reducer;
