import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  marketList: [],
};

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.marketList = [...state.marketList, action.payload];
    },
    changeColor: (state, action) => {
      const { productId, color } = action.payload;
      const productIndex = state.marketList.findIndex(product => product.id === productId);
      if (productIndex !== -1) {
        state.marketList[productIndex].color = color;
      }
    },
    removeProduct: (state, action) => {
      state.marketList = state.marketList.filter(product => product.id !== action.payload);
    }
  },
});

export const { addProduct, changeColor, removeProduct } = marketSlice.actions;
export default marketSlice.reducer;
