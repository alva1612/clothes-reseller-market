"use client";

import { FC, PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query.client";
import { RootModals } from "@/modules/modals/components/RootModals";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  // const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RootModals />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
