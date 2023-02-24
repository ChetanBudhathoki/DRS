import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"


// importing middlewares
import { signUpMiddleware } from "./middleware/signUpMiddleware";

const SignUp = () => {


  const dispatch=useDispatch();

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[address,setAddress]=useState("");
  const[contact,setContact]=useState("");

  const submittHandler=(e)=>{
    e.preventDefault();
    console.log(name,email,password,address,contact);
    dispatch(signUpMiddleware({name,email,password,address,contact}));
  }
  return (
    <StyledSignUp>
      <div className="container">
        <div className="container_box">
          <div className="signup_container_left_box box">
            <div className="signup_form_box">
              <div className="signup_form">
                <h3>Sign Up</h3>
                <span>Already have an account?</span>
                <span>Sign in</span>

                <form className="form" onSubmit={submittHandler}>
                  <div className="inputs">
                    <label htmlFor="firstName">Patient Name *</label>
                    <p>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={name}
                        placeholder="patient name"
                        onChange={(e)=>{setName(e.target.value)}}
                      />
                    </p>
                  </div>
                  <div className="inputs">
                    <label htmlFor="email">Email *</label>
                    <p>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                      />
                    </p>
                  </div>
                  <div className="inputs">
                    <label htmlFor="password">Password *</label>
                    <p>
                      <input
                        type="text"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                      />
                    </p>
                  </div>
                  <div className="inputs">
                    <label htmlFor="address">Address *</label>
                    <p>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        placeholder="address"
                        onChange={(e)=>{setAddress(e.target.value)}}
                      />
                    </p>
                  </div>
                  <div className="inputs">
                    <label htmlFor="contact">Contact No *</label>
                    <p>
                      <input type="text" id="contact" name="contact" value={contact} placeholder="contact"
                       onChange={(e)=>{setContact(e.target.value)}}
                      />
                    </p>
                  </div>

                  <button type="submit">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
          <div className="signup_container_right_box box">this is right</div>
        </div>
      </div>
    </StyledSignUp>
  );
};

const StyledSignUp = styled.div`
  border: 2px solid red;

  font-family: "poppins", "sans-serif";

  .container {
    border: 2px solid red;
    padding: 3rem 4rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom,#2F2E41,#6C63FF);;

    .container_box {
      border: 2px solid blue;
      height: 100%;
      width: 90%;
      display: flex;
      align-items: center;
      background-color: #ffffff;

      .box {
        border: 2px solid green;
        height: 100%;
        flex: 1;
      }
      .signup_container_left_box {
        padding: 0rem 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .signup_form_box {
          /* border: 2px solid red; */
          height: 100%;
          width: 80%;
          background: #ffffff;
          box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.13),
            -3px -3px 6px rgba(0, 0, 0, 0.13);

            padding: 2rem 2rem 0rem 2rem;

          .inputs {
            margin: 1rem 0rem;

            p {
              margin-top: 2px;
            }
            input {
              height: 40px;
              width: 100%;
              outline: none;
              border: 2px solid #6c63ff;
              border-radius: 10px;
            }
          }

          button {
            width: 100%;
            background-color: #6c63ff;
            border: none;
            height: 45px;
            border-radius: 10px;
            font: 300;
            font-size: 1.5rem;
            color: white;
            cursor: pointer;

            :focus {
              outline: none;
            }
          }
        }
      }
    }
  }
`;

export default SignUp;
