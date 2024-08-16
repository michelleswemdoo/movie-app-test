import { Outlet } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

export const RootLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
