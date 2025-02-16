import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { toggleSidebar } from '../../redux/slices/sidebarSlice';
import { NavLink } from 'react-router-dom';
import { BarChart, Home, Settings } from 'lucide-react';

const Sidebar = () => {
  const dispatch = useDispatch();
  const expanded = useSelector((state: RootState) => state.sidebar.expanded);

  return (
    <aside
      className={`bg-gray-900 text-white h-screen flex flex-col items-center justify-between transition-all duration-300 ${expanded ? 'min-w-[10%]' : 'w-[60px]'}`}
    >
      <nav className="w-full flex flex-col space-y-2 mt-4">
        {[
          { path: '/', label: 'Home', icon: <Home /> },
          { path: '/dashboard', label: 'Dashboard', icon: <BarChart /> },
          { path: '/settings', label: 'Settings', icon: <Settings /> },
        ].map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className="flex items-center space-x-2 p-3 hover:bg-gray-700 transition-all"
          >
            {item.icon}
            {expanded && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
      <div
        className={`w-full items-center flex space-x-2 justify-${expanded ? 'end' : 'center'}`}
      >
        <button
          className="p-1 m-3 border-1 rounded"
          onClick={() => dispatch(toggleSidebar())}
        >
          {expanded ? <LuChevronLeft /> : <LuChevronRight />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
