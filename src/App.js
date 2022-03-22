import "./App.css";
import Header from "./Pages/header";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Contacts from "./Pages/Contacts";
import Login from "./Pages/Login";
import Admission from "./Pages/Admission";
import Results from "./Pages/Results";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* This header will appear on all the pages */}
      <Header />

      {/* These are the routes. */}
      <div
        className="main-content"
        style={{ width: "90%", alignSelf: "center",marginTop: '25px' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Contacts" element={<Contacts/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Admission" element={<Admission/>} />
          <Route path="/Results" element={<Results/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
