import { Outlet } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

// Root Layout definition

export const RootLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
