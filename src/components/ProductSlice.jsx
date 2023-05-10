import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log('action', action);
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            const index = state.products.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                state.products.splice(index, 1);
            }
        }
    }
});

export const { addProduct, removeProduct } = productSlice.actions;

export const selectProduct = (state) => state.product;

export default productSlice.reducer;