import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
import Game from "./components/pages/Game/Game";
import Story from "./components/pages/Story/Story";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/story" element={<Story />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
