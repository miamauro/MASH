import React from "react";
import { useNavigate } from "react-router-dom";

const Story = () => {
  const navigate = useNavigate();
  const playAgain = (event) => {
    navigate("/home");
  };
  var mash = localStorage.getItem("mash");
  var spouseName = localStorage.getItem("spouse");
  var animal = localStorage.getItem("animal");
  var salary = localStorage.getItem("salary");
  var state = localStorage.getItem("state");
  var occupation = localStorage.getItem("career");
  var kidsNumber = localStorage.getItem("kids");
  var destination = localStorage.getItem("destination");
  var carColor = localStorage.getItem("color");
  var school = localStorage.getItem("school");
  var carType = localStorage.getItem("car");
  var name = localStorage.getItem("name");

  return (
    <>
      <p>
        You will live in a {mash} in {state} with your spouse, {spouseName}.
        You'll make ${salary}/year as a {occupation} after graduating from
        {school}. You'll have {kidsNumber} kids and a pet {animal} named {name}.
        You'll drive a {carColor} {carType}, and your family will vacation in
        {destination} every year.
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
