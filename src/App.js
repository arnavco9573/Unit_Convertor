import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import UnitConvertor from './components/UnitConvertor';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/unit-conversion" element={<UnitConvertor />} /> {/* Corrected component name */}
      </Routes>
    </div>
  );
}

export default App;
