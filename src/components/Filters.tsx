import { Paper, Button, Box, Typography } from "@mui/material";
import { SearchFilter, CategoryFilter } from "@/components";
import { PriceRangeFilter } from "./filters/PriceRangeFilter";
import { useDispatch } from "react-redux";
import { resetFilters } from "@/store";

export default function Filters() {
  const dispatch = useDispatch();
  return (
    <Paper sx={{ height: "100%", p: 3 }} elevation={3}>
      <Typography variant="h6" sx={{ pb: 2 }}>
        Filtros
      </Typography>

      {/* Filtro de texto */}
      <SearchFilter />

      {/* Filtro de select */}
      <CategoryFilter />

      {/* Filtro de rango */}
      <PriceRangeFilter />

      {/* Botones */}
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button variant="outlined" color="primary" fullWidth onClick={() => dispatch(resetFilters())}>
          Limpiar
        </Button>
      </Box>
    </Paper>
  );
}
