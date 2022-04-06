import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useLocation } from 'react-router-dom';
 
// These are the menu items in header
const headersData = [
  {
    label: "Home",
    href: "/",
    icon: "/icons/selected/Home Icon selected.png",
    selected: "/icons/Home Icon.png",
   
  },
  {
    label: "Admission",
    href: "/admission",
    icon: "/icons/selected/Admission Icon selected.png",
    selected: "/icons/Admission Icon.png",
   
  },
  {
    label: "Results",
    href: "/Results",
    icon: "/icons/selected/Tenders Icon selected.png",
    selected: "/icons/Tenders Icon.png",
  
  },
  {
    label: "Contacts",
    href: "/Contacts",
    icon: "/icons/selected/Contacts Icon selected.png",
    selected: "icons/Contacts Icon.png",
 
  },
  {
    label: "Login",
    href: "/login",
    icon: "/icons/selected/Login Icon selected.png",
    selected: "/icons/Login Icon.png",
    
  },
];
 
export default function Header() {
  // This is the styling for the header (Doc: https://material-ui.com/components/app-bar/)
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#D3D3D3",
    },
  }));
  const { header } = useStyles();
 
  // function to populate the header with the menu items
  function getMenuButtons(location) {
    // Directly returning the mapped array of objects
    return headersData.map((comp) => {
      return (
        <button className="IconButtons">
          <Link to={comp.href} key={comp.label}>
            <img src={location.pathname === comp.href ? comp.selected : comp.icon} height={50} alt={comp.label} style={{color:'red'}}/>
          </Link>
        </button>
      );
    });
  }
 
  const location = useLocation();
 
  // This is the layout returned after all the processing
  return (
    <AppBar className={header} position="relative">
      <Toolbar style={{ width: "90%", alignSelf: "center" }}>
        <div className="flex-container">
        <img className="header-logo" src="/icons/logo1.png"></img>
          <span className="college-name">
            Gyanodaya Institute of Technology
          </span>
          <span style={{ float: "right"}}>{getMenuButtons(location)}</span>
        </div>
      </Toolbar>
    </AppBar>
  );
}