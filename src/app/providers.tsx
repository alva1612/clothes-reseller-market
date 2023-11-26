"use client";

import { FC, PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query.client";
import { RootModals } from "@/modules/modals/components/RootModals";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootModals />
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
