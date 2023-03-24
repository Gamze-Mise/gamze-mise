import React, { useMemo, useState } from "react";
export const Lowprop = () => {
  const [val, setVal] = useState("");
  const [val1, setVal1] = useState("1");

  function calculateFib(n) {
    return n <= 1 ? n : calculateFib(n - 1) + calculateFib(n - 2);
  }

  const fibNumber = useMemo(() => {
    return calculateFib(parseInt(val1));
  }, [val1]);

  console.log(fibNumber);

  return (
    <div>
      <label> Fibonacci</label>
      <input
        type="text"
        onChange={(e) => {
          setVal1(e.target.value);
        }}
      />
      <br />
      <label> Sonuç</label>

      <label htmlFor="">{fibNumber}</label>
      <br />
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </div>
  );
};
export default Lowprop;
