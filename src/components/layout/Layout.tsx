import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className='flex h-screen bg-amber-300'>
      <Sidebar />
      <div className="flex1 flex flex-col bg-amber-600">
        <Navbar />
        <main className='p-6 bg-gray-100'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
