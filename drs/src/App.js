import React, { Component } from "react";

// import { Route } from "react-router-dom";

// imports components
// import TestComponent from './TestComponent';
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import HomePage from "./pages/homepage/HomePage";
import StyledLandingPage from "./pages/landingpage/components/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledLandingPage/>
        <SignUp />
        <SignIn />
        <HomePage/>
      </div>
    );
  }
}

export default App;
