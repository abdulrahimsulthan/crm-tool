import { LuBell, LuSearch, LuSettings, LuUserRound } from 'react-icons/lu';
const rounded = 'p-1 rounded-full h-6 w-6 hover:bg-gray-300';

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
    <div className="flex items-center space-x-3">
      <LuSearch className='text-gray-500'/>
      <input type="text" placeholder='Search' className='border-none outline-none bg-transparent'/>
    </div>
    <div className="flex items-center space-x-4">
      <LuBell className={`${rounded} text-gray-500`} />
      <LuSettings className={`${rounded} text-gray-500`} />
      <LuUserRound className={`${rounded} text-gray-700`} />
    </div>
  </nav>
);

export default Navbar;
