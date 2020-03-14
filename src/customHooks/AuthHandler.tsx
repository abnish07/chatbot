import React from "react";
import LOCALSTORAGE_KEYS from "../constants/localStorageKeys";

export type UserAuth = {
  id: number;
  userInfo?: any;
  token?: string;
  role?: "candidate" | "employer";
};

export const DEFAULT_USER_AUTH = {
  id: 0,
};

const useAuthHandler = (initialState: UserAuth) => {
  const [auth, setAuth] = React.useState(initialState);
  const setAuthStatus = (userAuth: UserAuth) => {
    const updatedAuth = { ...userAuth };
    updatedAuth.id = Number(updatedAuth.id);
    updatedAuth.userInfo = {
      ...updatedAuth.userInfo,
      id: Number(updatedAuth.userInfo.id),
    };
    window.localStorage.setItem(
      LOCALSTORAGE_KEYS.USER_AUTH,
      JSON.stringify(updatedAuth)
    );
    setAuth(updatedAuth);
  };
  const setUnauthStatus = () => {
    window.localStorage.clear();
    setAuth(DEFAULT_USER_AUTH);
  };
  return {
    auth,
    setAuthStatus,
    setUnauthStatus,
  };
};

export default useAuthHandler;
