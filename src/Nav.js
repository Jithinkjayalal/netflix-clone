import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflix_logo from './assets/netflix_logo_image.png';
import { useNavigate } from "react-router-dom";

function Nav() {
    const [show,handleShow]=useState(false);
    const navigate=useNavigate();

    const transitionNavBar=()=>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
        return()=>window.removeEventListener('scroll',transitionNavBar)
    },[])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_content">
        <img
        onClick={()=>{navigate("/")}}
          className="nav_logo"
          src={netflix_logo}
          alt=""
        />
        <img
        onClick={()=>{navigate("/profile")}}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
