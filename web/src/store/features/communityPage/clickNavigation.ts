import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface NavigationState {
  navigation: string;
}

const initialNavigation: NavigationState = { navigation: "" };

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: initialNavigation,
  reducers: {
    updateClickNavigation: (state, action: PayloadAction<string>) => {
      state.navigation = action.payload;
    },
  },
});

export const valueNavigation = (state: RootState) => state.navigation;
export const { updateClickNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;
