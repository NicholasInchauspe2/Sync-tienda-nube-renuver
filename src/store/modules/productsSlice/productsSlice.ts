import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import type { ProductsState, IOrder, IProduct } from '@/types/slices';
import ProducstMoack from './productsMoack.json';

const initialState: ProductsState = {
	order: {
		key: 1,
		options: [
			{ id: 1, label: 'Más baratos', amount: 150000 },
			{ id: 2, label: 'Recomendados', amount: 150000 },
		],
	},
	products: [],
	isLoading: false,
};

export const ProductsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setOrder: (state, action: PayloadAction<number>) => {
			state.order.key = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const { setOrder } = ProductsSlice.actions;

export const selectOrder = (state: RootState): IOrder => state.products.order;

export const selectProducts = (state: RootState): IProduct[] => state.products.products;

export const selectLoading = (state: RootState): boolean => state.products.isLoading;

const fetchMoak = async (): Promise<IProduct[]> => {
	return await new Promise((resolve) => setTimeout(() => resolve(ProducstMoack), 2500));
};

export const fetchProducts = createAsyncThunk('counter/fetchProducts', async () => {
	const response = await fetchMoak();
	return response;
});

export default ProductsSlice.reducer;
