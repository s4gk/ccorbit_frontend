import { Grid } from "@mui/material";
import Filters from "./Filters";
import Result from "./Result";


export default function Layout() {
  return (
    <Grid container sx={{ width: "100vw", height: "100vh" }}>
      {/* Contenedor de filtros */}
      <Grid size={{ xs: 12, md: 3 }} component="div" sx={{ height: {xs: "auto", md: "100vh"}, p: 2, position: {xs: "relative", md: "fixed"} }}>
        <Filters />
      </Grid>

      {/* Contenedor de resultados */}
      <Grid size={{ xs: 12, md: 9 }} component="div" sx={{ height: "100%", p: 2, overflowY: "auto", ml: {xl: "450px", lg: "400px", md: "300px"} }}>
        <Result />
      </Grid>
    </Grid>
  );
}
