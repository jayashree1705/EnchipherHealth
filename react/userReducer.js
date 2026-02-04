const initialState = {
  isLoggedIn: false,
  userDetails: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, isLoggedIn: true, userDetails: action.payload };
    case "LOGOUT_USER":
      return { ...state, isLoggedIn: false, userDetails: null };
    default:
      return state;
  }
}

export const loginUser = (user) => ({ type: "LOGIN_USER", payload: user });
export const logoutUser = () => ({ type: "LOGOUT_USER" });
