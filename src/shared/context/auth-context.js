import { createContext } from "react";
import { useAuth } from "../hooks/auth-hook";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  image: null,
  // function in an object is a method
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const { token, login, logout, userId, image } = useAuth();
  const value = {
    isLoggedIn: !!token,
    token: token,
    image: image,
    userId: userId,
    login: login,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
