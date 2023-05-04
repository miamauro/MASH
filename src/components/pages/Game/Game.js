import React from "react";

function Game() {
  return (
    <>
      <form>
        <div className="mb-3 container">
          <div className="col-6 mx-auto">
            <label for="inputSpouses" className="form-label">
              Enter 4 Spouses:
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="spouse1"
              aria-describedby="spouse1"
            />
            <input
              type="text"
              className="form-control mb-3"
              id="spouse2"
              aria-describedby="spouse2"
            />
            <input
              type="text"
              className="form-control mb-3"
              id="spouse3"
              aria-describedby="spouse3"
            />
            <input
              type="text"
              className="form-control mb-3"
              id="spouse4"
              aria-describedby="spouse4"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary mb-3">
          Submit
        </button>
      </form>
      <form>
        <div className="mb-3 container">
          <div className="col-6 mx-auto">
            <label for="inputCareers" className="form-label">
              Enter 4 Careers:
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="career1"
              aria-describedby="career1"
            />
            <input
              type="text"
              className="form-control mb-3"
              id="career2"
              aria-describedby="career2"
            />
            <input
              type="text"
              className="form-control mb-3"
              id="career3"
              aria-describedby="career3"
            />
            <input
              type="text"
              className="form-control mb-3"
              id="career4"
              aria-describedby="career4"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
      <form>
        <div className="mb-3 container">
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
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
      <form>
        <div className="mb-3 container">
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
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Write My Story
        </button>
      </form>
    </>
  );
}

export default Game;
