import React from "react";
import { ReactDOM } from "react-dom";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      
      
    </>
  );
}

export default App;
