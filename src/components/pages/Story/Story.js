import React from "react";
import { useNavigate } from "react-router-dom";
import "../Story/Story.css";

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
    <div className="container story vh-75">
      <p>
        You will live in a/an <span id="mash">{mash}</span> in <span id="state">{state}</span> with your spouse, <span id="spouse">{spouseName}</span>.
        You'll make <span id="salary">${salary}/year</span> as a/an <span id="occupation">{occupation}</span> after graduating from{" "}
        <span id="school">{school}</span>. You'll have <span id="kids">{kidsNumber}</span> kids and a pet <span id="animal">{animal}</span> named <span id="name">{name}</span>.
        You'll drive a/an <span id="carColor">{carColor}</span> <span id="car">{carType}</span>, and your family will vacation in{" "}
        <span id="destination">{destination}</span> every year.
      </p>
      <button
        type="submit"
        className="blue-btn btn btn-primary mb-3"
        onClick={playAgain}
      >
        Play Again
      </button>
    </div>
  );
};

export default Story;
