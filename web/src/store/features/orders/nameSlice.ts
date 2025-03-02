import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface NameState {
  name: string;
}

const initialName: NameState = { name: "" };

export const nameSlice = createSlice({
  name: "name",
  initialState: initialName,
  reducers: {
    updateAiName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { updateAiName, updateUserName } = nameSlice.actions;
export const selectName = (state: RootState) => state.name;
export default nameSlice.reducer;
