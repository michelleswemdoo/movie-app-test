import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootLayout } from './pages/Root';
import { Home } from './pages/Home';
import { MoviesPage } from './pages/MoviesPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: 'movies',
        element: <MoviesPage />,
      },

      {
        path: 'movies/:moviesId',
        element: <div>details</div>,
      },
    ],
  },
]);
const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
};
