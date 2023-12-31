// this hook is used to manage authentication - Login function, Logout function and to get the
// token and userID from backend

import { useState, useCallback, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

//closing card dropdown when a user logouts
import { CartContext } from "../context/cart-context";

let logOutTimer;

export const useAuth = () => {
  const navigate = useNavigate();
  const cart = useContext(CartContext);

  const [token, setToken] = useState(false);
  const [image, setImage] = useState(false);
  const [name, setName] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, image, name, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    setImage(image);
    setName(name);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    // storing user id and token in local storage for persistent login
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        image: image,
        name: name,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setImage(null);
    setName(null);
    cart.setIsCartOpen(false);
    localStorage.removeItem("userData");
    navigate("/authentication");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logOutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logOutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  // checking for stored user id and token and initiating persistent login
  // useEffect runs after the render cycle and it only runs once because login is wrapped in useCallback
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.image,
        storedData.name,
        storedData.token,
        new Date(storedData.expiration)
      );
    } else {
      // console.log("No user data found in localStorage.");
    }
  }, [login]);

  return { token, login, logout, userId, image, name };
};
