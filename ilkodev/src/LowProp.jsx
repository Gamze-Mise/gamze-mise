import React, { useContext, useState } from "react";
import Mynumber from "../context/number.jsx";

export const Lowprop = ({}) => {
  const { number, setNumber } = useContext(Mynumber);
  return (
    <div className="App">
      <h2>Sayı</h2>
      <p>{number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Arttır
      </button>
    </div>
  );
};
export default Lowprop;
