import * as React from "react";
import { useState,useEffect } from "react";
import { Navigate , useNavigate} from "react-router-dom";

export  const  NavigateExm = ({}) => {
  const navigate = useNavigate();
const [git, setGit] = useState('');
useEffect(() => {
  if (git==true) {
    navigate("/");
  }
}, [git]);
  return (   
    <div>
      Navigate page
      <br /><br />
   
      <button  onClick={() => {
          setGit(true);
      }}
      >
        Home için Bana Çift Tıkla
      </button><br />
      <br></br>
      <button  onClick={() => {
            <Navigate to="/about" />
      }}
      >
        About için Bana Tıkla
      </button>
      <br />
      
      </div>
  )
}


export default NavigateExm;


