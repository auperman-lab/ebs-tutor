import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30
    }
  }
});

export const QueryClientContext = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);
