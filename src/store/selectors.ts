import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export const selectProducts = (state: RootState) => state.products.items;
export const selectFilters = (state: RootState) => state.filters;


export const selectCategories = (state: RootState): string[] => {
  const categories = state.products.items.map(p => p.category);
  return Array.from(new Set(categories));
};

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => {
    return products.filter((p) => {
      const matchesSearch = p.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());

      const matchesCategory = filters.category
        ? p.category === filters.category
        : true;

      const matchesPrice =
        p.price >= filters.priceRange[0] &&
        p.price <= filters.priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }
);
