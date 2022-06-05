import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap";
const LogOut = (props)=>{
    const{showInit} = props;
const[show,setShow] = useState(showInit)
    const handleClose = ()=>{
        console.log("s")
    }
    return(
        <div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want To Logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
export default LogOut;

