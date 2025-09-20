
'use client';
import React from 'react';
import { Card, CardContent, Typography} from '@mui/material';
import { Product } from '@/types/product';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {

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
    </Card>
  );
}
