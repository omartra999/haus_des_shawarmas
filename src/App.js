import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Menu, AboutUs, Kontakt, ImpressumPage } from './pages'; // Make sure these components are properly exported from './pages'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path= "/Impressum" element={<ImpressumPage />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
