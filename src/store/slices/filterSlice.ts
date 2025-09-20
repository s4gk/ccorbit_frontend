// store/filtersSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  search: string;
  category: string;
  priceRange: [number, number];
}

const initialState: FiltersState = {
  search: "",
  category: "",
  priceRange: [0, 100000],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setSearch, setCategory, setPriceRange, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
