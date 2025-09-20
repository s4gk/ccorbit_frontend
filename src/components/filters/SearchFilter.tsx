import { TextField } from '@mui/material'
import { RootState, setSearch } from '@/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const SearchFilter = () => {

  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.filters.search);

  return (
    <TextField
      label="Buscar"
      variant="outlined"
      fullWidth
      margin="normal"
      size="small"
      value={search}
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  )
}
