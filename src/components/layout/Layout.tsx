import { Outlet } from 'react-router-dom';

const Navbar = () => <div>Navbar</div>;
const Sidebar = () => <div>Sidebar</div>;

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
