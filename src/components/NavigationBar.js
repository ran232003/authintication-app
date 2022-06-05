import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogOut from "../modal/LogOut";
import "./NavigationBar.css"
const NavigationBar = (props)=>{
  const[show,setShow] = useState(false)
    const loggedIn = useSelector((state)=>{
      return state.user.loggedIn;
    })
    const handleShow = ()=>{
      setShow(true);
    }
    console.log(loggedIn);
    return(
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className="cont">
  <Navbar.Brand as = {Link} to="/">Auth-App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
     
    </Nav>
    {loggedIn === true?
  <Nav>
  <Nav.Link onClick = {handleShow}>LogOut</Nav.Link>
      {show === true?<LogOut showInit = {show}/>:null}
</Nav> : 
<Nav>
      <Nav.Link as = {Link} to="/sign-up">SignUp</Nav.Link>
      <Nav.Link eventKey={2} as = {Link} to="/login">
        Login
      </Nav.Link>
    </Nav>
  }
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavigationBar