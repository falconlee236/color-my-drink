import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface VotingState {
  voting: string;
}

const initialVoting: VotingState = { voting: "" };

export const votingSlice = createSlice({
  name: "voting",
  initialState: initialVoting,
  reducers: {
    updateVoting: (state, action: PayloadAction<string>) => {
      state.voting = action.payload;
    },
  },
});

export const valueVoting = (state: RootState) => state.voting;
export const { updateVoting } = votingSlice.actions;
export default votingSlice.reducer;
