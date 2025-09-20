import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/providers';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

export const metadata: Metadata = {
  title: 'Prueba Técnica - CCorbit',
  description: 'Listado de productos con Next.JS + Redux + MUI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Providers>
          {/* NAVBAR */}
          <AppBar position="sticky" color="primary" sx={{ boxShadow: 1 }}>
            <Toolbar sx={{ px: 2 }}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Listado de Productos
              </Typography>
            </Toolbar>
          </AppBar>

          {/* CONTENIDO */}
          <Box sx={{
            width: "100vw",
            height: "calc(100vh - 64px)",
            bgcolor: "grey.100",
          }}>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
