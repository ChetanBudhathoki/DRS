export const signup = (state = false, action) => {
    switch (action.type) {
      case "ISSIGNEDUP": {
        return !state;
      }
      
      
      default:
        return state;
    }
  };
  
  export const users = (state = [], action) => {
    switch (action.type) {
      case "USER": {
        return [...state,action.payload];
      }
      
      
      default:
        return state;
    }
  };