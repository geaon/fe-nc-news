import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./css_files/App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
