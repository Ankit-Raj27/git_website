import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Home",
    href: "/listings",
  },
  {
    label: "Admission",
    href: "/mentors",
  },
  {
    label: "Tenders",
    href: "/account",
  },
  {
    label: "Contacts",
    href: "/logout",
  },
  {
    label: "Login",
    href: "/login",
  },
];

export default function Header() {
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#D3D3D3",
    },
  }));
  const { header } = useStyles();
  
  function getMenuButtons() 
  {
      const componetsList = headersData.map((comp) => {
          return (<Button> <a href={comp.href}> {comp.label} </a> </Button>)
      })
      return componetsList
  }

  return (
    <header>
      <AppBar className={header}>
        <Toolbar>
          Gyanodaya Institute of Technology
            {getMenuButtons()} 
        </Toolbar>
      </AppBar>
    </header>
  );
}
