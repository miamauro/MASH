import React from "react";
import { useNavigate } from "react-router-dom";

const Story = () => {
  const navigate = useNavigate();
  const playAgain = (event) => {
    navigate("/");
  };
  var mash = localStorage.getItem("mash").replace(/['"]/g, "");
  var spouseName = localStorage.getItem("spouse").replace(/['"]/g, "");
  var animal = localStorage.getItem("animal").replace(/['"]/g, "");
  var salary = localStorage.getItem("salary").replace(/['"]/g, "");
  var state = localStorage.getItem("state").replace(/['"]/g, "");
  var occupation = localStorage.getItem("career").replace(/['"]/g, "");
  var kidsNumber = localStorage.getItem("kids").replace(/['"]/g, "");
  var destination = localStorage.getItem("destination").replace(/['"]/g, "");
  var carColor = localStorage.getItem("color").replace(/['"]/g, "");
  var school = localStorage.getItem("school").replace(/['"]/g, "");
  var carType = localStorage.getItem("car").replace(/['"]/g, "");
  var name = localStorage.getItem("name").replace(/['"]/g, "");

  return (
    <>
      <p>
        You will live in a/an {mash} in {state} with your spouse, {spouseName}.
        You'll make ${salary}/year as a/an {occupation} after graduating from{" "}
        {school}. You'll have {kidsNumber} kids and a pet {animal} named {name}.
        You'll drive a/an {carColor} {carType}, and your family will vacation in{" "}
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
