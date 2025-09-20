'use client';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { useAppSelector } from '@/hooks';
import { selectFilteredProducts } from '@/store/selectors';
import ProductEditModal from './ProductEditModal';
import { Product } from '@/types/product';

export default function ProductList() {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const items = useAppSelector((state) => state.products.items);
  const { search, category, priceRange } = useAppSelector((state) => state.filters);

  // Filtrado
  const filtered = items.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? p.category === category : true;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const products = useAppSelector(selectFilteredProducts);
  function dispatch(arg0: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>

    <Grid container spacing={2}>
      {filtered.map(p => (
        <Grid size={{ xs: 6, md: 6, lg: 4, xl: 3 }} component="div" key={p.id}>
          <ProductCard product={p} onEdit={(p) => setEditingProduct(p)}/>
        </Grid>
      ))}
    </Grid>
    {editingProduct && (
        <ProductEditModal
          open={!!editingProduct}
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}
      </>
  );
}
