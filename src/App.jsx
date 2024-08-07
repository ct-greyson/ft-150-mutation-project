import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostComponent from './components/PostComponent';

function App() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <PostComponent />
    </QueryClientProvider>
  )
}

export default App
