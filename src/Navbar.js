import React from "react";
import logo from './img/logo192.png'
import './index.css'

 function Navbar(){
  return(
  <nav>
    <img src={logo} alt="icon" ></img>
    <h3>ReactFacts</h3>
    <h4>React caourse - projet 1</h4>
  </nav>
  )
}

export default  Navbar