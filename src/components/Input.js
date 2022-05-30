import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { checkInput } from "../HelperFunc";

const Input = (props)=>{
    const{placeHolder,type,lable,errorMessage} = props;
    const[input,setInput] = useState({
       value:"",
       valid:false,
       count:0 
    })
    const handleInput = (e)=>{
        console.log(e.target.value);
       let value = e.target.value.trim();
        const valid = checkInput(lable,value);
       const count = 1;
        setInput(()=>{
            return {count,valid,value}
        })
    }
    const onInput = ()=>{
        
    }
    console.log(input);
    return(
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{lable}</Form.Label>
    <Form.Control type={type} placeholder={placeHolder} onChange={handleInput}  isInvalid = {!input.valid} onBlur={onInput}/>
   
    <Form.Control.Feedback type="invalid">
              {errorMessage}
            </Form.Control.Feedback>
  </Form.Group>
 
</Form>
        </div>
    )
}
export default Input;