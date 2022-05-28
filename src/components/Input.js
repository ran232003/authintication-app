import React from "react";
import { Button, Form } from "react-bootstrap";

const Input = (props)=>{
    const{placeHolder,type,lable} = props;
    return(
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{lable}</Form.Label>
    <Form.Control type={type} placeholder={placeHolder} />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>
 
</Form>
        </div>
    )
}
export default Input;