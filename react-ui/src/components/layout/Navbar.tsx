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

  let navbar
  let navbarStyle


  // Styles
  switch (styleType) {
    case 'style1':
      navbar = (
      <>
        <div className="flex flex-row w-full">
          <img src={banner_d} alt="Nexarion Logo" className="h-[38px]" />
          <div className="flex-grow"/>
          <PanelLeft onClick={toggleStyle} size={38} className="group-hover:block hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg"/>
        </div>

        <div className="flex-grow"/>

        <div className="flex flex-col gap-4 w-full text-sm">

          <button className="flex items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg">
            <Search size={32}/>
            Search
          </button>

          <Link to='/' className="flex items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg">
            <LayoutDashboard size={32}/>
            Dashboard
          </Link>

          <Link to='/statistics' className="flex items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg">
            <ChartNoAxesCombined size={32}/>
            Statistics
          </Link>

          <Link to='/Budget' className="flex items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg">
            <Wallet size={32}/>
            Budget
          </Link>

          <Link to='/accounts' className="flex items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg">
            <Landmark size={32}/>
            Accounts
          </Link>

        </div>

        <div className="flex-grow"/>

        <div className="flex flex-col gap-4 w-full text-sm space-between">
          <button onClick={toggleDropdown} ref={toggleButtonRef} className="flex items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg">
            <User size={32}/>
            {username}
          </button>
        </div>
      </>
      )
      navbarStyle = (
        `transition-[width] duration-500 ease-in-out
        fixed float-left flex flex-col justify-center
        bg-primary dark:bg-gray-10 text-white border-white dark:border-gray-7 border-r-[2px]
        ${isElectron ? 'h-[calc(100vh-30px)]' : 'h-screen'} p-[10px] w-[250px]`
      )
      break
    case 'style2':
      navbar = (
      <>
        <div className="group flex">

          <button onClick={toggleStyle} className="flex justify-center items-center w-[38px] h-[38px]">
            <img src={logo} alt="Normal Logo" className="group-hover:hidden block w-[32px] h-[32px]" />
            <PanelLeft size={38} className="hidden group-hover:block hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg"/>
          </button>

        </div>

        <div className="flex-grow"/>

        <div className="flex flex-col justify-between gap-4 w-[38px]">

          <button>
            <Search size={38} className="hover:bg-hover-l dark:hover:bg-hover-d p-[6px] rounded-lg"/>
          </button>

          <Link to='/'>
            <LayoutDashboard size={38} className="hover:bg-hover-l dark:hover:bg-hover-d p-[6px] rounded-lg"/>
          </Link>

          <Link to='/statistics'>
            <ChartNoAxesCombined size={38} className="hover:bg-hover-l dark:hover:bg-hover-d p-[6px] rounded-lg"/>
          </Link>

          <Link to='/budget'>
            <Wallet size={38} className="hover:bg-hover-l dark:hover:bg-hover-d p-[6px] rounded-lg"/>
          </Link>

          <Link to='/accounts'>
            <Landmark size={38} className="hover:bg-hover-l dark:hover:bg-hover-d p-[6px] rounded-lg"/>
          </Link>

        </div>

        <div className="flex-grow"/>

        <div className="group flex justify-center items-center w-[38px] h-[38px]">

          <button ref={toggleButtonRef}>
            <User size={38} className="group-hover:hidden p-1"/>
            <EllipsisVertical onClick={toggleDropdown} size={38} className="hidden group-hover:block hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg"/>
          </button>

        </div>
      </>
      )
      navbarStyle = (
        `transition-[width] duration-500 ease-in-out
        fixed float-left flex flex-col justify-center
        bg-primary dark:bg-gray-10 text-white border-white dark:border-gray-7 border-r-[2px]
        ${isElectron ? 'h-[calc(100vh-30px)]' : 'h-screen'} p-[10px] w-[60px] items-center`
      )
      break
    case 'styleS':
      navbar = (
      <>
        <div className="flex-grow"/>
        <div className="group flex">

          <button onClick={toggleStyle} className="flex justify-center items-center w-[38px] h-[38px]">
            <img src={logo} alt="Normal Logo" className="group-hover:hidden block w-[32px] h-[32px]" />
            <PanelLeft size={38} className="hidden group-hover:block hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg"/>
          </button>

        </div>
      </>
      )
      navbarStyle = (
        `transition-[width] duration-500 ease-in-out
        fixed flex justify-center
        bg-primary dark:bg-gray-10 text-white border-white dark:border-gray-7 border-r-[2px]
        h-[60px] p-[10px] w-full items-center`
      )
      break
    }


  // Return Navbar
  return (
    <nav
      className={navbarStyle}
    >
    {navbar}

    {openDropdown && (
      <div className={`absolute w-48 bottom-[10px] rounded-lg shadow-[0_0_20px_10px_rgba(0,0,0,0.1)] bg-white dark:bg-gray-9 border-[2px] border-white dark:border-gray-7 text-black dark:text-white
        ${styleType === "style1"
        ? "left-[240px]"
        : "left-[50px]"
        }`}
        ref={dropdownRef}>
        <nav className="flex flex-col">
          <Link to='/user' onClick={() => setOpenDropdown(false)} className="flex items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2">
            <User size={24}/>
            Profile
          </Link>

          <Link to='/settings' onClick={() => setOpenDropdown(false)} className="flex items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2">
            <Settings size={24}/>
            Settings
          </Link>
          <ToggleTheme/>
          <button
            onClick={logout}
            className="flex items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 text-red-400"
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