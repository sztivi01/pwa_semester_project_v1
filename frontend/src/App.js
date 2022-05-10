
import React from "react";
import { Routes, Route } from "react-router-dom";
import {QueryClientProvider,QueryClient} from 'react-query';
import { Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Registration from "./routes/Registration";
import Dashboard from "./routes/Dashboard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SpecProject from "./pages/SpecProject/SpecProject";

const queryClient = new QueryClient();
function App() {
  
  return (
    <QueryClientProvider client={queryClient}> 
    <div>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route exact path="/" element={<Navigate to="/registration"/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/specproject" element={<SpecProject />} />
        </Routes>
      </DndProvider>
    </div>
    </QueryClientProvider>
  );
}

export default App;
