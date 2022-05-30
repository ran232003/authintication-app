import React from "react";
import { Button } from "react-bootstrap";
import Headline from "../../components/Headline";
import Input from "../../components/Input";
import GoogleButton from 'react-google-button'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

import "./SignUp.css";
const SignUp = (props)=>{
    const test = '973904381117-45ognoieo8hqu6sk3us02poi78hk8mid.apps.googleusercontent.com';
const success = (result)=>{
    console.log(result)

}
const faill = (result)=>{
    console.log(result)

}
const logout = (result)=>{
    console.log("log",result)

}
    return(
        <div className = "allScreen">
            
        <div className="signup">
        <div className = "centerText">
                <Headline
                lable = "Sign Up"
                />
            </div>
            <div className="inputs">
                <Input
                lable = "Full Name"
                type = "text"
                placeHolder = "Enter Full Name"
                errorMessage = "Requierd"
                />
                 <Input
                lable = "Email Address"
                type = "email"
                placeHolder = "Enter First Name"
                errorMessage = "Requierd"
                />
                 <Input
                lable = "Password"
                type = "password"
                placeHolder = "Enter Password"
                errorMessage = "Requierd"
                />
                
            </div>
            <div className="buttons-flex">
     
            <Button variant="primary" type="submit">
                Submit
             </Button>
             <GoogleLogin
            clientId={test}
                buttonText="Login"
                onSuccess={success}
                onFailure={faill}
                cookiePolicy={'single_host_origin'}
  />
           <GoogleLogout
      clientId={test}
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
            </div>
            
        </div>
        </div>
    )
}
export default SignUp;