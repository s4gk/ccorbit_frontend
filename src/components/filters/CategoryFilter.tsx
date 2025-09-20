import { useDispatch, useSelector } from "react-redux";
import { RootState, setCategory } from "@/store";
import { selectCategories } from "@/store/selectors";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const CategoryFilter = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.filters.category);
  const categories = useSelector(selectCategories);

  return (
    <FormControl fullWidth margin="normal" size="small">
      <InputLabel>Categoría</InputLabel>
      <Select
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
      >
        <MenuItem value="">Todas</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat as string}>
            {cat}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
