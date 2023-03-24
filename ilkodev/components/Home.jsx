import React from "react";
import { Link } from "react-router-dom";

export const Home = ({}) => {
  return (
    <div className="App">
      <h2>Home</h2>
      <Link to="/about"> Go to About</Link>
    </div>
  );
};
export default Home;
