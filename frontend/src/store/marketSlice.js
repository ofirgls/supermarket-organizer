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
    },
});

export const { addProduct } = marketSlice.actions;
export default marketSlice.reducer;