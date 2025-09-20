import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setPriceRange } from "@/store";
import { Slider, Typography, Box } from "@mui/material";

export const PriceRangeFilter = () => {
  const dispatch = useDispatch();
  const range = useSelector((state: RootState) => state.filters.priceRange);

  const handleChange = (_: Event, newValue: number | number[]) => {
    dispatch(setPriceRange(newValue as [number, number]));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle1">Rango de precios</Typography>

      {/* Texto con los valores */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {`$${range[0].toLocaleString("es-CO")} – $${range[1].toLocaleString("es-CO")}`}
      </Typography>

      {/* Slider */}
      <Slider
        value={range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={100000}
        step={1000}
      />
    </Box>
  );
};
