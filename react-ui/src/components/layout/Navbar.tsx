// Imports
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
import { ChartNoAxesCombined, EllipsisVertical, Landmark, LayoutDashboard, LogOut, PanelLeft, Search, Settings, User, Wallet} from "lucide-react";
import logo from '@assets/Logo.svg'
import banner_d from '@assets/Banner_Dark.svg'

// Functions
import { logout } from "@features/auth/logout";
import ToggleTheme from "@components/common/ToggleTheme";

const isElectron = typeof window !== 'undefined' && !!window.electronAPI; // Check if the window is an app or browser

type NavbarProps = {
  styleType: string;
  toggleStyle: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ styleType, toggleStyle }) => {

  // Dropdown
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Variables
  const username = localStorage.getItem('username')

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  // Return Navbar
  return (
    <nav
      className={`
        transition-[width] duration-500 ease-in-out
        fixed float-left flex flex-col justify-center
        ${isElectron ? 'h-[calc(100vh-30px)]' : 'h-screen'} p-[10px]
        bg-primary dark:bg-gray-10 text-white border-white dark:border-gray-7 border-r-[2px]
        ${styleType === "style1"
         ? `w-[300px]` 
         : `w-[60px] items-center`}
      `}
    >
      {styleType === "style1" ? (

        <> {/* Style 1 */}

          <div className="flex flex-row w-full">
            <img src={banner_d} alt="Nexarion Logo" className="h-[38px]" />
            <div className="flex-grow"/>
            <PanelLeft onClick={toggleStyle} size={38} className="p-2 rounded-lg group-hover:block hover:bg-hover-l dark:hover:bg-hover-d"/>
          </div>

          <div className="flex-grow"/>

          <div className="flex flex-col gap-4 w-full text-sm">

            <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-hover-l dark:hover:bg-hover-d">
              <Search size={32}/>
              Search
            </button>

            <Link to='/' className="flex items-center gap-3 p-2 rounded-lg hover:bg-hover-l dark:hover:bg-hover-d">
              <LayoutDashboard size={32}/>
              Dashboard
            </Link>

            <Link to='/statistics' className="flex items-center gap-3 p-2 rounded-lg hover:bg-hover-l dark:hover:bg-hover-d">
              <ChartNoAxesCombined size={32}/>
              Statistics
            </Link>

            <Link to='/Budget' className="flex items-center gap-3 p-2 rounded-lg hover:bg-hover-l dark:hover:bg-hover-d">
              <Wallet size={32}/>
              Budget
            </Link>

            <Link to='/accounts' className="flex items-center gap-3 p-2 rounded-lg hover:bg-hover-l dark:hover:bg-hover-d">
              <Landmark size={32}/>
              Accounts
            </Link>

          </div>

          <div className="flex-grow"/>

          <div className="flex flex-col gap-4 text-sm w-full space-between">
            <button onClick={toggleDropdown} ref={toggleButtonRef} className="flex items-center gap-3 p-2 rounded-lg hover:bg-hover-l dark:hover:bg-hover-d">
              <User size={32}/>
              {username}
            </button>
          </div>
        </>
      ) : ( 

        <> {/* Style 2 */}

          <div className="flex group">

            <button onClick={toggleStyle} className="flex justify-center items-center w-[38px] h-[38px] ">
              <img src={logo} alt="Normal Logo" className="block w-[32px] h-[32px] group-hover:hidden" />
              <PanelLeft size={38} className="hidden p-2 rounded-lg group-hover:block hover:bg-hover-l dark:hover:bg-hover-d"/>
            </button>

          </div>

          <div className="flex-grow"/>

          <div className="flex flex-col justify-between gap-4 w-[38px]">

            <button>
              <Search size={38} className="p-[6px] rounded-lg hover:bg-hover-l dark:hover:bg-hover-d"/>
            </button>

            <Link to='/'>
              <LayoutDashboard size={38} className="p-[6px] rounded-lg hover:bg-hover-l dark:hover:bg-hover-d"/>
            </Link>

            <Link to='/statistics'>
              <ChartNoAxesCombined size={38} className="p-[6px] rounded-lg hover:bg-hover-l dark:hover:bg-hover-d"/>
            </Link>

            <Link to='/budget'>
              <Wallet size={38} className="p-[6px] rounded-lg hover:bg-hover-l dark:hover:bg-hover-d"/>
            </Link>

            <Link to='/accounts'>
              <Landmark size={38} className="p-[6px] rounded-lg hover:bg-hover-l dark:hover:bg-hover-d"/>
            </Link>

          </div>

          <div className="flex-grow"/>

          <div className="flex justify-center items-center group w-[38px] h-[38px]  ">

            <button ref={toggleButtonRef}>
              <User size={38} className="p-1 group-hover:hidden"/>
              <EllipsisVertical onClick={toggleDropdown} size={38} className="hidden p-2 rounded-lg group-hover:block hover:bg-hover-l dark:hover:bg-hover-d"/>
            </button>
            
          </div>
        </>
      )}

    {openDropdown && (
      <div className={`absolute w-48 bottom-[10px] rounded-lg shadow-[0_0_20px_10px_rgba(0,0,0,0.1)] bg-white dark:bg-gray-9 border-[2px] border-white dark:border-gray-7 text-black dark:text-white
        ${styleType === "style1"
        ? "left-[290px]"
        : "left-[50px]"
        }`}
        ref={dropdownRef}>
        <nav className="flex flex-col">
          <Link to='/user' onClick={() => setOpenDropdown(false)} className="flex items-center p-2 gap-3 hover:bg-hover-l dark:hover:bg-hover-d">
            <User size={24}/>
            Profile
          </Link>

          <Link to='/settings' onClick={() => setOpenDropdown(false)} className="flex items-center p-2 gap-3 hover:bg-hover-l dark:hover:bg-hover-d">
            <Settings size={24}/>
            Settings
          </Link>
          <ToggleTheme/>
          <button
            onClick={logout}
            className="flex items-center p-2 gap-3 hover:bg-hover-l dark:hover:bg-hover-d text-red-400"
            >
            <LogOut size={24}/>
            Logout
          </button>

        </nav>
      </div>
      )}

    </nav>
  );
}