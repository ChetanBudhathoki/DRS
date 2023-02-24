import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay,faFacebook } from "@fortawesome/free-solid-svg-icons"

import logoleft from "../assets/images/logoleft.png"
import logoright from "../assets/images/logoright.png"
import Navigation from "./Navigation"



const LandingPage=()=>{
    return(
        <StyledLandingPage>
    <section id="home" class="hero_page">
      <div class="nav_place_taker">&nbsp;</div>
      <nav class="navbar">
        <div class="navbar_left">
          <a href=""> <img src="./assets/images/logo.png" alt="logo" /></a>
        </div>
        {/* <div class="navbar_middle">
          <ul>
            <li><a href="">Båtcharter</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Sightseeing</a></li>
            <li><a href="">Våra båtar</a></li>
            <li><a href="">Kontakta oss </a></li>
          </ul>
        </div> */}
        <div class="navbar_right">
            <div className="navigations">
            <ul>
            <li><a href="">EN|नेपाली </a></li>
            <li><a href="">Login</a></li>
            <li><a href="">Signup/Register</a></li>
           
          </ul>
            </div>
            <div className="social_medias">
            <a class="btn_large" href=""><i class="fa-brands fa-facebook " color="blue" size="2x"></i></a>
            </div>
        
        </div>

        <div class="menubar">
          {/* <a href=""><img class="menu_icon" src="./assets/images/menu.svg" alt="logo" /></a>  */}
        </div>
      </nav>

      <div class="hero_container">
        <div class="content_box">
          <div className="content_box_left">
           <img src={logoleft} alt={logoleft} />
          </div>
          <div className="content_box_middle">
            <h3>Government of Nepal</h3>
            <h3>Ministry of Health and Population</h3>
            <h1>BHAKTAPUR CANCER HOSPITAL</h1>
            <h4>Bhaktapur,Nepal</h4>
          </div>
          <div className="content_box_right">
          <img src={logoright} alt={logoright} />
          </div>
        </div>
      </div>
    </section>


    <Navigation/>
        </StyledLandingPage>
    )
}

const StyledLandingPage=styled.div`
border: 2px solid red;
:root {
  --primary_color: #fff;
  --secondary_color: #000;
  /* --btnbgcolor: #FC873F; */
  --btnbgcolor: #ff8500;
  --mobilefont: 0.7rem;
  --greyshade: #f1f0e9;
  --greyshadeborder: #7d7d7d;
}



html {
  scroll-behavior: smooth;
}
body {
  /* font-family: "Poppins", sans-serif; */
  font-weight: 400;
  font-family: "Montserrat", ubuntu;
}

/* utility classes */
a {
  list-style: none;
  text-decoration: none;
  border: none;
  color: var(--primary_color);
  display: inline-block;
  font-size: 1rem;
}
.btn_large {
  text-decoration: none;
  padding: 15px 20px;
  color: var(--primary_color);
  vertical-align: middle;
  background-color: var(--btnbgcolor);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}
.btn_large:hover,
.btn_small:hover {
  transition: background-color 1s;
  cursor: pointer;
  background-color: #f17022;
  /* background-color: #ff8500; */
}

.btn_small {
  text-decoration: none;
  padding: 14px 20px;
  color: var(--primary_color);
  vertical-align: middle;
  background-color: var(--btnbgcolor);
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

span {
  font-size: 2rem;
  font-weight: 300;
}
.span_bold {
  font-weight: 600;
  font-size: 2rem;
}

/* UTILITY CLASSES CLOSED */

/* STYLING FOR HERO PAGE SECTION */

.hero_page {
  height: 80vh;
  border: 2px solid black;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), */
    /* url(../assets/images/seasship.jpg); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.nav_place_taker {
  height: 15%;
}
.navbar {
    border: 2px solid green;
  padding: 0% 10%;
  height: 15%;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 100;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
.sticky {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #041334;
}
.menubar {
  display: none;
}
.navbar_left {
    border: 1px solid blue;

  height: 80%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.navbar_left img {
  height: 50%;
  width: 60%;
  object-fit: cover;
}
.navbar_right {
    border: 1px solid blue;

  height: 80%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 90;
.navigations{
    border: 1px solid black;
}
.navigations ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  flex-wrap: wrap;
}
.navigations ul a {
  font-size: 1rem;
  font-weight: 400;
  margin: 0rem 0.5rem;
}

.social_medias{
    border: 1px solid black;
}

}
/* .navbar_right {
    border: 1px solid blue;
  height: 80%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
} */

/* STYLING FOR HERO CONTAINER */
/* utility class for hero container */

.padding_left {
  padding-left: 15%;
}
/* utility class for hero container closed */

.hero_container {

    /* border: 2px solid gold; */
  height: 85%;
  padding: 0% 10%;
  color: var(--primary_color);
 display: flex;
 align-items: center;
 justify-content: center;

 .content_box{
    /* border: 2px solid greenyellow; */
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    .content_box_left{
        flex: 1;
        /* border: 1px solid blue; */
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content_box_middle{
        flex:3;
        /* border: 1px solid blue; */
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1,h2,h3,h4{
            margin: 0.5rem 0rem;
            color: #FF0000;
        }


    }
    .content_box_right{
        flex: 1;
        /* border: 1px solid blue; */
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    
 }


}


.down_arrow {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 80vh;
  z-index: 1;
}
#down_angle:hover,
#up_angle:hover {
  opacity: 0.8;
}
.down_arrow a,
.to_home_arrow a {
  display: inline-block;
}
.down_arrow img,
.to_home_arrow img {
  height: 2rem;
}

.to_home_arrow {
  height: 3rem;
  width: 3rem;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: var(--btnbgcolor);
  position: fixed;
  bottom: 5%;
  right: 5%;
}
`;

export default LandingPage;