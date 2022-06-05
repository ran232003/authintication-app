import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const HomePage = (props)=>{
    const { state } = useLocation();
    const navigate = useNavigate()
   console.log(state)
    if(!state){
        return <Navigate to="/"  replace />;

    }
    else{
    return(
        <div>
                welcome
        </div>
    )}
}

export default HomePage;