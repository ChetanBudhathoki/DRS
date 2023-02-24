import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="container">
        <div className="container_box">
          <div className="homepage_container_left_box box">
            <div className="homepage_form_box">
              <div className="homepage_form">
                <h3>
                  Feel free to mention your problem that you are experiencing.
                  we will guide you to find better doctor for your treatment.
                </h3>

                <h1>Write your problems</h1>
                <div class="paragraph_input_box">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="button">
                  <p className="btn">SUBMIT</p>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage_container_right_box box">
           <img src="../homepage/assets/images/homepageimg.png" alt="" />
          </div>
        </div>
      </div>
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
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

      .homepage_container_left_box {
        padding: 0rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .homepage_form_box {
          /* border: 2px solid red; */
          height: 100%;
          width: 80%;
          background: #ffffff;
          /* box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.13),
            -3px -3px 6px rgba(0, 0, 0, 0.13); */

          padding: 3rem 0rem 0rem 0rem;

          h1 {
            /* font-size: 2rem; */
            margin-top: 2rem;
          }

          .paragraph_input_box textarea:focus,
          input:focus {
            outline: none;
            resize: none;
            overflow-y: hidden;
            overflow-x: hidden;
            padding: 1rem;
          }
          .paragraph_input_box textarea {
            border: 2px solid var(--greyshadeborder);
            margin-top: 1rem;
            resize: none;
            width: 100%;
            height: 100%;
            background: #ffffff;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.13),
              -3px -3px 6px rgba(0, 0, 0, 0.13);

            border-radius: 10px;
          }
          .paragraph_input_box textarea:placeholder-shown {
            /* padding: 1rem;
            font-size: 0.8rem;
            font-family: "Ubuntu"; */
          }


          .button{
           margin-top: 2rem;
          .btn {
          
             height: 40px;
             text-align: center;
             display: flex;
             align-items: center;
             justify-content: center;
             width: 130px;
             background-color: #6C63FF;
             border-radius: 6px;
             cursor: pointer;
             color: #ffffff;
          }
        }
        }
      }
    }
  }
`;

export default HomePage;
