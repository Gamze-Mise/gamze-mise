import React, { useContext, useState } from "react";
import Mynumber from "../context/number.jsx";

export const Lowprop2 = ({}) => {
  const { number } = useContext(Mynumber);
  return (
    <div className="App">
      <h2>Lowprop2 Sayısı</h2>
      <p>{number}</p>
    </div>
  );
};
export default Lowprop2;
