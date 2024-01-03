import React, { Suspense } from "react";
import Topbar from "./components/Global/Topbar";
import SideBar from "./components/Global/SideBar";
import "./App.scss";
import { Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FieldCreatePage from "./pages/FieldCreatePage";
import Fields from "./pages/Fields";
import FieldManagement from "./pages/FieldManagement";
import { Typography } from "@mui/material";
import NotFoundPage from "./pages/NotFoundPage";
import IncomesAndExpenses from "./pages/IncomesAndExpenses";

function App() {
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/field" element={<Fields />}></Route>
          <Route path="/field/create" element={<FieldCreatePage />}></Route>
          <Route path="/field/:id" element={<FieldManagement/>} />
          <Route path="/incomes-expenses" element={<IncomesAndExpenses />}></Route>

          <Route path="*" element={ <Navigate to="/404" replace />} />
          <Route path="/404" element={ <NotFoundPage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
