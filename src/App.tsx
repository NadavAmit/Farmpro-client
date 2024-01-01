import React, { useState, useEffect } from "react";
import useLands from "./hooks/useLands";
import Topbar from "./components/Global/Topbar";
import SideBar from "./components/Global/SideBar";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Lands from "./pages/Lands";
import LandCreatePage from "./pages/LandCreatePage";

function App() {
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/land" element={<Lands />}>
            {/* <Route path="/land/create" element={<LandCreatePage />}>
            </Route> */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
