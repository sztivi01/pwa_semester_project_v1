
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Registration from "./routes/Registration";
import Dashboard from "./routes/Dashboard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route exact path="/" element={<Navigate to="/registration"/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
