import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CupState {
  cup: string;
}

const initialCup: CupState = { cup: "" };

export const cupSlice = createSlice({
  name: "cup",
  initialState: initialCup,
  reducers: {
    updateCup: (state, action: PayloadAction<string>) => {
      state.cup = action.payload;
    },
  },
});

export const selectCup = (state: RootState) => state.cup;
export const { updateCup } = cupSlice.actions;
export default cupSlice.reducer;
