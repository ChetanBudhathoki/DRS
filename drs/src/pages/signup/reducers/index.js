
import { combineReducers } from "redux";

import { signup } from "../reducers/signup";
import { users } from "../reducers/signup";

export const signuppage=combineReducers({
   signup,
   users
     
   });