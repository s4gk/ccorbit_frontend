'use client';
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/styles/theme';

export function MUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
