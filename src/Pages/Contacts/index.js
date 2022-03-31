import { grey } from "@material-ui/core/colors";
import React from "react";
export default function Contacts() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: "1",
        width: "100%",
        height: "100%",
        backgroundColor: "#D3D3D3",
      }}
    >
      <div
        style={{
          position:"absolute",
          bottom:"0",
          display: "flex",
          flexDirection: "column",
          width: "30%",
          height: "30%",
          backgroundColor: "#bfc1c2",
          justifyContent:"center",
          alignItems:"center",
          boxShadow: "3px solid #8AC007",
          fontStyle:"oblique",
        }}
      >
        <span color="blue">GYANODAYA INSTITUTE OF TECHNOLOGY</span> <br></br>
       <span> Address :Bahu Bazaar - Lowadih Bypass Rd, Bel Bagan, Samlong, Ranchi, Jharkhand-834010</span><br></br>
       <span> Phone No. : 9431325455, 9304066022</span><br></br>
        E-mail : gitranchi@gmail.com
      </div>
    </div>
  );
}
