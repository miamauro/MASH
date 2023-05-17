import React from "react";
import { useNavigate } from "react-router-dom";

const Story = () => {
  const navigate = useNavigate();
  const playAgain = (event) => {
    navigate("/home");
  };
  var mash = localStorage.getItem("mash");
  var spouseName = localStorage.getItem("spouse");
  var state = localStorage.getItem("state");
  var occupation = localStorage.getItem("career");
  var kidsNumber = localStorage.getItem("kids");
  var carColor = localStorage.getItem("color");
  var carType = localStorage.getItem("car");

  return (
    <>
      <p>
        You will live in a {mash} in {state} with your spouse, {spouseName}.
        You'll make ___ (salary)/year as a {occupation} after graduating from
        ___ (college). You'll have {kidsNumber} kids and a pet ___ named ___.
        You'll drive a {carColor} {carType}, and your family will vacation in
        ___ (destination) every year.
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
