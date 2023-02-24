

import { users } from "../actions/signup";
export const signUpMiddleware=(data)=>{
console.log(data);

return async (dispatch, _) => {
    console.log(data);

    dispatch(users(data));
}
}