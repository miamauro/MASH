import React from "react";
import { useNavigate } from "react-router-dom";
import "../Home/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const startGame = (event) => {
    navigate("/game");
  };
  return (
    <div className="container vh-75 intro">
      <p>
        For all the <span id="kids-color">90s kids</span>, this game will bring
        you back to <span id="sleepovers">sleepovers</span> with your friends, deciding your future with a
        paper, pencil, and the process of elimination. This version of MASH
        brings the <span id="nostalgic">nostalgic</span> experience right to your fingertips! Proceed
        through the prompts and at the end, the game will determine your <span id="fate">fate</span>!
      </p>
      <button
        type="submit"
        className="blue-btn btn btn-primary mb-3"
        onClick={startGame}
      >
        Let's Play!
      </button>
    </div>
  );
};

export default Home;
