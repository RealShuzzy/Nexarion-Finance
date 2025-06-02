import { useState } from "react";
import logo from '../assets/Logo.svg'
import collapse from '../assets/navbar_collapse.svg'
import banner_d from '../assets/Banner_Dark.svg'
import search from '../assets/search.svg'
import dashboard from '../assets/dashboard.svg'
import statistic from '../assets/statistic.svg'
import budget from '../assets/budget.svg'
import bank from '../assets/bank.svg'
import account from '../assets/account.svg'

const isElectron = typeof window !== 'undefined' && !!window.electronAPI;

export function Navbar() {

  const [styleType, setStyleType] = useState("style1");
  const toggleStyle = () => {
    if (styleType === "style1") {
      setStyleType("style2");
    } else {
      setStyleType("style1");
    }
  };

  return (
    <nav
      className={
        styleType === "style1"
         ? `float-left ${isElectron ? 'h-[calc(100vh-30px)]' : 'h-screen'} min-w-[300px] bg-background-dark border-r-[2px] border-border p-[10px] flex items-center justify-center` 
         : `relative float-left ${isElectron ? 'h-[calc(100vh-30px)]' : 'h-screen'} w-[60px] bg-background-dark border-r-[2px] border-border p-[10px] flex items-center justify-center`
        }
    >
      {styleType === "style1" ? (
        <>

          <div className={`flex absolute ${isElectron ? 'top-10' : 'top-4'} justify-between gap-10 min-w-[275px]`} >
            <img src={banner_d} alt="Nexarion Logo" className="h-[38px]" />
            <button onClick={toggleStyle}>
              <img src={collapse} alt="Collapse Sidebar" className="w-[38px]" />
            </button>
          </div>

          <div className="flex justify-between flex-col gap-4">
          </div>

          <div className="absolute bottom-4 w-[38px] h-[38px]">
            
          </div>
        </>
      ) : (
        <>
          <div className="flex absolute top-4">
            <button onClick={toggleStyle} className="relative w-[38px] h-[38px] border-none bg-transparent p-0 cursor-pointer overflow-visible group">
              <img src={logo} alt="Normal Logo" className="w-full h-full block group-hover:hidden" />
              <img src={collapse} alt="Hover Logo" className="w-full h-full absolute top-0 left-0 pointer-events-none z-[1] hidden group-hover:block" />
            </button>
          </div>
          <div className="flex justify-between flex-col gap-4">
            <button>
              <img src={search} alt="Search" className="hover:bg-[#292929] p-1 rounded"/>
            </button>
            <button>
              <img src={dashboard} alt="Dashboard" className="hover:bg-[#292929] p-1 rounded"/>
            </button>
            <button>
              <img src={statistic} alt="Statistics" className="hover:bg-[#292929] p-1 rounded"/>
            </button>
            <button>
              <img src={budget} alt="Budget" className="hover:bg-[#292929] p-1 rounded"/>
            </button>
            <button>
              <img src={bank} alt="Accounts" className="hover:bg-[#292929] p-1 rounded"/>
            </button>
          </div>
          <div className="absolute bottom-4 w-[38px] h-[38px]">
            <button>
              <img src={account} alt="Accounts" className="hover:bg-[#292929] p-1 rounded"/>
            </button>
          </div>
        </>
      )}
    </nav>
  );
}