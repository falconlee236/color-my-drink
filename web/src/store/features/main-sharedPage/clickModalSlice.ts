import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface clickModalState {
  clickModal: boolean;
}

const initialClickModal: clickModalState = { clickModal: false };

export const clickModalSlice = createSlice({
  name: "clickModal",
  initialState: initialClickModal,
  reducers: {
    updateClickModal: (state, action: PayloadAction<boolean>) => {
      state.clickModal = action.payload;
    },
  },
});

export const valueClickModal = (state: RootState) => state.clickModal;
export const { updateClickModal } = clickModalSlice.actions;
export default clickModalSlice.reducer;
