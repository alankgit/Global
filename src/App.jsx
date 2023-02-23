import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Find } from "./components/Find";
import { Home } from "./components/Home";
import { Header } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/find' element={<Find />} />
      </Routes>
    </>
  );
}

export default App;
