import React, { lazy, Suspense } from "react";
import "./App.css";
import Login from "./components/Login";
import { Register } from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Protected from "./Protected";
import Navbar from "./components/Navbar";
// import Table from "./components/Table";
import UseID from "./components/UseID";
import Batching from "./components/Batching";
import Transition from "./components/Transition";

const HomeTable = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/Table"));
    }, 3000);
  });
});

const loader = {
  border: "16px solid #f3f3f3",
  borderTop: "16px solid #3498db",
  borderRadius: "50%",
  width: "12px",
  height: "12px",
  animation: "spin 2s linear infinite",
};


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/table"
              element={<Protected Component={HomeTable} />}
            />
            <Route path="/useID" element={<Protected Component={UseID} />} />
            <Route
              path="/batching"
              element={<Protected Component={Batching} />}
            />
            <Route
              path="/transition"
              element={<Protected Component={Transition} />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
