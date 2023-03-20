
import React, {useContext,useState} from "react";
import Mynumber from '../context/number.jsx';

export const Lowprop=  ({})=> {
    const {i}=useContext(Mynumber);
   
    const [mycount, setCount] = useState(i);
    const Increase=()=>{
        setCount(mycount+1);
      
    };
    return ( 
        <div className="App">
            <h2 >Sayı</h2>
            <p >{mycount}</p>
            <button onClick={Increase} >Arttır</button>
        </div>
     )
}
export default Lowprop;
