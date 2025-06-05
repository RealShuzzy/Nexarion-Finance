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
      className={`
        transition-[width] duration-500 ease-in-out
        ${styleType === "style1"
         ? `float-left ${isElectron ? 'h-[calc(100vh-30px)]' : 'h-screen'} w-[300px] bg-background-dark border-r-[2px] border-border p-[10px] flex flex-col justify-center` 
         : `float-left ${isElectron ? 'h-[calc(100vh-30px)]' : 'h-screen'} w-[60px] bg-background-dark border-r-[2px] border-border p-[10px] flex flex-col justify-center`
        }
      `}
    >
      {styleType === "style1" ? (
        <>

          <div className="flex flex-row w-full">
            <img src={banner_d} alt="Nexarion Logo" className="h-[38px]" />
            <div className="flex-grow"/>
            <button onClick={toggleStyle}>
              <img src={collapse} alt="Collapse Sidebar" className="w-[38px]" />
            </button>
          </div>

          <div className="flex-grow"/>

          <div className="flex flex-col gap-4 w-full text-white text-sm">
            <button className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg">
              <img src={search} alt="Search" className="w-[32px]"/>
              Search
            </button>
            <button className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg">
              <img src={dashboard} alt="Dashboard" className="w-[32px]"/>
              Dashboard
            </button>
            <button className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg">
              <img src={statistic} alt="Statistics" className="w-[32px]"/>
              Statistics
            </button>
            <button className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg">
              <img src={budget} alt="Budget" className="w-[32px]"/>
              Budget
            </button>
            <button className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg">
              <img src={bank} alt="Accounts" className="w-[32px]"/>
              Portfolios & Konten
            </button>
          </div>

          <div className="flex-grow"/>

          <div className="flex flex-col gap-4 text-white text-sm w-full">
            <button className="flex items-center gap-3 hover:bg-[#292929] p-2 rounded-lg">
              <img src={account} alt="Accounts" className="w-[32px]"/>
              User
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex">
            <button onClick={toggleStyle} className="relative w-[38px] h-[38px] border-none bg-transparent p-0 cursor-pointer overflow-visible group">
              <img src={logo} alt="Normal Logo" className="w-full h-full block group-hover:hidden" />
              <img src={collapse} alt="Hover Logo" className="w-full h-full absolute top-0 left-0 pointer-events-none z-[1] hidden group-hover:block" />
            </button>
          </div>
          <div className="flex-grow"/>

          <div className="flex justify-between flex-col gap-7 w-[38px]">
            <button>
              <img src={search} alt="Search" className="hover:bg-[#292929] p-1 rounded-lg"/>
            </button>
            <button>
              <img src={dashboard} alt="Dashboard" className="hover:bg-[#292929] p-1 rounded-lg"/>
            </button>
            <button>
              <img src={statistic} alt="Statistics" className="hover:bg-[#292929] p-1 rounded-lg"/>
            </button>
            <button>
              <img src={budget} alt="Budget" className="hover:bg-[#292929] p-1 rounded-lg"/>
            </button>
            <button>
              <img src={bank} alt="Accounts" className="hover:bg-[#292929] p-1 rounded-lg"/>
            </button>
          </div>

          <div className="flex-grow"/>

          <div className="w-[38px] h-[38px]">
            <button>
              <img src={account} alt="Accounts" className="hover:bg-[#292929] p-1 rounded-lg"/>
            </button>
          </div>
        </>
      )}
    </nav>
  );
}