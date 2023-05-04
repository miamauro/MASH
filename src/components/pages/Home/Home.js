import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const startGame = (event) => {
    navigate("/game");
  };
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button
        type="submit"
        className="btn btn-primary mb-3"
        onClick={startGame}
      >
        Let's Play!
      </button>
    </>
  );
};

export default Home;
