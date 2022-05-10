import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {QueryClientProvider,QueryClient} from 'react-query';
import Login from "./routes/Login";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoutes from './routes/PublicRoutes';
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
          <Route path="/" element={<PublicRoutes/>}>
          <Route exact path="/" element={<Navigate to="/registration" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>

        <Route path="/" element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/specproject" element={<SpecProject />} />
        </Route>
        </Routes>
      </DndProvider>
    </div>
    </QueryClientProvider>
  );
}

export default App;
