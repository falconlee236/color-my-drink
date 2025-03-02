import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface LetterSenderState {
  letterSender: string;
}

const initialLetterSender: LetterSenderState = { letterSender: "" };

export const letterSenderSlice = createSlice({
  name: "letterSender",
  initialState: initialLetterSender,
  reducers: {
    updateLetterSender: (state, action: PayloadAction<string>) => {
      state.letterSender = action.payload;
    },
  },
});

export const { updateLetterSender } = letterSenderSlice.actions;
export const selectLetterSender = (state: RootState) => state.letterSender;
export default letterSenderSlice.reducer;
