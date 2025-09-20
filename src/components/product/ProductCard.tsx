
'use client';
import React from 'react';
import { Card, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Product } from '@/types/product';
import { useAppDispatch } from '@/hooks';
import { removeProduct } from '@/store';
import ProductEditModal from './ProductEditModal';

interface Props {
  product: Product;
  onEdit?: (product: Product) => void;
}

export default function ProductCard({ product, onEdit }: Props) {
  
  const dispatch = useAppDispatch();

  function handleDelete() {
    dispatch(removeProduct(product.id));
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
          ${product.price.toLocaleString('es-CO')}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Categoría: {product.category}
        </Typography>
      </CardContent>
       <CardActions sx={{ justifyContent: 'flex-end' }}>
        <IconButton color="primary" onClick={() => onEdit?.(product)}>
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
