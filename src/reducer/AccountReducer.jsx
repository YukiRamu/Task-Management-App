/* Reducer for User Management */
const AccountReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loginUser: action.payload };
    case "SIGNUP":
      return { ...state, users: [...state.users, action.payload] };
    default:
      throw Error("Action name not defined");
  }
};

export default AccountReducer;
