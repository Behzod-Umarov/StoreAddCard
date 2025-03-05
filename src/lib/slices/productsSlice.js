import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: null,
	isLoading: false,
	error: null,
	wishlist: [],
	cart: [],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setWishlist: (state, action) => {
			state.wishlist = action.payload;
		},
		addWishlist: (state, action) => {
			state.wishlist = [...state.wishlist, action.payload];
		},
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		removeWishlist: (state, action) => {
			state.wishlist = state.wishlist.filter(w => w.id != action.payload);
		},
		addCart: (state, action) => {
			state.cart = [...state.cart, action.payload];
		},
		setCart: (state, action) => {
			state.cart = action.payload;
		},
		removeCart: (state, action) => {
			state.cart = [...state.cart.filter(item => item.id !== action.payload)];
		},
	},
});

export const { setProducts,	setWishlist,removeWishlist,	setError,setIsLoading, addWishlist, addCart ,setCart, removeCart} = productsSlice.actions;
export default productsSlice.reducer;