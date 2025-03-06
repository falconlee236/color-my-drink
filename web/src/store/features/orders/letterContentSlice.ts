import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface LetterContentState {
  letterContent: string;
}

const initialLetterContent: LetterContentState = { letterContent: "" };

export const letterContentSlice = createSlice({
  name: "letterContent",
  initialState: initialLetterContent,
  reducers: {
    updateLetterContent: (state, action: PayloadAction<string>) => {
      state.letterContent = action.payload;
    },
  },
});

export const { updateLetterContent } = letterContentSlice.actions;
export const selectLetterContent = (state: RootState) => state.letterContent;
export default letterContentSlice.reducer;
