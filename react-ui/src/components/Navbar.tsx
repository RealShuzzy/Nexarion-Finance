import { useState } from "react";
import banner from '../assets/Nexarion_Banner.svg'
import logo from '../assets/Nexarion_Logo.svg'
import collapse from '../assets/navbar_collapse.svg'

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
      id="navbar"
      className={styleType === "style1" ? "navbar-style1" : "navbar-style2"}
    >
      {styleType === "style1" ? (
        <>

          <div id="navbar_top_style1">
            <img src={banner} alt="Nexarion Logo" id="navbar_top_banner" />
            <button onClick={toggleStyle}>
              <img src={collapse} alt="Collapse Sidebar" id="navbar_top_collapse" />
            </button>
          </div>

          <div id="navbar_middle_style1">

          </div>

          <div id="navbar_bottom_style1">
            
          </div>
        </>
      ) : (
        <>
          <div id="navbar_top_style2">
            <button onClick={toggleStyle} id="toggle_collapse_button">
              <img src={logo} alt="Normal Logo" className="navbar_top_collapse_normal" />
              <img src={collapse} alt="Hover Logo" className="navbar_top_collapse_hover" />
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