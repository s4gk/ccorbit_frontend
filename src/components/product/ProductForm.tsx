
'use client';
import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '@/hooks';
import { addProduct } from '@/store';
import type { Product } from '@/types/product';

const categories = ['Ropa', 'Hogar', 'Electrónica'];

export default function ProductForm() {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({ name: '', description: '', price: '', category: categories[0] });

  function handleChange<K extends keyof typeof form>(k: K, value: string) {
    setForm(prev => ({ ...prev, [k]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct: Product = {
      id: uuidv4(),
      name: form.name,
      description: form.description,
      price: Number(form.price),
      category: form.category,
    };
    dispatch(addProduct(newProduct));
    setForm({ name: '', description: '', price: '', category: categories[0] });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
      <TextField label="Nombre" value={form.name} onChange={e => handleChange('name', e.target.value)} required />
      <TextField label="Descripción" value={form.description} onChange={e => handleChange('description', e.target.value)} required />
      <TextField label="Precio" type="number" value={form.price} onChange={e => handleChange('price', e.target.value)} required inputProps={{ min: 0 }} />
      <TextField select label="Categoría" value={form.category} onChange={e => handleChange('category', e.target.value)}>
        {categories.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
      </TextField>
      <Button type="submit" variant="contained">Agregar producto</Button>
    </Box>
  );
}
