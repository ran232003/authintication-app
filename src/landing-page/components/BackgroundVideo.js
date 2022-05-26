import React from "react";
import { Button } from "react-bootstrap";
import "./BackgroundVideo.css"
import { useNavigate } from "react-router-dom";
const BackgroundVideo = (props)=>{
    const navigate = useNavigate();
    const handleStarted = (e)=>{
        e.preventDefault();
        navigate("/sign-up");
    }
    const handleLogin = (e)=>{
        e.preventDefault();
        navigate("/login");
    }
    return(
        <div className = "hero-container">
          <video src='videos/video-1.mp4'  autoPlay loop muted />
          <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleStarted}
        >
          GET STARTED
        </Button>
        <Button  variant="light"
          className='btns'
          onClick={handleLogin}
        >
          LOGIN <i className='far fa-play-circle' />
        </Button>
      </div>
        </div>
    )
}
export default BackgroundVideo