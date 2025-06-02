import { useState } from "react";
import logo from '../assets/Logo.svg'
import collapse from '../assets/navbar_collapse.svg'
import banner_d from '../assets/Banner_Dark.svg'

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
         ? "float-left h-screen min-w-[300px] bg-background-dark border-r-[2px] border-border p-[10px]" 
         : "float-left h-screen w-[60px] bg-background-dark border-r-[2px] border-border p-[10px] justify-center items-center"
        }
    >
      {styleType === "style1" ? (
        <>

          <div className="flex justify-between" >
            <img src={banner_d} alt="Nexarion Logo" className="w-[200px]" />
            <button onClick={toggleStyle}>
              <img src={collapse} alt="Collapse Sidebar" className="w-[38px]" />
            </button>
          </div>

          <div className="pt-[50px]">
          </div>

          <div id="navbar_bottom_style1">
            
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <button onClick={toggleStyle} className="relative w-[38px] h-[38px] border-none bg-transparent p-0 cursor-pointer overflow-visible group">
              <img src={logo} alt="Normal Logo" className="w-full h-full block group-hover:hidden" />
              <img src={collapse} alt="Hover Logo" className="w-full h-full absolute top-0 left-0 pointer-events-none z-[1] hidden group-hover:block" />
            </button>
          </div>
          <div id="navbar_middle_style2">
            
          </div>
          <div id="navbar_bottom_style2">
            
          </div>
        </>
      )}
    </nav>
  );
}