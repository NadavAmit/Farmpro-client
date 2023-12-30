import React, { useState, useEffect } from "react";
import useLands from "./hooks/useLands";
import Topbar from "./components/Global/Topbar";
import SideBar from "./components/Global/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar/>
      <main className="content">
        <Topbar/>
      </main>
    </div>
  );
}

export default App;
