import React from "react";
import { useNavigate } from "react-router-dom";

const Story = () => {
  const navigate = useNavigate();
  const playAgain = (event) => {
    navigate("/home");
  };
  return (
    <>
      <p>
        You live in your ___ with your spouse, ___. You have ___ kids. You drive
        a ___.
      </p>
      <button
        type="submit"
        className="btn btn-primary mb-3"
        onClick={playAgain}
      >
        Play Again
      </button>
    </>
  );
};

export default Story;
