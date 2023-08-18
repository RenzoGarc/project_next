"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Providers({ children, themeProps }) {
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextUIProvider>
  );
}
