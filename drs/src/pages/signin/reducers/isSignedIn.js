export const isSignedIn = (state = false, action) => {
  switch (action.type) {
    case "ISSIGNEDIN": {
      return !state;
    }

    default:
      return state;
  }
};
