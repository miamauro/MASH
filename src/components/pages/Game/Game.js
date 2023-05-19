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
  const [animal, setAnimal] = useState([]);
  const [animal1, setAnimal1] = useState("");
  const [animal2, setAnimal2] = useState("");
  const [animal3, setAnimal3] = useState("");
  const [animal4, setAnimal4] = useState("");
  const [salary, setSalary] = useState([]);
  const [salary1, setSalary1] = useState("");
  const [salary2, setSalary2] = useState("");
  const [salary3, setSalary3] = useState("");
  const [salary4, setSalary4] = useState("");
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
  const [destination, setDestination] = useState([]);
  const [destination1, setDestination1] = useState("");
  const [destination2, setDestination2] = useState("");
  const [destination3, setDestination3] = useState("");
  const [destination4, setDestination4] = useState("");
  const [school, setSchool] = useState([]);
  const [school1, setSchool1] = useState("");
  const [school2, setSchool2] = useState("");
  const [school3, setSchool3] = useState("");
  const [school4, setSchool4] = useState("");
  const [car, setCar] = useState([]);
  const [car1, setCar1] = useState("");
  const [car2, setCar2] = useState("");
  const [car3, setCar3] = useState("");
  const [car4, setCar4] = useState("");
  const [name, setName] = useState([]);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");

  const addSpouse = (spouse1, spouse2, spouse3, spouse4) => {
    setSpouse([spouse1, spouse2, spouse3, spouse4]);
  };
  const addAnimal = (animal1, animal2, animal3, animal4) => {
    setAnimal([animal1, animal2, animal3, animal4]);
  };
  const addSalary = (salary1, salary2, salary3, salary4) => {
    setSalary([salary1, salary2, salary3, salary4]);
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
  const addDestination = (
    destination1,
    destination2,
    destination3,
    destination4
  ) => {
    setDestination([destination1, destination2, destination3, destination4]);
  };
  const addSchool = (school1, school2, school3, school4) => {
    setSchool([school1, school2, school3, school4]);
  };
  const addCar = (car1, car2, car3, car4) => {
    setCar([car1, car2, car3, car4]);
  };
  const addName = (name1, name2, name3, name4) => {
    setName([name1, name2, name3, name4]);
  };

  const writeStory = (event) => {
    // event.preventDefault();
    addSpouse(spouse1, spouse2, spouse3, spouse4);
    addAnimal(animal1, animal2, animal3, animal4);
    addSalary(salary1, salary2, salary3, salary4);
    addState(state1, state2, state3, state4);
    addCareer(career1, career2, career3, career4);
    addKids(kids1, kids2, kids3, kids4);
    addColor(color1, color2, color3, color4);
    addDestination(destination1, destination2, destination3, destination4);
    addSchool(school1, school2, school3, school4);
    addCar(car1, car2, car3, car4);
    addName(name1, name2, name3, name4);

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

    const generateRandomAnimal = () => {
      var randomAnimal = parseInt(Math.random() * 4, 10);
      var selectedAnimal = animal[randomAnimal];
      localStorage.setItem("animal", JSON.stringify(selectedAnimal));
    };

    const generateRandomSalary = () => {
      var randomSalary = parseInt(Math.random() * 4, 10);
      var selectedSalary = salary[randomSalary];
      localStorage.setItem("salary", JSON.stringify(selectedSalary));
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

    const generateRandomDestination = () => {
      var randomDestination = parseInt(Math.random() * 4, 10);
      var selectedDestination = destination[randomDestination];
      localStorage.setItem("destination", JSON.stringify(selectedDestination));
    };

    const generateRandomSchool = () => {
      var randomSchool = parseInt(Math.random() * 4, 10);
      var selectedSchool = school[randomSchool];
      localStorage.setItem("school", JSON.stringify(selectedSchool));
    };

    const generateRandomCar = () => {
      var randomCar = parseInt(Math.random() * 4, 10);
      var selectedCar = car[randomCar];
      localStorage.setItem("car", JSON.stringify(selectedCar));
    };

    const generateRandomName = () => {
      var randomName = parseInt(Math.random() * 4, 10);
      var selectedName = name[randomName];
      localStorage.setItem("name", JSON.stringify(selectedName));
    };

    generateRandomMash();
    generateRandomSpouse();
    generateRandomAnimal();
    generateRandomSalary();
    generateRandomState();
    generateRandomCareer();
    generateRandomKids();
    generateRandomColor();
    generateRandomDestination();
    generateRandomSchool();
    generateRandomCar();
    generateRandomName();
  };

  const navigate = useNavigate();
  const showStory = (event) => {
    writeStory();
    navigate("/story");
  };

  return (
    <>
      <form className="mb-3 container input-form" id="inputSpouses">
        {/* <div className="row-6 test"> */}
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
        {/* </div> */}
        <a
          type="button"
          className="blue-btn btn form-btn btn-primary mb-3"
          href="#inputAnimals"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container input-form" id="inputAnimals">
        <div className="col-6 mx-auto">
          <label for="inputAnimals" className="form-label">
            Enter 4 Animals:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="animal1"
            value={animal1}
            onChange={(event) => setAnimal1(event.target.value)}
            aria-describedby="animal1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="animal2"
            value={animal2}
            onChange={(event) => setAnimal2(event.target.value)}
            aria-describedby="animal2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="animal3"
            value={animal3}
            onChange={(event) => setAnimal3(event.target.value)}
            aria-describedby="animal3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="animal4"
            value={animal4}
            onChange={(event) => setAnimal4(event.target.value)}
            aria-describedby="animal4"
          />
        </div>
        <a
          type="button"
          className="blue-btn btn btn-primary mb-3"
          href="#inputSalaries"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container input-form" id="inputSalaries">
        <div className="col-6 mx-auto">
          <label for="inputSalaries" className="form-label">
            Enter 4 Salaries:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="salary1"
            value={salary1}
            onChange={(event) => setSalary1(event.target.value)}
            aria-describedby="salary1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="salary2"
            value={salary2}
            onChange={(event) => setSalary2(event.target.value)}
            aria-describedby="salary2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="salary3"
            value={salary3}
            onChange={(event) => setSalary3(event.target.value)}
            aria-describedby="salary3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="salary4"
            value={salary4}
            onChange={(event) => setSalary4(event.target.value)}
            aria-describedby="salary4"
          />
        </div>
        <a
          type="button"
          className="blue-btn btn btn-primary mb-3"
          href="#inputStates"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container input-form" id="inputStates">
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
          className="blue-btn btn btn-primary mb-3"
          href="#inputCareers"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container input-form" id="inputCareers">
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
          className="blue-btn btn btn-primary mb-3"
          href="#inputKids"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container input-form" id="inputKids">
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
          className="blue-btn btn btn-primary mb-3"
          href="#inputDestinations"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container input-form" id="inputDestinations">
        <div className="col-6 mx-auto">
          <label for="inputDestinations" className="form-label">
            Enter 4 Destinations:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="destination1"
            value={destination1}
            onChange={(event) => setDestination1(event.target.value)}
            aria-describedby="destination1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="destination2"
            value={destination2}
            onChange={(event) => setDestination2(event.target.value)}
            aria-describedby="destination2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="destination3"
            value={destination3}
            onChange={(event) => setDestination3(event.target.value)}
            aria-describedby="destination3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="destination4"
            value={destination4}
            onChange={(event) => setDestination4(event.target.value)}
            aria-describedby="destination4"
          />
        </div>
        <a
          type="button"
          className="blue-btn btn btn-primary mb-3"
          href="#inputColors"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container input-form" id="inputColors">
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
          className="blue-btn btn btn-primary mb-3"
          href="#inputSchools"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container input-form" id="inputSchools">
        <div className="col-6 mx-auto">
          <label for="inputSchools" className="form-label">
            Enter 4 Universities:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="school1"
            value={school1}
            onChange={(event) => setSchool1(event.target.value)}
            aria-describedby="school1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="school2"
            value={school2}
            onChange={(event) => setSchool2(event.target.value)}
            aria-describedby="school2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="school3"
            value={school3}
            onChange={(event) => setSchool3(event.target.value)}
            aria-describedby="school3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="school4"
            value={school4}
            onChange={(event) => setSchool4(event.target.value)}
            aria-describedby="school4"
          />
        </div>
        <a
          type="button"
          className="blue-btn btn btn-primary mb-3"
          href="#inputCars"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container input-form" id="inputCars">
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
          className="blue-btn btn btn-primary mb-3"
          href="#inputNames"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <form className="mb-3 container input-form" id="inputNames">
        <div className="col-6 mx-auto">
          <label for="inputNames" className="form-label">
            Enter 4 Names:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="name1"
            value={name1}
            onChange={(event) => setName1(event.target.value)}
            aria-describedby="name1"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="name2"
            value={name2}
            onChange={(event) => setName2(event.target.value)}
            aria-describedby="name2"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="name3"
            value={name3}
            onChange={(event) => setName3(event.target.value)}
            aria-describedby="namecar3"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="name4"
            value={name4}
            onChange={(event) => setName4(event.target.value)}
            aria-describedby="name4"
          />
        </div>
        <a
          type="button"
          className="blue-btn btn btn-primary mb-3"
          href="#storyBtn"
          onClick={writeStory}
        >
          Submit
        </a>
      </form>
      <div className="container nextStory">
        <p>
          Now that you've entered all of your answers, are you ready to see
          what's next?
        </p>
        <button
          type="button"
          className="blue-btn btn btn-primary"
          id="storyBtn"
          onClick={showStory}
        >
          Write My Story
        </button>
      </div>
    </>
  );
}

export default Game;
