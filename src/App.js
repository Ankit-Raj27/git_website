import './App.css';
import Header from './components/header'; 
import { Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {/* This header will appear on all the pages */} 
      <Header/> 

      {/* These are the routes. */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
