import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {QueryClientProvider,QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Login from "./routes/Login";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoutes from './routes/PublicRoutes';
import Registration from "./routes/Registration";
import DashboardHome from "./pages/Dashboard/Dashboard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Navbar from "./components/Navbar"
import Settings from "./pages/SettingsPage/Settings";
import './App.css';
import ListOfTaskByProjectId from "./pages/SpecProject/ListOfTaskByProjectId";

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
        <Route path="/" element={<><Navbar/><ProtectedRoutes/></>}>
          <Route path="/dashboard" element={<DashboardHome/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/project/:projectId/tasks" element={<ListOfTaskByProjectId />} />
        </Route>
        </Routes>
      </DndProvider>
    </div>
            <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
