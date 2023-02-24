
import { combineReducers } from "redux";

import { isSignedIn } from "../pages/signin/reducers/isSignedIn";
import { signuppage } from "../pages/signup/reducers";

export const allReducers=combineReducers(
    {
     issignedin:isSignedIn,
     signuppage:signuppage,
    }
)