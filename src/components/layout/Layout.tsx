import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Layout = () => {
  const sidebarExpanded = useSelector(
    (state: RootState) => state.sidebar.expanded,
  );

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div
        className={`flex1 flex flex-col transition-all duration-300 ${sidebarExpanded ? 'w-[90%]' : 'w-[calc(100%-60px)]'}`}
      >
        <Navbar />
        <main className="p-6 bg-gray-100 h-[calc(100vh-60px)] rounded-tl-2xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
