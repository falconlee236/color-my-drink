import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface TemperatureState {
  temperature: string;
}

const initialTemperatureState: TemperatureState = { temperature: "" };

export const temperatureSlice = createSlice({
  name: "temperature",
  initialState: initialTemperatureState,
  reducers: {
    updateTemperature: (state, action: PayloadAction<string>) => {
      state.temperature = action.payload;
    },
  },
});

export const selectTemperature = (state: RootState) => state.temperature;
export const { updateTemperature } = temperatureSlice.actions;
export default temperatureSlice.reducer;
