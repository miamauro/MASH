import { useState, React } from "react";
import "./Game.css";

function Game() {
  const [spouse, setSpouse] = useState([]);
  const [spouse1, setSpouse1] = useState("");
  const [spouse2, setSpouse2] = useState("");
  const [spouse3, setSpouse3] = useState("");
  const [spouse4, setSpouse4] = useState("");
  const [career, setCareer] = useState([]);
  const [career1, setCareer1] = useState("");
  const [career2, setCareer2] = useState("");
  const [career3, setCareer3] = useState("");
  const [career4, setCareer4] = useState("");

  const addSpouse = (spouse1, spouse2, spouse3, spouse4) => {
    setSpouse([spouse1, spouse2, spouse3, spouse4]);
  };
  const addCareer = (career1, career2, career3, career4) => {
    setCareer([career1, career2, career3, career4]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSpouse(spouse1, spouse2, spouse3, spouse4);
    addCareer(career1, career2, career3, career4);

    const generateRandomSpouse = () => {
      var randomSpouse = parseInt(Math.random() * 4, 10);
      var selectedSpouse = spouse[randomSpouse];
      localStorage.setItem("spouse", JSON.stringify(selectedSpouse));
    };
    const generateRandomCareer = () => {
      var randomCareer = parseInt(Math.random() * 4, 10);
      var selectedCareer = career[randomCareer];
      localStorage.setItem("career", JSON.stringify(selectedCareer));
    };

    generateRandomSpouse();
    generateRandomCareer();
  };

  return (
    <>
      <form className="mb-3 container" id="inputSpouses">
        <div className="col-6 mx-auto">
          <label for="inputSpouses" className="form-label">
            Enter 4 Spouses:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="spouse1"
            value={spouse1}
            onChange={(event) => setSpouse1(event.target.value)}
            aria-describedby="spouse1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="spouse2"
            value={spouse2}
            onChange={(event) => setSpouse2(event.target.value)}
            aria-describedby="spouse2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="spouse3"
            value={spouse3}
            onChange={(event) => setSpouse3(event.target.value)}
            aria-describedby="spouse3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="spouse4"
            value={spouse4}
            onChange={(event) => setSpouse4(event.target.value)}
            aria-describedby="spouse4"
          />
        </div>
        <a type="submit" class="btn btn-primary mb-3" href="#inputCareers">
          Submit
        </a>
      </form>

      <form className="mb-3 container" id="inputCareers">
        <div className="col-6 mx-auto">
          <label for="inputCareers" className="form-label">
            Enter 4 Careers:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="career1"
            value={career1}
            onChange={(event) => setCareer1(event.target.value)}
            aria-describedby="career1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="career2"
            value={career2}
            onChange={(event) => setCareer2(event.target.value)}
            aria-describedby="career2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="career3"
            value={career3}
            onChange={(event) => setCareer3(event.target.value)}
            aria-describedby="career3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="career4"
            value={career4}
            onChange={(event) => setCareer4(event.target.value)}
            aria-describedby="career4"
          />
        </div>
        <a type="submit" class="btn btn-primary mb-3" href="#inputKids">
          Submit
        </a>
      </form>
      <form className="mb-3 container" id="inputKids">
        <div className="col-6 mx-auto">
          <label for="inputKids" className="form-label">
            Enter 4 Numbers:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="kids1"
            aria-describedby="kids1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="kids2"
            aria-describedby="kids2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="kids3"
            aria-describedby="kids3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="kids4"
            aria-describedby="kids4"
          />
        </div>
        <a type="submit" class="btn btn-primary mb-3" href="#inputCars">
          Submit
        </a>
      </form>
      <form className="mb-3 container" id="inputCars">
        <div className="col-6 mx-auto">
          <label for="inputCars" className="form-label">
            Enter 4 Cars:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="cars1"
            aria-describedby="cars1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="cars2"
            aria-describedby="cars2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="cars3"
            aria-describedby="cars3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="cars4"
            aria-describedby="cars4"
          />
        </div>
        {/* {spouse[generateRandomNumber()]} */}
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={handleSubmit}
        >
          Write My Story
        </button>
      </form>
    </>
  );
}

export default Game;
