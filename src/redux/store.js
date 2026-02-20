import { configureStore } from "@reduxjs/toolkit";
import panierSliceReducer from "./panierSlice/panierSlice";


const store = configureStore({
  reducer: {
    panier: panierSliceReducer,
  },
});

export { store };
