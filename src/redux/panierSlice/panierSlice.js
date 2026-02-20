import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

/*

panier : [
  {
    productId:2,
    quantity:3
  }
]
*/

// pour state dans reducer a la même structure que le initial state
const panierSlice = createSlice({
  name: "panier",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      console.log(action);
      const id = action.payload.productId;
      const title = action.payload.title;
      const panierIndex = state.products.findIndex(
        (element) => element.productId === id,
      );

      if (panierIndex !== -1) {
        // trouver l'index pour le mettre a jour
        state.products[panierIndex] = {
          ...state.products[panierIndex],
          quantity: state.products[panierIndex].quantity + 1,
        };
      } else {
        state.products.push({
          productId: id,
          quantity: 1,
          title: title,
        });
      }
    },
    //removeItem
    //deletePanier
  },
});

export const { addItem } = panierSlice.actions;
export default panierSlice.reducer;
