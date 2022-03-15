import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./header.css";

// These are the menu items in header
const headersData = [
  {
    label: "Home",
    href: "/listings",
    icon: "/icons/Home Icon.png",
  },
  {
    label: "Admission",
    href: "/mentors",
    icon: "/icons/Admission Icon.png",
  },
  {
    label: "Tenders",
    href: "/account",
    icon: "/icons/Tenders Icon.png",
  },
  {
    label: "Contacts",
    href: "/logout",
    icon: "/icons/Contacts Icon.png",
  },
  {
    label: "Login",
    href: "/login",
    icon: "/icons/Login Icon.png",
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
  function getMenuButtons() {
    // Directly returning the mapped array of objects
    return headersData.map((comp) => {
      return (
        <a href="/" key={comp.label}>
          <img src={comp.icon} height={50} alt={comp.label} />
        </a>
      );
    });
  }

  // This is the layout returned after all the processing
  return (
    <header>
      <AppBar className={header}>
        <Toolbar>
          <div className="flex-container">
            <span className = "college-name">Gyanodaya Institute of Technology</span>
            <span style={{float:"right"}}>{getMenuButtons()}</span>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}
