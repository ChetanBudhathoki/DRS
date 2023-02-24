
export const signup=()=>{
    return{
        type:"ISSIGNEDUP",
    }
}

export const signUpAction = (data) => {
    return {
      type: "SIGNUP",
      payload: data,
    };
  };

  export const users = (data) => {
    return {
      type: "USER",
      payload: data,
    };
  };  