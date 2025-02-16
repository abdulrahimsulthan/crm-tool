import { LuBell, LuSearch, LuSettings, LuUserRound } from 'react-icons/lu';
const rounded = 'p-1 rounded-full h-6 w-6 hover:bg-gray-300 text-white';

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-3 bg-gray-900 shadow-md h-[60px]">
    <div className="w-[30%] flex items-center space-x-3 border-1 border-gray-500 rounded-full px-4 py-2 text-white">
      <LuSearch />
      <input
        type="text"
        placeholder="Search"
        className="border-none outline-none bg-transparent"
      />
    </div>
    <div className="flex items-center space-x-4">
      <LuBell className={`${rounded} `} />
      <LuSettings className={`${rounded} `} />
      <LuUserRound className={`${rounded}`} />
    </div>
  </nav>
);

export default Navbar;
