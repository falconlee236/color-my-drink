import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface SizeState {
  size: string;
}

const initialSize: SizeState = { size: "" };

export const sizeSlice = createSlice({
  name: "size",
  initialState: initialSize,
  reducers: {
    updateSize: (state, action: PayloadAction<string>) => {
      state.size = action.payload;
    },
  },
});

export const selectSize = (state: RootState) => state.size;
export const { updateSize } = sizeSlice.actions;
export default sizeSlice.reducer;
