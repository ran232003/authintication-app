import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css"
const NavigationBar = (props)=>{

    return(
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className="cont">
  <Navbar.Brand >Auth-App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">SignUp</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavigationBar