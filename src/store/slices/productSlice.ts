import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
import { initialProducts } from "@/lib/mockData";


interface ProductState {
  items: Product[];
  filter: string | null;
}

const initialState: ProductState = {
  items: initialProducts,
  filter: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
    setFilter(state, action: PayloadAction<string | null>) {
      state.filter = action.payload;
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const idx = state.items.findIndex(p => p.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
    }
  }
});

export const { addProduct, removeProduct, setFilter, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
