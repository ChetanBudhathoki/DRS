import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay,faCaretDown } from "@fortawesome/free-solid-svg-icons"

const Navigation = () => {
  return (
    <StyledNavigation>
        <div className="navigation">
      <div class="navbar_portable">
        <a href="#home">Home</a>
      
        <div class="dropdown">
          <button class="dropbtn">
            Services
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Departments
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Our Teams
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Our Committe
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Academics
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Notices
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#news">About Us</a>
        <a href="#news">Contact Us</a>
      </div>
      </div>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  border: 2px solid red;
  /* overflow: scroll; */
  /* overflow-y: scroll; */
  
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
  display: none;
}

  .navigation{
    position: relative;
    /* height: 30vh; */
    display: flex;


     overflow: scroll; 


    ::-webkit-scrollbar {
  display: none;
  
}
  }
  .navbar_portable {
    overflow: hidden;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-around;



  
  }

  .navbar_portable a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .dropdown {
    /* float: left; */
    overflow: hidden;
 
 
  }

  .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }

  .navbar_portable a:hover,
  .dropdown:hover .dropbtn {
    background-color: red;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }


`;

export default Navigation;
