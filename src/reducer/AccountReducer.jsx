/* Reducer for User Management */
const AccountReducer = (state, action) => {
  switch (action.type) {

    case "LOGIN":
      return { ...state, loginUser: action.payload };

    default:
      throw Error("Action name not defined");
  }
};

export default AccountReducer;
