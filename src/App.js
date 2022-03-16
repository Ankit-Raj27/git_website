import "./App.css";
import Header from "./Pages/header";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
