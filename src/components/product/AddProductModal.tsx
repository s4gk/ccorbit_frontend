'use client';
import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import ProductForm from './ProductForm';

export default function AddProductModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        + Agregar producto
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Crear nuevo producto</DialogTitle>
        <DialogContent>
          <ProductForm onSuccess={() => setOpen(false)}/>
        </DialogContent>
      </Dialog>
    </>
  );
}
