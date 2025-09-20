import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const selectProducts = (state: RootState) => state.products.items;
export const selectFilters = (state: RootState) => state.filters;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => {
    return products.filter((product) => {
      const matchesSearch = filters.search
        ? product.name.toLowerCase().includes(filters.search.toLowerCase())
        : true;

      const matchesCategory = filters.category
        ? product.category === filters.category
        : true;

      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }
);
