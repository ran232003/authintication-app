import React from "react";
import { useLocation } from "react-router-dom";

const HomePage = (props)=>{
    const { state } = useLocation();
    const checkingSignUp = ()=>{
      if(!state){
          console.log("in if",state);
      }
      else{
          console.log(state);
      }
      
    }

    return(
        <div>
                welcome
        </div>
    )
}

export default HomePage;