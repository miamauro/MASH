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
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display&display=swap');
        </style>
        <Header />
        <Routes>
          <Route exact path="/MASH" element={<Home />} />
          <Route exact path="/MASH/game" element={<Game />} />
          <Route exact path="/MASH/story" element={<Story />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
