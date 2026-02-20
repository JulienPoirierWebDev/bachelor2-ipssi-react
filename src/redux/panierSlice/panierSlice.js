import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  panier: [],
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
      const panierIndex = state.panier.findIndex(
        (element) => element.productId === id,
      );

      if (panierIndex !== -1) {
        // trouver l'index pour le mettre a jour
        state.panier[panierIndex] = {
          ...state.panier[panierIndex],
          quantity: state.panier[panierIndex].quantity + 1,
        };
      } else {
        state.panier.push({
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
