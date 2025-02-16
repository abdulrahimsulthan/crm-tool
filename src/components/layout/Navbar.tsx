import { LuBell, LuSearch, LuSettings, LuUserRound } from 'react-icons/lu';

const Navbar = () => (
  <nav className="bg-gray-500 flex justify-between items-center">
    <div>
      <LuSearch />
      <input type="text" />
    </div>
    <div>
      <LuBell />
      <LuUserRound />
      <LuSettings />
    </div>
  </nav>
);

export default Navbar;
