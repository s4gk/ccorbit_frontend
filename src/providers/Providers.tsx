'use client';
import React from 'react';
import { ReduxProvider, MUIProvider } from '@/providers';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <MUIProvider>{children}</MUIProvider>
    </ReduxProvider>
  );
}
