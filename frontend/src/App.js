import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login  from "./routes/Login";
import Registration  from "./routes/Registration";
import Dashboard  from "./routes/Dashboard";





function App() {
  return (
    <div>
          <Routes>
            <Route path="/login" element={ <Login />}/>
            <Route path="/registration" element={<Registration />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
    </div>
  );
}

export default App;
