import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const startGame = (event) => {
    navigate("/game");
  };
  return (
    <div className="container vh-75">
      <p>
        For all the 90s kids, this game will bring you back to sleepovers with
        your friends, deciding your future with a paper, pencil, and the process
        of elimination. This version of MASH brings the nostalgic experience
        right to your fingertips! Proceed through the prompts and at the end,
        the game will determine your fate!
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
