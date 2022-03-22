import React from "react";
export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: "1",
        width: "100%",
        height: "100%",
      }}
    > 
              <form>
        <label>
          Name &nbsp;: &nbsp; 
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form>
        <label>
          Name &nbsp;: &nbsp; 
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
    </div>
    );
  }
  