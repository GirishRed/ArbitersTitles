import React from "react";
import "./styles.css";
import { useState } from "react";

const dataBase = {
  InternationalArbiter: [
    {
      name: "Vasant B H",
      Fideid: "Fide id : 25006606"
    },
    { name: "Gopakumar M S", Fideid: "Fide id : 5058287" },
    { name: "Beig, Saleem", Fideid: "Fide id : 25042050" },
    { name: "Promodraj Moree", Fideid: "Fide id : 25040316" }
  ],

  FideArbiter: [
    {
      name: "Ravi, Kiran D J",
      Fideid: "Fide id : 25015621"
    },
    {
      name: "Omkar S Dandoti",
      Fideid: "Fide id : 25637843"
    },
    {
      name: "Girish Reddy",
      Fideid: "Fide id : 25020269"
    },
    {
      name: "Sachin Bharani",
      Fideid: "Fide id : 25998994"
    }
  ],
  NationalArbiter: [
    {
      name: "Kori Amitanand",
      Fideid: "Fide id : 25087177"
    },
    {
      name: "Harish",
      Fideid: "Fide id : not-found"
    }
  ]
};

export default function App() {
  const [selectedArbiter, setArbiter] = useState("InternationalArbiter");
  function ArbiterClickHandler(Arbiter) {
    setArbiter(Arbiter);
  }
  return (
    <div className="App">
      <h1> Indian Chess Arbiters </h1>
      <p style={{ margin: "2rem" }}>
        Chess Arbiters: who conduct the chess tournament & solves issues between
        players, here we have 3 titles beginning from National Arbiter, then
        comes Fide Arbiter then the higher title is InternationalArbiter. We
        have many Arbiters in India here are few listed below..
      </p>

      <div>
        {Object.keys(dataBase).map((Arbiter) => (
          <button
            onClick={() => ArbiterClickHandler(Arbiter)}
            style={{
              margin: ".5rem",
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem"
            }}
          >
            {Arbiter}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center", width: "800px", margin: "0 auto" }}>
        <ul style={{}}>
          {dataBase[selectedArbiter].map((dataBase) => (
            <li
              key={dataBase.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid grey",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {dataBase.name} </div>
              <div style={{ fontSize: "smaller" }}> {dataBase.Fideid} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
