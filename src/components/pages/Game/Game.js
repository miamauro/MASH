import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";

function Game() {
  const mash = ["mansion", "apartment", "shack", "house"];
  const [spouse, setSpouse] = useState([]);
  const [spouse1, setSpouse1] = useState("");
  const [spouse2, setSpouse2] = useState("");
  const [spouse3, setSpouse3] = useState("");
  const [spouse4, setSpouse4] = useState("");
  const [state, setState] = useState([]);
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [career, setCareer] = useState([]);
  const [career1, setCareer1] = useState("");
  const [career2, setCareer2] = useState("");
  const [career3, setCareer3] = useState("");
  const [career4, setCareer4] = useState("");
  const [kids, setKids] = useState([]);
  const [kids1, setKids1] = useState("");
  const [kids2, setKids2] = useState("");
  const [kids3, setKids3] = useState("");
  const [kids4, setKids4] = useState("");
  const [color, setColor] = useState([]);
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [car, setCar] = useState([]);
  const [car1, setCar1] = useState("");
  const [car2, setCar2] = useState("");
  const [car3, setCar3] = useState("");
  const [car4, setCar4] = useState("");

  const addSpouse = (spouse1, spouse2, spouse3, spouse4) => {
    setSpouse([spouse1, spouse2, spouse3, spouse4]);
  };
  const addState = (state1, state2, state3, state4) => {
    setState([state1, state2, state3, state4]);
  };
  const addCareer = (career1, career2, career3, career4) => {
    setCareer([career1, career2, career3, career4]);
  };
  const addKids = (kids1, kids2, kids3, kids4) => {
    setKids([kids1, kids2, kids3, kids4]);
  };
  const addColor = (color1, color2, color3, color4) => {
    setColor([color1, color2, color3, color4]);
  };
  const addCar = (car1, car2, car3, car4) => {
    setCar([car1, car2, car3, car4]);
  };

  const writeStory = (event) => {
    // event.preventDefault();
    addSpouse(spouse1, spouse2, spouse3, spouse4);
    addState(state1, state2, state3, state4);
    addCareer(career1, career2, career3, career4);
    addKids(kids1, kids2, kids3, kids4);
    addColor(color1, color2, color3, color4);
    addCar(car1, car2, car3, car4);

    const generateRandomMash = () => {
      var randomMash = parseInt(Math.random() * 4, 10);
      var selectedMash = mash[randomMash];
      localStorage.setItem("mash", JSON.stringify(selectedMash));
    };

    const generateRandomSpouse = () => {
      var randomSpouse = parseInt(Math.random() * 4, 10);
      var selectedSpouse = spouse[randomSpouse];
      localStorage.setItem("spouse", JSON.stringify(selectedSpouse));
    };

    const generateRandomState = () => {
      var randomState = parseInt(Math.random() * 4, 10);
      var selectedState = state[randomState];
      localStorage.setItem("state", JSON.stringify(selectedState));
    };

    const generateRandomCareer = () => {
      var randomCareer = parseInt(Math.random() * 4, 10);
      var selectedCareer = career[randomCareer];
      localStorage.setItem("career", JSON.stringify(selectedCareer));
    };

    const generateRandomKids = () => {
      var randomKids = parseInt(Math.random() * 4, 10);
      var selectedKids = kids[randomKids];
      localStorage.setItem("kids", JSON.stringify(selectedKids));
    };

    const generateRandomColor = () => {
      var randomColor = parseInt(Math.random() * 4, 10);
      var selectedColor = color[randomColor];
      localStorage.setItem("color", JSON.stringify(selectedColor));
    };
    const generateRandomCar = () => {
      var randomCar = parseInt(Math.random() * 4, 10);
      var selectedCar = car[randomCar];
      localStorage.setItem("car", JSON.stringify(selectedCar));
    };

    generateRandomMash();
    generateRandomSpouse();
    generateRandomState();
    generateRandomCareer();
    generateRandomKids();
    generateRandomColor();
    generateRandomCar();
  };

  const navigate = useNavigate();
  const showStory = (event) => {
    writeStory();
    navigate("/story");
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
        <a
          type="button"
          class="btn btn-primary mb-3"
          href="#inputStates"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container" id="inputStates">
        <div className="col-6 mx-auto">
          <label for="inputStates" className="form-label">
            Enter 4 States:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="state1"
            value={state1}
            onChange={(event) => setState1(event.target.value)}
            aria-describedby="state1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="state2"
            value={state2}
            onChange={(event) => setState2(event.target.value)}
            aria-describedby="state2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="state3"
            value={state3}
            onChange={(event) => setState3(event.target.value)}
            aria-describedby="state3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="state4"
            value={state4}
            onChange={(event) => setState4(event.target.value)}
            aria-describedby="state4"
          />
        </div>
        <a
          type="button"
          class="btn btn-primary mb-3"
          href="#inputCareers"
          onClick={writeStory}
        >
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
        <a
          type="button"
          class="btn btn-primary mb-3"
          href="#inputKids"
          onClick={writeStory}
        >
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
            value={kids1}
            onChange={(event) => setKids1(event.target.value)}
            aria-describedby="kids1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="kids2"
            value={kids2}
            onChange={(event) => setKids2(event.target.value)}
            aria-describedby="kids2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="kids3"
            value={kids3}
            onChange={(event) => setKids3(event.target.value)}
            aria-describedby="kids3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="kids4"
            value={kids4}
            onChange={(event) => setKids4(event.target.value)}
            aria-describedby="kids4"
          />
        </div>
        <a
          type="button"
          class="btn btn-primary mb-3"
          href="#inputColors"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container" id="inputColors">
        <div className="col-6 mx-auto">
          <label for="inputColors" className="form-label">
            Enter 4 Colors:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="color1"
            value={color1}
            onChange={(event) => setColor1(event.target.value)}
            aria-describedby="color1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="color2"
            value={color2}
            onChange={(event) => setColor2(event.target.value)}
            aria-describedby="color2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="color3"
            value={color3}
            onChange={(event) => setColor3(event.target.value)}
            aria-describedby="color3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="color4"
            value={color4}
            onChange={(event) => setColor4(event.target.value)}
            aria-describedby="color4"
          />
        </div>
        <a
          type="button"
          class="btn btn-primary mb-3"
          href="#inputCars"
          onClick={writeStory}
        >
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
            id="car1"
            value={car1}
            onChange={(event) => setCar1(event.target.value)}
            aria-describedby="car1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="car2"
            value={car2}
            onChange={(event) => setCar2(event.target.value)}
            aria-describedby="car2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="car3"
            value={car3}
            onChange={(event) => setCar3(event.target.value)}
            aria-describedby="car3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="car4"
            value={car4}
            onChange={(event) => setCar4(event.target.value)}
            aria-describedby="car4"
          />
        </div>
        <a
          type="button"
          class="btn btn-primary mb-3"
          href="#inputCars"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <button
        type="button"
        className="btn btn-primary mb-3"
        onClick={showStory}
      >
        Write My Story
      </button>
    </>
  );
}

export default Game;
