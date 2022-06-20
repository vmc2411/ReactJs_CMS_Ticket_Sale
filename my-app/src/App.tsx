import React from 'react';
import logo from './logo.svg';
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Setting from './components/Setting/Setting';
import TicketManage from "./components/TicketManage/TicketManage";
import TicketChange from "./components/TicketChange/TicketChange";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/manage-ticket" element={<TicketManage />} />
          <Route path="/change-ticket" element={<TicketChange />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
