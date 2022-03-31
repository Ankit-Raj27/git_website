import React from "react";
export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        width: "100%",
        height: "100%",
        backgroundColor: "#D3D3D3",
      }}
    >
      <form style={{
        display:"flex",
        flexDirection:"column",
        
      }}>
        <div style={{
          marginBottom:"10px",
        }}>
          <label>
            Name &nbsp;: &nbsp;
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </div>
        
        <div>
          <label>
            Name &nbsp;: &nbsp;
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </div>
      </form>

    </div>
  );
}
