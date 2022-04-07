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
          position: "absolute",
          bottom: "0",
          display: "flex",
          flexDirection: "column",
          width: "30%",
          height: "30%",
          backgroundColor: "#bfc1c2",
          justifyContent: "center",

          boxShadow: "3px solid #8AC007",
          fontStyle: "oblique",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h4 style={{color:"green",}}>GYANODAYA INSTITUTE OF TECHNOLOGY</h4>
          <p>
            <strong> Address </strong>: Bahu Bazaar - Lowadih Bypass Rd, Bel
            Bagan,<br></br> Samlong, Ranchi, Jharkhand-834010
          </p>
          <p>
            <strong> Phone No. </strong> : 9431325455, 9304066022
          </p>
          <strong>E-mail </strong> : gitranchi@gmail.com
        </div>
      </div>
    </div>
  );
}
