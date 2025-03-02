import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface AccessState {
  access: string;
}
const initialAccess: AccessState = {
  access: "",
};

export const accessSlice = createSlice({
  name: "access",
  initialState: initialAccess,
  reducers: {
    updateAccess: (state, action: PayloadAction<string>) => {
      state.access = action.payload;
    },
  },
});

export const selectAccess = (state: RootState) => state.access;

export const { updateAccess } = accessSlice.actions;
export default accessSlice.reducer;
