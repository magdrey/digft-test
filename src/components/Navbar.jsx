import React, {useState} from 'react';
import SearchLogo from "../img/Search-Icon.svg";
import logo from "../img/Logo.svg";
import {NavLink} from "react-router-dom";
import "./Navbar.css";
import lightswitchsun from "../img/Light.svg";
import darkswitchmoon from "../img/Dark-Moon.svg";
import spark from "../img/sparkles.svg";
import Rgo from "../img/ArrowRight.svg";
import ham from "../img/HamMenu.svg";






const Navbar = ({ toggletheme,}) => {


    var toggleswh =() =>{
        toggletheme();
        toggleham()
    };
   


    const[hamopen, setHamopen] = useState(false);
  const toggleham = () => setHamopen(!hamopen);
    return (
        <div>
            <nav className=" Navbar ">
  
    <img className=" logo" src={logo} />

    <img className=" ham" src={ham} onClick={toggleham} />

  <div className={ `${hamopen ? "navshow" : 'navhid'} "" `}>
  <NavLink to="/" className=" bar1">
        <p onClick={toggleham} >personal</p>   <img src={Rgo} className="Rgo" /> </NavLink>
       
        <NavLink to="/Business" className=" bar2">
        <p onClick={toggleham} >business</p>   <img src={Rgo} className="Rgo" /> </NavLink>

        <form className=" searchba">
        <img className="searchimg" src={SearchLogo} />
        <input className="findsearch" type="search" placeholder="find card anywhere" />
      </form>


      <div className="mln">
      <button className="modeswitch"  onClick={toggleswh}>
          <div className="lightswitch"><img src={lightswitchsun}  /> </div>
          <div className="darkswitch"><img src={darkswitchmoon} /> </div>
      </button>

      <div className="log" onClick={toggleham}>
          login
      </div>
      <div className=' navcard'      onClick={toggleham}>
          <p className=""> Get started</p> <img className="spac" src={spark} />
      </div>

      </div>

      
  </div>
        
       

        

      
      
     

</nav>
        </div>
    )
}

export default Navbar
