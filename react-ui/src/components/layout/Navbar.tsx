// Imports
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
import { ChartNoAxesCombined, EllipsisVertical, Landmark, LayoutDashboard, LogOut, PanelLeft, Search, Settings, Sun, User, Wallet} from "lucide-react";
import logo from '@assets/Logo.svg'
import banner_d from '@assets/Banner_Dark.svg'

// Functions
import { logout } from "@features/auth/logout";


const isElectron = typeof window !== 'undefined' && !!window.electronAPI; // Check if the window is an app or browser

export function Navbar() {

  // Style
  const [styleType, setStyleType] = useState("style1");
  const toggleStyle = () => {
    if (styleType === "style1") {
      setStyleType("style2");
    } else {
      setStyleType("style1");
    }
  };

  // Dropdown
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

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
        ${styleType === "style1"
         ? `relative float-left ${isElectron ? 'h-[calc(100vh-30px)]' : 'h-screen'} w-[300px] bg-background-dark border-r-[2px] border-border p-[10px] flex flex-col justify-center` 
         : `relative float-left ${isElectron ? 'h-[calc(100vh-30px)]' : 'h-screen'} w-[60px] bg-background-dark border-r-[2px] border-border p-[10px] flex flex-col justify-center items-center`
        }
      `}
    >
      {styleType === "style1" ? (

        <> {/* Style 1 */}

          <div className="flex flex-row w-full text-white">
            <img src={banner_d} alt="Nexarion Logo" className="h-[38px]" />
            <div className="flex-grow"/>
            <button onClick={toggleStyle}>
              <PanelLeft size={32}/>
            </button>
          </div>

          <div className="flex-grow"/>

          <div className="flex flex-col gap-4 w-full text-white text-sm">

            <button className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg">
              <Search size={32}/>
              Search
            </button>

            <Link to='/' className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg">
              <LayoutDashboard size={32}/>
              Dashboard
            </Link>

            <Link to='/statistics' className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg">
              <ChartNoAxesCombined size={32}/>
              Statistics
            </Link>

            <Link to='/Budget' className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg">
              <Wallet size={32}/>
              Budget
            </Link>

            <Link to='/accounts' className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg">
              <Landmark size={32}/>
              Accounts
            </Link>

          </div>

          <div className="flex-grow"/>

          <div className="flex flex-col gap-4 text-white text-sm w-full space-between">
            <button className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg" onClick={toggleDropdown} ref={toggleButtonRef}>
              <User size={32}/>
              User
            </button>
          </div>
        </>
      ) : ( 

        <> {/* Style 2 */}

          <div className="flex group">

            <button onClick={toggleStyle} className="flex w-[38px] h-[38px] justify-center items-center">
              <img src={logo} alt="Normal Logo" className="w-[32px] h-[32px] block group-hover:hidden" />
              <PanelLeft size={38} className="text-white p-2 bg-[#292929] rounded-lg hidden group-hover:block"/>
            </button>

          </div>

          <div className="flex-grow"/>

          <div className="flex justify-between flex-col gap-4 w-[38px]">

            <button>
              <Search size={38} className="text-white p-[6px] hover:bg-[#292929] rounded-lg"/>
            </button>

            <Link to='/'>
              <LayoutDashboard size={38} className="text-white p-[6px] rounded-lg hover:bg-[#292929]"/>
            </Link>

            <Link to='/statistics'>
              <ChartNoAxesCombined size={38} className="text-white p-[6px] rounded-lg hover:bg-[#292929]"/>
            </Link>

            <Link to='/budget'>
              <Wallet size={38} className="text-white p-[6px] rounded-lg hover:bg-[#292929]"/>
            </Link>

            <Link to='/accounts'>
              <Landmark size={38} className="text-white p-[6px] rounded-lg hover:bg-[#292929]"/>
            </Link>

          </div>

          <div className="flex-grow"/>

          <div className="w-[38px] h-[38px] group flex justify-center items-center">

            <button ref={toggleButtonRef}>
              <User size={38} className="text-white group-hover:hidden p-1"/>
              <EllipsisVertical size={38} className="text-white hidden group-hover:block bg-[#292929] p-1 rounded-lg p-2" onClick={toggleDropdown} />
            </button>
            
          </div>
        </>
      )}

    {openDropdown && (
      <div className={`absolute bottom-[10px] bg-background w-48 text-white border-[2px] border-border rounded-lg shadow-lg
        ${styleType === "style1"
        ? "left-[290px]"
        : "left-[50px]"
        }`}
        ref={dropdownRef}>
        <nav className="flex flex-col">
          <Link to='/user' onClick={() => setOpenDropdown(false)} className="flex items-center gap-3 hover:bg-[#292929] p-2">
            <User size={24} className="text-white"/>
            User
          </Link>

          <Link to='/settings' onClick={() => setOpenDropdown(false)} className="flex items-center gap-3 hover:bg-[#292929] p-2">
            <Settings size={24} className="text-white"/>
            Settings
          </Link>

          <button
            /*
              onClick={toggleTheme}
            */
            className="flex items-center gap-3 hover:bg-[#292929] p-2 text-white"
            >
            <Sun size={24}/>
            Light Mode
          </button>

          <button
            onClick={logout}
            className="flex items-center gap-3 hover:bg-[#292929] p-2 text-red-400"
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