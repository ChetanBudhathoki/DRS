import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

// import middleware
import { signInMiddleware } from "./middleware/signInMIddleware";

const SignIn = () => {

  const dispatch=useDispatch();

  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const loginSubmittHandler=(e)=>{
    e.preventDefault();
    console.log(name,password);

    dispatch(signInMiddleware({name,password}));
  }

  return (
    <StyledSignIn>
      <div className="container">
        <div className="container_box">
          <div className="signin_container_left_box box">
            <div className="signin_form_box">
              <div className="signin_form">
                <h3>Sign In</h3>
                <div className="title">
                <span>Doesn't have an account?</span>
                <span>Sign Up</span>
                </div>

                <form className="form" onSubmit={loginSubmittHandler}>
                  <div className="inputs">
                    <label htmlFor="firstName">Patient Id or Email Address *</label>
                    <p>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={name}
                        placeholder="patient id or email address"
                      onChange={(e)=>setName(e.target.value)}
                      />
                    </p>
                  </div>
                  <div className="inputs">
                    <label htmlFor="password">Enter your password *</label>
                    <p>
                      <input
                        type="text"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="password"
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                    </p>
                  </div>
              

                  <button type="submit">Sign In</button>
                </form>
              </div>
            </div>
          </div>
          <div className="signin_container_right_box box"></div>
        </div>
      </div>
    </StyledSignIn>
  );
};

const StyledSignIn = styled.div`
  border: 2px solid red;

  .container {
    border: 2px solid red;
    padding: 3rem 4rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom, #2f2e41, #6c63ff);

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

      .signin_container_left_box {
        padding: 0rem 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .signin_form_box {
          /* border: 2px solid red; */
          height: 100%;
          width: 80%;
          background: #ffffff;
          box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.13),
            -3px -3px 6px rgba(0, 0, 0, 0.13);

          padding: 3rem 2rem 0rem 2rem;
          
          h3{
            font-size: 2rem;
          }
          .title{
            margin-top: 1rem;
            font-family: "inter";
          }

          .form{
            margin-top: 4rem;
          }

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
            margin-top: 3rem;

            :focus {
              outline: none;
            }
          }
        }
      }
    }
  }
`;

export default SignIn;
