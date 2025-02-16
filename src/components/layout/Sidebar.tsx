import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { toggleSidebar } from '../../redux/slices/sidebarSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const expanded = useSelector((state: RootState) => state.sidebar.expanded);

  return (
    <aside
      className={`bg-gray-900 text-white h-screen flex flex-col transition-all duration-300 ${expanded ? 'min-w-[10%]' : 'w-[40px]'}`}
    >
      <button onClick={() => dispatch(toggleSidebar())}>
        {expanded ? <LuChevronLeft /> : <LuChevronRight />}
      </button>
    </aside>
  );
};

export default Sidebar;
