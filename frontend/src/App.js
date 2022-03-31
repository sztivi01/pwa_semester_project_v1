import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login  from "./routes/Login";
import Registration  from "./routes/Registration";




function App() {
  return (
    <div>
          <Routes>
            <Route path="/login" element={ <Login />}/>
            <Route path="/registration" element={<Registration />}/>
          </Routes>
    </div>
  );
}

export default App;
