import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";

function Home() {
  const [number, setNumber] = useState("");
  const [attempt, setAttempt] = useState("");
  const [correctNumber, setCorrectNumber] = useState(
    Math.floor(Math.random() * 100 + 1)
  );

  let counter = 4;
  counter--;
  const losing = () => {
    if (attempt == 4) {
      counter = 0;
    } else {
      console.log("go on");
    }
  };

  const winning = () => {
    if (number === correctNumber) {
      console.log("you win");
    } else {
      console.log("Try again");
    }
  };

  return (
    <div className="div">
      <h1 className="text"> Guess The Number Game! </h1>
      <img
        className="img"
        src="https://images.unsplash.com/photo-1502570149819-b2260483d302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bnVtYmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt="Numbers"
      />
      <p className="para">
        How close your guessing would be? Pick one of the numbers below and
        let's see
      </p>
      <h2 className="text"> enjoy!</h2>

      <input
        type="number"
        className="input"
        onChange={(event) => setNumber(event.target.value)}
      />
      <br />
      <button className="button" onClick={winning}>
        {"New Batch"}
      </button>
      <button className="button" onClick={losing}>
        {"Submit"}
      </button>
    </div>
  );
}

export default Home;
