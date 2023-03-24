import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Blogs = ({}) => {
  let { id } = useParams();
  return (
    <div className="App">
      <h2>Blogs</h2>
      <p>benim id : {id}</p>
      <Link to="/"> Go to Home</Link>
    </div>
  );
};
export default Blogs;
