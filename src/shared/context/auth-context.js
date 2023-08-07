import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  // token: null,
  // function in an object is a method
  login: () => {},
  logout: () => {},
});