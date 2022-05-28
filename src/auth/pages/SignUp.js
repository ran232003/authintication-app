import React from "react";
import { Button } from "react-bootstrap";
import Headline from "../../components/Headline";
import Input from "../../components/Input";
import GoogleButton from 'react-google-button'
import "./SignUp.css";
const SignUp = (props)=>{

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
                />
                 <Input
                lable = "Email Address"
                type = "email"
                placeHolder = "Enter First Name"
                />
                 <Input
                lable = "Password"
                type = "password"
                placeHolder = "Password"
                />
                
            </div>
            <div className="buttons-flex">
            <Button variant="primary" type="submit">
                Submit
             </Button>
             <GoogleButton className="google"/>
            </div>
            
        </div>
        </div>
    )
}
export default SignUp;