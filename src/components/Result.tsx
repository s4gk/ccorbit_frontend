import { Paper, Typography, Box } from "@mui/material";
import ProductList from "./product/ProductList";
import { AddProductModal } from "@/components";

export default function Result() {
  return (
    <Paper sx={{ height: "100%", p: 2 }} elevation={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ pb: 2 }}>Resultados</Typography>
        <AddProductModal />
      </Box>
      
      <ProductList />
    </Paper>
  );
}
