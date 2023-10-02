import { useEffect, useState } from "react";
import "./App.css";
import Spin from "./components/Spin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <div>
        <Spin />
      </div>
    </>
  );
}

export default App;
