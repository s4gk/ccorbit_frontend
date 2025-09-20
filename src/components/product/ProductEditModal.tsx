'use client';
import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, MenuItem } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { updateProduct } from '@/store';
import { selectCategories } from '@/store/selectors';
import type { Product } from '@/types/product';

interface Props {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductEditModal({ open, onClose, product }: Props) {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
  });

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        category: product.category,
      });
    }
  }, [product]);

  function handleChange<K extends keyof typeof form>(k: K, value: string) {
    setForm(prev => ({ ...prev, [k]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!product) return;

    dispatch(
      updateProduct({
        ...product,
        name: form.name,
        description: form.description,
        price: Number(form.price),
        category: form.category,
      })
    );
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          p: 3,
          borderRadius: 2,
          width: 400,
          display: 'grid',
          gap: 2,
        }}
      >
        <TextField
          label="Nombre"
          value={form.name}
          onChange={e => handleChange('name', e.target.value)}
          required
        />
        <TextField
          label="Descripción"
          value={form.description}
          onChange={e => handleChange('description', e.target.value)}
          required
        />
        <TextField
          label="Precio"
          type="number"
          value={form.price}
          onChange={e => handleChange('price', e.target.value)}
          required
          inputProps={{ min: 0 }}
        />
        <TextField
          select
          label="Categoría"
          value={form.category}
          onChange={e => handleChange('category', e.target.value)}
        >
          {categories.map(c => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained">
          Guardar cambios
        </Button>
      </Box>
    </Modal>
  );
}
