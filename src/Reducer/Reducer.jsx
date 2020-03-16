const initialState = {
  login: false,
  email: "",
  first: "",
  last: "",
  age: 18
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGINSTATE":
      return {
        ...state,
        login: action.payload.login
      };
    case "CHANGE_USERDATA":
      return {
        ...state,
        login: action.payload.login,
        email: action.payload.email,
        first: action.payload.first,
        last: action.payload.last,
        age: action.payload.age
      };
    default:
      return state;
  }
}

export default reducer;
