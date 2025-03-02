import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import Swal from "sweetalert2";

interface IngredientState {
  ingredient: string[];
}

const initialIngredient: IngredientState = { ingredient: [] };

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState: initialIngredient,
  reducers: {
    updateIngredient: (state, action: PayloadAction<string>) => {
      if (state.ingredient?.includes(action.payload)) {
        state.ingredient = state.ingredient.filter(
          (item) => item !== action.payload,
        );
      } else {
        if (state.ingredient.length < 3) {
          state.ingredient.push(action.payload);
        } else {
          Swal.fire({
            text: "재료는 최대 3개까지 선택 가능합니다.",
            icon: "warning",
          });
        }
      }
    },
  },
});

export const selectIngredient = (state: RootState) => state.ingredient;

export const { updateIngredient } = ingredientSlice.actions;

export default ingredientSlice.reducer;
