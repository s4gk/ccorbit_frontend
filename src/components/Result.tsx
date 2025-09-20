import { Paper, Typography } from "@mui/material";
import ProductList from "./product/ProductList";

export default function Result() {
  return (
    <Paper sx={{ height: "100%", p: 2 }} elevation={3}>
      <Typography variant="h6" sx={{ pb: 2 }}>
         Resultados
      </Typography>
      <ProductList />
    </Paper>
  );
}
