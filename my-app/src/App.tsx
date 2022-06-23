import React from 'react';
import logo from './logo.svg';
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Setting from './components/Setting/Setting';
import TicketManager from './components/TicketManager/TicketManager';
import TicketChange from "./components/TicketChange/TicketChange";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/manager-ticket" element={<TicketManager />} />
          <Route path="/change-ticket" element={<TicketChange />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
