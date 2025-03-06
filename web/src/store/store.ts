import { configureStore } from "@reduxjs/toolkit";
import temperatureReducer from "./features/orders/temperatureSlice";
import cupReducer from "./features/orders/cupSlice";
import sizeReducer from "./features/orders/sizeSlice";
import accessReducer from "./features/orders/accessSlice";
import ingredientReducer from "./features/orders/ingredientSlice";
import nameReducer from "./features/orders/nameSlice";
import letterSenderReducer from "./features/orders/letterSenderSlice";
import letterContentReducer from "./features/orders/letterContentSlice";

export const store = configureStore({
  reducer: {
    temperature: temperatureReducer,
    cup: cupReducer,
    size: sizeReducer,
    access: accessReducer,
    ingredient: ingredientReducer,
    name: nameReducer,
    letterSender: letterSenderReducer,
    letterContent: letterContentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
