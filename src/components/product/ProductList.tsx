'use client';
import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { useAppSelector } from '@/hooks';

export default function ProductList() {
  const items = useAppSelector((state) => state.products.items);
  const { search, category, priceRange } = useAppSelector((state) => state.filters);

    // Filtrado
  const filtered = items.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? p.category === category : true;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <Grid container spacing={2}>
      {filtered.map(p => (
        <Grid size={{ xs: 6, md: 6, lg: 4, xl: 3 }} component="div" key={p.id}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
}
